import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/api/api.service';
import {Observable} from 'rxjs';
import {Folder} from '../model/folder.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor(private api: ApiService) {}

  getAll(): Observable<Folder[]>{
    return this.api.getData('folders.json').pipe(
      map(
      (data) => {
        console.log(data);
        // Data is an object composed of folder object, so getting only the values
        return Object.values(data).map((JSONfolder) => {
          return Folder.createFromJSON(JSONfolder);
        });
      }
      )
    );
  }

  getById(id: number): Observable<Folder>{
    return this.api.getData('folders.json').pipe(
      map(
        (data: any[]) => {
          return data[id];
        }
      )
    );
  }

  create(folder: Folder): Observable<any>{
    return this.api.putData('folders/' + folder.getFormatedName() + '.json', folder.toJSON());
  }
}