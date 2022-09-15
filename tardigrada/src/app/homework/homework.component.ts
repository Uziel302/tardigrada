import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ScheduleService } from '../schedule/schedule.service';
import { environment } from '../../environments/environment';
import { LoginService } from '../login-screen/login.service';
import { ParsingService } from '../general/parser.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: [
    '../student-area/shared-user-area.css',
    './homework.component.css',
  ],
})
export class HomeworkComponent implements OnInit {
  public responseSuccess: boolean[] = [];
  @Input() isStudent: boolean = true;

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    public parsing: ParsingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  submitResponse(i: number) {
    this.http
      .post(environment.apiEndPoint + 'saveHwResponse', {
        lectureId: this.scheduleService.selectedLecture.id,
        childId: this.loginService.currentChildId,
        homeworkId: this.scheduleService.currentHomeworks[i].id,
        chwId: this.scheduleService.currentHomeworks[i].chwId,
        text: this.scheduleService.currentHomeworks[i].chwText,
        file: this.scheduleService.currentHomeworks[i].chwFile,
      })
      .subscribe(
        (data) => {
          this.responseSuccess[i] = true;
          setTimeout(() => {
            this.responseSuccess[i] = false;
          }, 3000);
        },
        (error) => {}
      );
  }

  submitFeedback(i: number) {
    this.http
      .post(environment.apiEndPoint + 'saveHwFeedback', {
        lectureId: this.scheduleService.selectedLecture.id,
        childId: this.loginService.currentChildId,
        homeworkId: this.scheduleService.currentHomeworks[i].id,
        chwId: this.scheduleService.currentHomeworks[i].chwId,
        text: this.scheduleService.currentHomeworks[i].fhwText,
        file: this.scheduleService.currentHomeworks[i].fhwFile,
      })
      .subscribe(
        (data) => {
          this.responseSuccess[i] = true;
          setTimeout(() => {
            this.responseSuccess[i] = false;
          }, 3000);
        },
        (error) => {}
      );
  }

  updateHwResponseFile(event: string, i: number) {
    setTimeout(() => {
      this.scheduleService.currentHomeworks[i].chwFile =
        this.scheduleService.currentHomeworks[i].chwFile ?? '[]';
      this.scheduleService.currentHomeworks[i].chwFile =
        this.parsing.pushToString(
          this.scheduleService.currentHomeworks[i].chwFile,
          event
        );
    }, 5);
  }

  updateHwFeedbackFile(event: string, i: number) {
    setTimeout(() => {
      this.scheduleService.currentHomeworks[i].fhwFile =
        this.scheduleService.currentHomeworks[i].fhwFile ?? '[]';
      this.scheduleService.currentHomeworks[i].fhwFile =
        this.parsing.pushToString(
          this.scheduleService.currentHomeworks[i].fhwFile,
          event
        );
    }, 5);
  }
}
