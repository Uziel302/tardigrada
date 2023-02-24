import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/login-screen/login.service';
import { ScheduleService } from 'src/app/schedule/schedule.service';
import { ParsingService } from 'src/app/general/parser.service';

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
  @Output() uploaded = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    public loginService: LoginService,
    public scheduleService: ScheduleService,
    public parsing: ParsingService
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('upfile', file);
      formData.append('childId', '' + this.loginService.connectedChildId);
      formData.append(
        'lectureId',
        '' + this.scheduleService.selectedLecture.id
      );
      formData.append('uploadColumn', this.uploadColumn);
      formData.append('uploadTable', this.uploadTable);
      formData.append('uploadsFolder', environment.uploadsFolder);
      const upload$ = this.http.post<{ filename: string }>(
        environment.apiEndPoint + 'upload',
        formData
      );
      upload$.subscribe((data) => {
        const filename: string = data.filename;
        //this timeout is needed to prevent trying access the photo that was just saved before it's ready
        setTimeout(() => {
          this.uploaded.emit(filename);
          const currentUser =
            this.uploadTable === 'children' ? 'currentChild' : 'teacher';
          if (this.uploadColumn === 'cover') {
            this.loginService[currentUser].cover = filename;
          }
          if (this.uploadColumn === 'profile') {
            this.loginService[currentUser].profile = filename;
          }
          if (this.uploadColumn === 'book') {
            this.scheduleService.selectedLecture.book = filename;
          }
          if (this.uploadColumn === 'stationeryFile') {
            this.scheduleService.selectedLecture.stationeryFile =
              this.parsing.pushToString(
                this.scheduleService.selectedLecture.stationeryFile,
                filename
              );
          }
        }, 5);
      });
    }
  }
}
