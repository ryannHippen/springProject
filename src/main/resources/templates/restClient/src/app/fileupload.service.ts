import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fileupload } from './models/fileupload';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private baseUrl = '/api/files';
  f = new Fileupload();
  
  constructor(private http: HttpClient) { }

  public addFile(file: FormData) {
    return this.http.post<Fileupload>(this.baseUrl, file);
  }

}
