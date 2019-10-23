import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileuploadService } from '../fileupload.service';
import { Fileupload } from '../models/fileupload';

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

  @Output() shareFormDataEvent = new EventEmitter<FormData>();

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
  this.shareForm(formData);
  //this.fileService.updateFile(formData, 1)

  //  .subscribe(data => {
  //    console.log(data);
      alert('File uploaded successfully.');
  //  }) 
}

shareForm(form) {
  this.shareFormDataEvent.emit(form)
}

}
