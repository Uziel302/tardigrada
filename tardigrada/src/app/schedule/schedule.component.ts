import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
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
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  public checkedAges: number[] = [...this.ageList];

  constructor() {}

  ngOnInit(): void {}

  checkboxChanged(age: number) {
    if (this.checkedAges.includes(age)) {
      this.checkedAges.splice(this.checkedAges.indexOf(age), 1);
    } else {
      this.checkedAges.push(age);
    }
  }
}
