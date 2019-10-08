import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Profile } from './models/profile';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  //private baseUrl:string='http://localhost:8080/api';
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  public getProfiles() {
    return this.http.get<Profile[]>(this.baseUrl+'/profiles');
  }

  public getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl+'/profile/'+id);
  }

  updateProfile (profile) {
    return this.http.put(this.baseUrl+'/profiles', profile);
  }

  public deleteUser(profile) {
    return this.http.delete(this.baseUrl + "/"+ profile.profileId);
  }

  public addUser(profile) {
    return this.http.post<Profile>(this.baseUrl, profile);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
