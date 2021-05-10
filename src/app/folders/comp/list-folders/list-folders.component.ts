import {Component, Input, OnInit} from '@angular/core';
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
  @Input() public monthNumber !: number; // decorate the property with @Input()
  public monthName = '';

  ngOnInit(): void {
    this.loadFolders();
    if (!this.monthNumber){
      this.monthNumber = new Date().getMonth() + 1;
    }
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    this.monthName = monthNames[this.monthNumber - 1];
  }

  loadFolders(): void{
    console.log(this.folders);
    this.foldersService.getAllPerMonth(this.monthNumber).subscribe((folders) => {
      console.log(folders);
      this.folders = folders;
    });
  }

  onDelete(folder: Folder): void {
    console.log('Suppresion dossier ' + folder.name);
    this.foldersService.delete(folder).subscribe(() => {
      this.loadFolders();
    });
  }
}
