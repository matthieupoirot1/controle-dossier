import { Component, OnInit } from '@angular/core';
import {FoldersService} from '../../service/folders.service';
import {Folder} from '../../model/folder.model';

@Component({
  selector: 'app-list-folders',
  templateUrl: './list-folders.component.html',
  styleUrls: ['./list-folders.component.styl']
})
export class ListFoldersComponent implements OnInit {
  public folders: Folder[] = [];
  constructor(private foldersService: FoldersService) { }

  ngOnInit(): void {
    this.foldersService.getAll().subscribe((folders) => {
      this.folders = folders;
    });
  }

}