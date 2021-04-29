import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateFolderComponent} from './folders/comp/create-folder/create-folder.component';
import {ListFoldersComponent} from './folders/comp/list-folders/list-folders.component';

const routes: Routes = [
  {path: 'create', component: CreateFolderComponent},
  {path: 'list', component: ListFoldersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
