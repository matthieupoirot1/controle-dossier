import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-folder',
  templateUrl: './edit-folder.component.html',
  styleUrls: ['./edit-folder.component.styl']
})
export class EditFolderComponent implements OnInit {

  folderForm = new FormGroup({
    name : new FormControl(''),
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

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(): void{
    console.log('submitted !');
  }
}
