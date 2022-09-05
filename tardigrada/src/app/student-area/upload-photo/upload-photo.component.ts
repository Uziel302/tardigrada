import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
    fileName = '';
    constructor(
      private http: HttpClient
    ) {}

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("upfile", file);
            const upload$ = this.http.post(environment.apiEndPoint + 'upload', formData);
            upload$.subscribe();
        }
    }
}
