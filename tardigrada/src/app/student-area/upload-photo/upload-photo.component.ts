import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
    public fileName = '';
    @Output() upload = new EventEmitter<string>;

    constructor(
      private http: HttpClient
    ) {}

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("upfile", file);
            const upload$ = this.http.post<{filename: string}>(environment.apiEndPoint + 'upload', formData);
            upload$.subscribe(
              (data) => {
                //this timeout is needed to prevent trying access the photo that was just saved before it's ready
                setTimeout(() => {
                  this.upload.emit('/assets/uploads/'+data.filename);
                }, 5)
              }
            );
        }
    }
}
