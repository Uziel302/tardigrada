import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { IChild } from '../models/child';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./shared-user-area.css', './student-area.component.css'],
})
export class StudentAreaComponent implements OnInit, OnDestroy {
  public userId: number = 0;
  public showSettings: boolean = false;
  public openHwResponse: boolean[] = [];
  public responseSuccess: boolean[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.getChildData().subscribe((childData: IChild) => {
        this.loginService.currentChild = childData;
      })
    );

    if (this.loginService.children.length === 0) {
      this.subscriptions.push(
        this.loginService.getChildren().subscribe((children: IChild[]) => {
          this.loginService.children = children;
        })
      );
    }
  }

  ngOnDestroy(): void {
    for (let item of this.subscriptions) {
      item.unsubscribe();
    }
  }

  switchChild(child: IChild) {
    this.loginService.currentChild = child;
    this.loginService.currentChildId = child.id;
    localStorage.setItem('childId', '' + child.id);
    this.showSettings = false;
    this.scheduleService.savedHomeworkText = '';
    this.scheduleService.savedHomeworkFile = '';
    this.openHwResponse = [];
  }

  isImage(filename: string) {
    return filename.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  onLectureChange(event: number) {
    this.openHwResponse = [];
    this.scheduleService.getHomeworks(event);
  }

  updateHwResponseFile(event: string, i: number) {
    setTimeout(() => {
      this.scheduleService.currentHomeworks[i].chwFile =
        this.scheduleService.currentHomeworks[i].chwFile ?? '[]';
      this.scheduleService.currentHomeworks[i].chwFile =
        this.scheduleService.pushToString(
          this.scheduleService.currentHomeworks[i].chwFile,
          event
        );
    }, 5);
  }

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
}
