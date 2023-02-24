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

  public hourColumn: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  public weekFirstHalf = new Map([
    [0, 'пн'],
    [1, 'вт'],
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
  ]);

  public weekSecondHalf = new Map([
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
    [5, 'сб'],
    [6, 'вс'],
  ]);
  public secondHalf: boolean = false;

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
    if (this.loginService.connectedChildId) {
      this.subscriptions.push(
        this.scheduleService
          .getChildLectures(this.loginService.connectedChildId)
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
