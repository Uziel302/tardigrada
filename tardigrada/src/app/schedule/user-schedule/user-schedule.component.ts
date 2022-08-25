import { Component, OnInit, Input } from '@angular/core';

import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css']
})
export class UserScheduleComponent implements OnInit {

  @Input() userId: number = 0;

  constructor(
    public scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
  }

}
