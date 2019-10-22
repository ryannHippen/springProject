import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileuploadService } from '../fileupload.service';
import { Fileupload } from '../models/fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Output() shareIdEvent = new EventEmitter<number>();

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

constructor(private http: HttpClient, private fileService: FileuploadService,) { }

  ngOnInit() {
  }
 
fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
}
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    console.log(this.uploadedFilePath)
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}
 

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.fileService.addFile(formData)

      .subscribe(data => {
        console.log(data.fileId);
        this.shareId(data.fileId);
        alert('File uploaded successfully.');
      }) 
  }

  shareId(id) {
    this.shareIdEvent.emit(id)
  }

}


