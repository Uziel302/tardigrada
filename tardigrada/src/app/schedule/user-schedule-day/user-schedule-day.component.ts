import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-user-schedule-day',
  templateUrl: './user-schedule-day.component.html',
  styleUrls: ['./user-schedule-day.component.css']
})
export class UserScheduleDayComponent implements OnInit {

  @Input() dailySchedule: ILecture[][] = [];
  @Input() dayNumber: number = 0;
  @Output() lectureChange = new EventEmitter<number>;


  constructor() { }

  ngOnInit(): void {
  }

  onLectureChange(event: number){
    this.lectureChange.emit(event);
  }

}
