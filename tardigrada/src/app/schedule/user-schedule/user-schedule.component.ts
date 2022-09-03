import { Component, OnInit, Input } from '@angular/core';

import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css']
})
export class UserScheduleComponent implements OnInit {
  public hourColumn: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ];
  @Input() userId: number = 0;

  constructor(
    public scheduleService: ScheduleService,
  ) { }

  ngOnInit(): void {
  }

}
