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
  public lessonsArray: ILecture[][][] = [];

  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        for(let i of [0, 1, 2, 3, 4, 5, 6]){
          this.lessonsArray[i] = [];
          for(let j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]){
            this.lessonsArray[i][j] = [];
            for(let k of [0, 1]){
              this.lessonsArray[i][j][k] = {
                title: '',
                subtitle: '',
                teacher: '',
                hour: '',
                minAge: '',
                maxAge: '',
                background: '',
                url: '',
              };
            }
          } 
        }
        for (let lectureData of lecturesData) {
          this.lessonsArray[lectureData.day][lectureData.hour-9][0] = {
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
