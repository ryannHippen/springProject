import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
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

  @Output() shareIdEvent = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private fileService: FileuploadService,
  ) { }

  ngOnInit() {
  }

  addFile(): void {
    this.fileService.addFile(this.file)
        .subscribe( data => {
          alert('File uploaded successfully.');
          //console.log(data.fileId);
          this.shareId(data.fileId);
          //this.goBack();
        });
  }

  shareId(id) {
    this.shareIdEvent.emit(id)
  }
}
