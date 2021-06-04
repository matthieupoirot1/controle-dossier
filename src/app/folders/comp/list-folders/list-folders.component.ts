import {Component, Input, OnInit} from '@angular/core';
import {FoldersService} from '../../service/folders.service';
import {Folder} from '../../model/folder.model';

@Component({
  selector: 'app-list-folders',
  templateUrl: './list-folders.component.html',
  styleUrls: ['./list-folders.component.styl']
})
export class ListFoldersComponent implements OnInit {
  public refusedFolders: Folder[] = [];
  public validFolders: Folder[] = [];
  public invalidFolders: Folder[] = [];
  constructor(private foldersService: FoldersService) { }
  @Input() public monthNumber !: number; // decorate the property with @Input()
  public monthName = '';

  ngOnInit(): void {
    this.reloadFolders();
    if (!this.monthNumber){
      this.monthNumber = new Date().getMonth() + 1;
    }
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    this.monthName = monthNames[this.monthNumber - 1];
  }

  public reloadFolders = () => {
    this.foldersService.getAllPerMonth(this.monthNumber).subscribe((folders) => {
      console.log(folders);
      this.refusedFolders = folders.filter((folder) => {
        return folder.refuse;
      });
      this.validFolders = folders.filter((folder) => {
        return folder.valid && !folder.refuse;
      });
      this.invalidFolders = folders.filter((folder) => {
        return !(folder.valid) && !folder.refuse;
      });
    });
  }
}
