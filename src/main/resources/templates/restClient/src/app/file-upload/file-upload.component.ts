import { Component, OnInit, Input } from '@angular/core';
import { Fileupload } from '../models/fileupload';
import { FileuploadService } from '../fileupload.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() file: Fileupload = new Fileupload();

  constructor(
    private route: ActivatedRoute,
    private fileService: FileuploadService,
   // private location: Location
  ) { }

  ngOnInit() {
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
