import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fileupload } from './models/fileupload';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private baseUrl = '/api/file';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public addFile(file) {
    return this.http.post<Fileupload>(this.baseUrl, file, this.httpOptions);
  }

}
