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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getFile(id) {
    console.log('in get file');
    return this.http.get<FormData>(this.baseUrl + '/file/' + id, this.httpOptions);
  }

  public addFile(file: FormData) {
    return this.http.post<Fileupload>(this.baseUrl, file);
  }

  public updateFile(file: FormData){

    return this.http.put(this.baseUrl, file);
  }

}
