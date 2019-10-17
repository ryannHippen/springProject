import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Fileupload } from './models/fileupload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  // SERVER_URL = 'http://localhost:3000';

  private baseUrl = '/api/file';
  private filePass = new Fileupload();
  constructor(private http: HttpClient) { }

  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // application/json
// multipart/form-data
// application/octet-stream
  public upload(file) {
    // let uploadURL = `${this.SERVER_URL}/auth/${userId}/avatar`;
    this.filePass.file = file;
    // this.filePass.fileId = 1;
    this.filePass.filepath = '';
    return this.http.post<Fileupload>(this.baseUrl, this.filePass, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }

  public addFile(file) {
    return this.http.post<Fileupload>(this.baseUrl, file, this.httpOptions);
  }

}
