import { Component, OnInit, Input } from '@angular/core';

import { ScheduleService } from '../../schedule/schedule.service';
import { ILecture } from '../../models/lecture';

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

  constructor(public scheduleService: ScheduleService) {}

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
}
