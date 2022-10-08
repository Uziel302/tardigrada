import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  public selectedDay: number = 0;
  public weekDays = [0, 1, 2, 3, 4, 5, 6, 7];
  public weekMap = new Map([
    [0, 'Понедельник'],
    [1, 'Вторник'],
    [2, 'Среда'],
    [3, 'Четверг'],
    [4, 'Пятница'],
    [5, 'Суббота'],
    [6, 'Воскресенье'],
    [7, 'Все'],
  ]);
  public ageList: number[] = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  public checkedAges: number[] = [...this.ageList];


  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.scheduleService.processLecturesData(lecturesData);
      })
    );
  }

  ngOnDestroy(): void {
    for (let item of this.subscriptions) {
      item.unsubscribe();
    }
  }

  checkboxChanged(age: number) {
    if (this.checkedAges.includes(age)) {
      this.checkedAges.splice(this.checkedAges.indexOf(age), 1);
    } else {
      this.checkedAges.push(age);
    }
  }
}
