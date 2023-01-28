import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ScheduleService } from '../../schedule/schedule.service';
import { ILecture } from '../../models/lecture';
import { LoginService } from 'src/app/login-screen/login.service';

@Component({
  selector: 'app-schedule-day',
  templateUrl: './schedule-day.component.html',
  styleUrls: ['./schedule-day.component.css'],
})
export class ScheduleDayComponent implements OnInit {
  @Input() day: number = 0;
  @Input() search: string = '';
  @Input() selectedCategories: string[] = [];
  @Input() selectedDays: number[] = [];
  @Input() selectedAges: number[] = [];
  @Output() makeVisible = new EventEmitter<boolean>();
  public weekDates: string[] = [];
  public weekDays = [0, 1, 2, 3, 4, 5, 6];
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
  public dayNames: string[] = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  public madeVisibleOnce: boolean = false;
  public madeVisibleNow: boolean = false;

  constructor(
    public scheduleService: ScheduleService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.calculateWeekDates();
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

  checkFilters(lecture: ILecture, index: number): boolean {
    if (!index) {
      this.madeVisibleNow = false;
    }

    let regex = new RegExp(this.search, 'i');
    if (
      this.day === lecture.day &&
      this.filterAge(lecture) &&
      this.filterCategory(lecture) &&
      (!this.search || regex.test(lecture.title) || regex.test(lecture.teacher))
    ) {
      this.makeVisible.emit(true);
      this.madeVisibleOnce = true;
      this.madeVisibleNow = true;
      return true;
    }

    //make unvisible if all lectures are filtered
    if (
      this.madeVisibleOnce &&
      !this.madeVisibleNow &&
      index + 1 === this.scheduleService.lecturesData.length
    ) {
      this.makeVisible.emit(false);
    }
    return false;
  }
}
