import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../schedule/schedule.service';


@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {

  public userId: number = 0;

  constructor(
    public scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
  }

}
