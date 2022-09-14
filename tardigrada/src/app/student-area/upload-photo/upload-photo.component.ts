import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/login-screen/login.service';
import { ScheduleService } from 'src/app/schedule/schedule.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css'],
})
export class UploadPhotoComponent {
  public fileName = '';
  @Input() uploadColumn: string = '';
  @Input() uploadTable: string = '';
  @Input() additionalColumn: string = '';
  @Input() additionalContent: string = '';
  @Output() uploaded = new EventEmitter<{ filename: string; id: number }>();

  constructor(
    private http: HttpClient, 
    public loginService: LoginService,
    public scheduleService: ScheduleService,
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('upfile', file);
      formData.append('childId', '' + this.loginService.currentChildId);
      formData.append('lectureId', '' + this.scheduleService.selectedLecture.id);
      formData.append('uploadColumn', this.uploadColumn);
      formData.append('uploadTable', this.uploadTable);
      formData.append('uploadsFolder', environment.uploadsFolder);
      formData.append('additionalColumn', this.additionalColumn);
      formData.append('additionalContent', this.additionalContent);
      const upload$ = this.http.post<{ filename: string; id: number }>(
        environment.apiEndPoint + 'upload',
        formData
      );
      upload$.subscribe((data) => {
        //this timeout is needed to prevent trying access the photo that was just saved before it's ready
        setTimeout(() => {
          const currentUser =
            this.uploadTable === 'children' ? 'currentChild' : 'teacher';
          if (this.uploadColumn === 'cover') {
            this.loginService[currentUser].cover = data.filename;
          }
          if (this.uploadColumn === 'profile') {
            this.loginService[currentUser].profile = data.filename;
          }
          if (this.uploadColumn === 'book') {
            this.scheduleService.selectedLecture.book = data.filename;
          }
          if (this.uploadTable === 'teachersNotes') {
            this.uploaded.emit({ filename: data.filename, id: data.id });
          }
        }, 5);
      });
    }
  }
}
