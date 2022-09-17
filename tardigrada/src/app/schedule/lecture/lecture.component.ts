import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css'],
})
export class LectureComponent implements OnInit {
  @Input() data: ILecture = this.scheduleService.emptyLecture;

  constructor(
    public scheduleService: ScheduleService,
  ) {}

  ngOnInit(): void {}
}
