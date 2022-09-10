import { Component, Input } from '@angular/core';
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
    @Input() uploadType: string = '';
    @Input() isStudent: boolean = true;

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
            formData.append("tableName", this.isStudent ? 'children' : 'teachers');
            formData.append("uploadsFolder", environment.uploadsFolder);
            const upload$ = this.http.post<{filename: string}>(environment.apiEndPoint + 'upload', formData);
            upload$.subscribe(
              (data) => {
                //this timeout is needed to prevent trying access the photo that was just saved before it's ready
                setTimeout(() => {
                  const currentUser = this.isStudent ? 'currentChild' : 'teacher';
                  if(this.uploadType === 'cover'){
                    this.loginService[currentUser].cover = data.filename;
                  }
                  if(this.uploadType === 'profile'){
                    this.loginService[currentUser].profile = data.filename;
                  }
                }, 5)
              }
            );
        }
    }
}
