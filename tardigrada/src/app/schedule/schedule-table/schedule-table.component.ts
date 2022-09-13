import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule.service';
import { ILecture } from '../../models/lecture';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
})
export class ScheduleTableComponent implements OnInit, OnDestroy {
  @Input() selectedDay: number = 0;
  @Input() checkedAges: number[] = [];
  public lessonsArray: ILecture[][][] = this.scheduleService.getEmptyWeek();

  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {        
        for (let lectureData of lecturesData) {
          const whichHalf = this.lessonsArray[lectureData.day][lectureData.hour-9][0]['id'] ? 1 : 0;
          this.lessonsArray[lectureData.day][lectureData.hour-9][whichHalf] = {
            id: lectureData.id,
            title: lectureData.title,
            subtitle: lectureData.subtitle,
            teacher: lectureData.teacherName,
            hour: this.getTimeFormatted(lectureData.hour, lectureData.minutes),
            minAge: lectureData.minAge,
            maxAge: lectureData.maxAge,
            background: lectureData.background,
            url: lectureData.telegram,
          };
        }
      })
    );
  }

  getTimeFormatted(hour: number, minutes: number){
    let formatted = hour < 10 ? '0'+hour : ''+hour;
    formatted += minutes < 10 ? ':0'+minutes : ':'+minutes;
    return formatted;
  }

  ngOnDestroy(): void {
    for (let item of this.subscriptions) {
      item.unsubscribe();
    }
  }

  checkAge(min: number, max: number) {
    return this.checkedAges
      ? this.checkedAges.some((x) => x >= min && x <= max)
      : false;
  }

}
