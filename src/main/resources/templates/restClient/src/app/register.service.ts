import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Register } from './models/register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = '/api/reg';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  public addRegistration(register) {
    return this.http.post<Register>(this.baseUrl, register, this.httpOptions);
  }
}
