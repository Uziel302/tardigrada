import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-user-schedule-lecture',
  templateUrl: './user-schedule-lecture.component.html',
  styleUrls: ['./user-schedule-lecture.component.css'],
})
export class UserScheduleLectureComponent implements OnInit {
  @Input() data: ILecture = {
    id: 0,
    title: '',
    subtitle: '',
    teacher: '',
    hour: '',
    minAge: '',
    maxAge: '',
    background: '',
    url: '',
  };
  @Input() rowNumber: number = 0;
  @Input() dayNumber: number = 0;

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {}

  selectLecture() {
    this.scheduleService.selectedLecture = this.data;
    this.scheduleService.dayNumber = this.dayNumber;
    let element = document.getElementById('course-anchor') as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
