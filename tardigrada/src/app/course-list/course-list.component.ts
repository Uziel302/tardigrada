import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ILecture } from '../models/lecture';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public lectures: ILecture[] = [];

  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.lectures = lecturesData;
      })
    );
  }

  join(lecture: ILecture) {
    let a = lecture.id;
    debugger;
  }
}
