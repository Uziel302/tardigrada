import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ILecture } from '../models/lecture';
import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public lectures: ILecture[] = [];
  public childLectures: boolean[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.lectures = lecturesData;
      })
    );

    this.subscriptions.push(
      this.scheduleService.getChildLectures(this.loginService.currentChildId).subscribe((childLectures: any) => {
        for(let childLecture of childLectures){
          this.childLectures[childLecture.lectureId] = true;
        }
      })
    );
  }

  join(lectureId: number) {
    this.scheduleService.joinLecture(lectureId, this.loginService.currentChildId);
    this.childLectures[lectureId] = true;
  }
}
