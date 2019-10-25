import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileuploadService } from '../fileupload.service';
import { Fileupload } from '../models/fileupload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.css']
})
export class UpdateFileComponent implements OnInit {

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  profileId: any = null;
  filePreview: Fileupload;
  @Input() shareCurrentFileId: any;

  @Output() shareFormDataEvent = new EventEmitter<FormData>();

constructor(private http: HttpClient, private fileService: FileuploadService,) { }

  ngOnInit() {
     this.receiveFileId();
    console.log('in ngoninit ' + this.shareCurrentFileId);
  }

  receiveFileId() {
    console.log('in receive file id');
    console.log(this.shareCurrentFileId);
    this.fileService.getFile(this.shareCurrentFileId)
    
    .subscribe(file =>{
      console.log('right after subscribe');
        // this.filePreview = file;
        console.log('console.log filepreview id' +this.filePreview.fileId);
        console.log(this.filePreview.filepath);
        console.log(this.filePreview.file);;

      });
      
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
  this.shareForm(formData);
      alert('File uploaded successfully.');
}

shareForm(form) {
  this.shareFormDataEvent.emit(form)
}

}
