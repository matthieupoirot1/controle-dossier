import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFolderComponent } from './folders/comp/create-folder/create-folder.component';
import { ListFoldersComponent } from './folders/comp/list-folders/list-folders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import { TotalMetersComponent } from './folders/comp/total-meters/total-meters.component';
import { DisplayFoldersComponent } from './folders/comp/display-folders/display-folders.component';
import { FolderCardComponent } from './folders/comp/folder-card/folder-card.component';
import { VerticalSeparatorComponent } from './cosmetics/vertical-separator/vertical-separator.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFolderComponent,
    ListFoldersComponent,
    TotalMetersComponent,
    DisplayFoldersComponent,
    FolderCardComponent,
    VerticalSeparatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FlexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
