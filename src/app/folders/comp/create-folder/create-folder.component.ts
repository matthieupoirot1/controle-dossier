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
  });

  constructor(private folderService: FoldersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      // todo si id alors set tous les formControl au dossier attention il faut le recuperer avec le folderService
    }
  }

  onSubmit(): void{
    console.log(this.folderForm.value);
    this.folderService.create(Folder.createFromJSON(this.folderForm.value)).subscribe(() => {
      this.router.navigateByUrl('/list');
    });
  }
}
