import { Component, OnInit, Input } from '@angular/core';

import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
})
export class ScheduleTableComponent implements OnInit {
  @Input() selectedDay: number = 0;
  @Input() selectedAges: number[] = [];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {}

  checkAge(min: number, max: number) {
    return this.selectedAges
      ? this.selectedAges.some((x) => x >= min && x <= max)
      : false;
  }
}
