import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditFolderComponent } from './folders/comp/edit-folder/edit-folder.component';
import { CreateFolderComponent } from './folders/comp/create-folder/create-folder.component';
import { ListFoldersComponent } from './folders/comp/list-folders/list-folders.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFolderComponent,
    CreateFolderComponent,
    ListFoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
