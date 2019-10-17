import { Component, OnInit, Input } from '@angular/core';
import { Fileupload } from '../models/fileupload';
import { FileuploadService } from '../fileupload.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  @Input() file: Fileupload = new Fileupload();
  fileToUpload: File = null;
  blob: Blob;
  form: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private route: ActivatedRoute,
    private fileService: FileuploadService,
    private formBuilder: FormBuilder

   // private location: Location
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({avatar: ['']});
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this.fileService.upload(formData).subscribe(
      // (res) => this.uploadResponse = res
      // (err) => this.error = err
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.fileService.addFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}

  goBack(): void {
     // this.location.back();
  }


  addFile(): void {
    console.log(this.file.file);
    this.fileService.addFile(this.file)
        .subscribe( data => {
          alert('File uploaded successfully.');
          this.goBack();
    });
  }
}
