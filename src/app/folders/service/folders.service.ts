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
        if (!data) { data = {}; }
        // Data is an object composed of folder object, so getting only the values
        return Object.values(data).map((JSONfolder) => {
          return Folder.createFromJSON(JSONfolder);
        });
      }
      )
    );
  }

  getById(formatedName: string): Observable<Folder>{
    return this.api.getData('folders.json').pipe(
      map(
        (data) => {
          return data[formatedName];
        }
      )
    );
  }

  create(folder: Folder): Observable<any>{
    return this.api.putData('folders/' + folder.getFormatedName() + '.json', folder.toJSON());
  }

  delete(folder: Folder): Observable<any>{
    return this.api.deleteData('folders/' + folder.getFormatedName() + '.json');
  }

  getAllPerMonth(monthNumber: number): Observable<Folder[]> {
    return this.getAll().pipe(
      map((value: Folder[]) => {
        console.log('before sort :');
        console.log(value);
        const sortedFolders = value.filter((folder) => {
          console.log(monthNumber);
          console.log(folder.mois);
          return folder.mois === monthNumber;
        });
        console.log('after sort :');
        console.log(sortedFolders);
        return sortedFolders;
      }
    ));
  }

  getNbMetersPerMonth(monthNumber: number, valid = true): Observable<number>{
    return this.getAllPerMonth(monthNumber).pipe(
      map((folders: Folder[]) => {
        folders = folders.filter(folder => folder.valid === valid && folder.mois === monthNumber);
        let nbMeters = 0;
        for (const folder of folders) {
          nbMeters += folder.meters;
        }
        return nbMeters;
      })
    );
  }

  getTotalNbMeters(valid= true): Observable<number>{
    return this.getAll().pipe(
      map((folders: Folder[]) => {
        folders = folders.filter(folder => folder.valid === valid);
        let nbMeters = 0;
        for (const folder of folders) {
          console.log(folder.meters);
          nbMeters += folder.meters;
        }
        return nbMeters;
      })
    );
  }
}
