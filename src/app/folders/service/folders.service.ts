import {Injectable} from '@angular/core';
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
    console.log('getting every folders');
    return this.api.getData('folders.json').pipe(
      map(
      (data) => {
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
    console.log('For Month : ' + monthNumber);
    return this.getAll().pipe(
      map((value: Folder[]) => {
        return value.filter((folder) => {
          return folder.mois === monthNumber;
        });
      }
    ));
  }

  getNbMetersPerMonth(monthNumber: number, valid = true): Observable<number>{
    console.log('To get nbMetersPerMonth :');
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
          nbMeters += folder.meters;
        }
        return nbMeters;
      })
    );
  }
  // TODO backup method
  // backupToJSON(): void{
  //   const writeStream = fs.createWriteStream('/assets/');
  //   this.getAll().subscribe((folders) => {
  //     folders.forEach((folder) => {
  //       const folderJSON = folder.toJSON();
  //     });
  //   });
  // }
}
