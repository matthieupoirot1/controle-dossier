import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FoldersService} from '../../service/folders.service';
import {Folder} from '../../model/folder.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.styl']
})
export class CreateFolderComponent implements OnInit {
  public folderModel ?: Folder;
  public folderForm = new FormGroup({
    name : new FormControl('', Validators.required),
    photos: new FormControl(false),
    vt: new FormControl(false),
    imposition: new FormControl(false),
    devis: new FormControl(false),
    CGI: new FormControl(false),
    attestation: new FormControl(false),
    dateBatigest: new FormControl(false),
    cadastre: new FormControl(false),
    controle: new FormControl(false),
    meters: new FormControl(0),
    mois: new FormControl(1, [Validators.max(12), Validators.min(1), Validators.required]),
    commentaire: new FormControl(''),
  });

  public monthSuffix = '';

  constructor(private foldersService: FoldersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const formatedName = this.route.snapshot.paramMap.get('formatedName');
    if (formatedName){
      this.foldersService.getById(formatedName).subscribe(
        (folder) => {

          this.folderModel = folder;

          this.folderForm.controls.name.setValue(folder.name);
          this.folderForm.controls.photos.setValue(folder.photos);
          this.folderForm.controls.vt.setValue(folder.vt);
          this.folderForm.controls.imposition.setValue(folder.imposition);
          this.folderForm.controls.devis.setValue(folder.devis);
          this.folderForm.controls.CGI.setValue(folder.CGI);
          this.folderForm.controls.attestation.setValue(folder.attestation);
          this.folderForm.controls.dateBatigest.setValue(folder.dateBatigest);
          this.folderForm.controls.cadastre.setValue(folder.cadastre);
          this.folderForm.controls.controle.setValue(folder.controle);
          this.folderForm.controls.meters.setValue(folder.meters);
          this.folderForm.controls.mois.setValue(folder.mois);
          this.folderForm.controls.commentaire.setValue(folder.commentaire);
        }
      );
    }else{
      this.folderForm.controls.mois.setValue(new Date().getMonth() + 1);
    }

    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    this.monthSuffix = monthNames[this.folderForm.controls.mois.value - 1];
    this.folderForm.controls.mois.valueChanges.subscribe((value) => {
      this.monthSuffix = monthNames[value - 1];
    });
  }

  onSubmit(): void{
    console.log(this.folderForm.value);
    const newOrOldFolder = Folder.createFromJSON(this.folderForm.value);
    newOrOldFolder.valid = newOrOldFolder.checkValidness();
    console.log('Saving :');
    console.log(newOrOldFolder);
    if (!this.folderModel || !newOrOldFolder.year){
      newOrOldFolder.year = new Date().getFullYear();
    }
    this.foldersService.create(newOrOldFolder).subscribe(() => {
      this.router.navigateByUrl('/list');
    });
  }
}
