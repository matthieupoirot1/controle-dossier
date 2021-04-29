import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://dossiers-aaa88-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  /**
   * @param path The completion of the path ex : serie.json
   * @returns Observable : contain the response body as json object
   */
  getData(path: string): Observable<any> {
    return this.http.get(this.API_URL + path);
  }


  /**
   * @param path  The completion of the path ex : serie.json
   * @param body  JavaScript Object Notation (JSON) string.
   * @returns Observable of JSON Object
   */
  putData(path: string, body: string): Observable<any> {
    return this.http.put(this.API_URL + path, body);
  }


  /**
   * @param path The completion of the path ex : serie.json
   * @returns Observable the response body as a JSON object.
   */
  deleteData(path: string): Observable<any> {
    return this.http.delete(this.API_URL + path);
  }
}
