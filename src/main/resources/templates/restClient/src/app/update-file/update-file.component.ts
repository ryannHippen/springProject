import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileuploadService } from '../fileupload.service';
import { Fileupload } from '../models/fileupload';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  getFile: FormData;
  imageToShow: any;
  show: boolean = true;

  @Input() shareCurrentFileId: any;
  @Output() shareFormDataEvent = new EventEmitter<FormData>();

constructor(private http: HttpClient, private fileService: FileuploadService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.getImageFromService();
  }

  receiveFileId() {
    console.log('in receive file id');
    console.log(this.shareCurrentFileId);
    this.fileService.getFile(this.shareCurrentFileId).subscribe();
  }

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

  getImageFromService() {
    this.fileService.getFile(this.shareCurrentFileId).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
}

  fileProgress(fileInput: any) {
    this.show = true;
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
      this.getImageFromService();
      this.show = false;
}

shareForm(form) {
  this.shareFormDataEvent.emit(form)
}

}
