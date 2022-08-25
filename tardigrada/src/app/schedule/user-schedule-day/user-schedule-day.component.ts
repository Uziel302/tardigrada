import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-user-schedule-day',
  templateUrl: './user-schedule-day.component.html',
  styleUrls: ['./user-schedule-day.component.css']
})
export class UserScheduleDayComponent implements OnInit {

  @Input() dailySchedule: ILecture[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
