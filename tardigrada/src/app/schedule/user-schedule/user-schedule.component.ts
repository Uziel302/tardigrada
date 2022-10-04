import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule.service';
import { LoginService } from '../../login-screen/login.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css'],
})
export class UserScheduleComponent implements OnInit {
  @Input() userId: number = 0;
  @Output() lectureChange = new EventEmitter<number>();

  public hourColumn: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];
  public innerWidth: number;
  public mobileDay: number =
    new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; //make monday first day

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.loginService.currentChildId) {
      this.subscriptions.push(
        this.scheduleService
          .getChildLectures(this.loginService.currentChildId)
          .subscribe((childLectures: any) => {
            this.scheduleService.processLecturesData(childLectures);
          })
      );
    }
  }

  onLectureChange(event: number) {
    this.lectureChange.emit(event);
  }

  onDayChange(day: any) {
    this.mobileDay = +day.target.value;
  }
}
