import { Component, OnInit } from '@angular/core';
import {Folder} from '../../model/folder.model';

@Component({
  selector: 'app-display-folders',
  templateUrl: './display-folders.component.html',
  styleUrls: ['./display-folders.component.styl']
})
export class DisplayFoldersComponent implements OnInit {

  public yearMonth: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= new Date().getMonth() + 1; i++){
      this.yearMonth.unshift(i);
    }
  }

}
