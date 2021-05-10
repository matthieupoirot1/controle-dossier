import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateFolderComponent} from './folders/comp/create-folder/create-folder.component';
import {ListFoldersComponent} from './folders/comp/list-folders/list-folders.component';
import {DisplayFoldersComponent} from './folders/comp/display-folders/display-folders.component';

const routes: Routes = [
  {path: 'create', component: CreateFolderComponent},
  {path: 'list', component: DisplayFoldersComponent},
  {path: 'edit/:formatedName', component: CreateFolderComponent},
  {path: '**', component: DisplayFoldersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
