import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/login-screen/login.service';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
    public fileName = '';
    @Output() upload = new EventEmitter<string>;
    @Input() uploadType: string = '';

    constructor(
      private http: HttpClient,
      public loginService: LoginService,
    ) {}

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("upfile", file);
            formData.append("childId", ''+this.loginService.currentChildId);
            formData.append("uploadType", this.uploadType);
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
