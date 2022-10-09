import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILecture } from '../models/lecture';

import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  public selectedDay: number = 0;
  public weekDays = [0, 1, 2, 3, 4, 5, 6];
  public weekMap = new Map([
    [0, 'Понедельник'],
    [1, 'Вторник'],
    [2, 'Среда'],
    [3, 'Четверг'],
    [4, 'Пятница'],
    [5, 'Суббота'],
    [6, 'Воскресенье'],
  ]);
  public weekMapShort = new Map([
    [0, 'пн'],
    [1, 'вт'],
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
    [5, 'сб'],
    [6, 'вс'],
  ]);

  public months: string[] = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  public weekDates: string[] = [];
  public ageList: number[] = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  public selectedAges: number[] = [];
  public selectedCategories: string[] = [];
  public selectedDays: number[] = [];
  public search: string = '';

  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.calculateWeekDates();

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

  calculateWeekDates() {
    let weekStart = new Date(
      new Date().setDate(new Date().getDate() - new Date().getDay())
    );
    for (let weekDay of this.weekDays) {
      let date = new Date(
        new Date(weekStart.getTime()).setDate(weekStart.getDate() + weekDay)
      );
      this.weekDates.push(date.getDate() + ' ' + this.months[date.getMonth()]);
    }
  }

  toggleAge(age: number) {
    if (this.selectedAges.includes(age)) {
      this.selectedAges.splice(this.selectedAges.indexOf(age), 1);
    } else {
      this.selectedAges.push(age);
    }
  }

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories.splice(
        this.selectedCategories.indexOf(category),
        1
      );
    } else {
      this.selectedCategories.push(category);
    }
  }

  filterAge(lecture: ILecture): boolean {
    if (!this.selectedAges.length) {
      return true;
    }

    for (let age of this.selectedAges) {
      if (age <= lecture.maxAge && age >= lecture.minAge) {
        return true;
      }
    }

    return false;
  }

  filterCategory(lecture: ILecture): boolean {
    if (!this.selectedCategories.length) {
      return true;
    }

    if (this.selectedCategories.includes(lecture.category)) {
      return true;
    }

    return false;
  }

  filterday(day: number): boolean {
    if (!this.selectedDays.length) {
      return true;
    }

    if (this.selectedDays.includes(day)) {
      return true;
    }

    return false;
  }

  toggleDay(day: number){
    if (this.selectedDays.includes(day)) {
      this.selectedDays.splice(this.selectedDays.indexOf(day), 1);
    } else {
      this.selectedDays.push(day);
    }
  }
}
