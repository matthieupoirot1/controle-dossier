import {Component, Input, OnInit} from '@angular/core';
import {Folder} from '../../model/folder.model';
import {FoldersService} from '../../service/folders.service';

@Component({
  selector: 'app-folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.styl']
})
export class FolderCardComponent implements OnInit {

  constructor(private foldersService: FoldersService) { }
  @Input() folder !: Folder;
  @Input() reloadFolders !: any;
  ngOnInit(): void {
  }

  onDelete(folder: Folder): void {
    console.log('Suppresion dossier ' + folder.name);
    this.foldersService.delete(folder).subscribe(() => {
      this.reloadFolders();
    });
  }
}
