import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-user-schedule-lecture',
  templateUrl: './user-schedule-lecture.component.html',
  styleUrls: ['./user-schedule-lecture.component.css'],
})
export class UserScheduleLectureComponent implements OnInit {
  public emptyLecture = {
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
  public selected: number = 0;
  @Input() data: ILecture[] = [this.emptyLecture];
  @Input() rowNumber: number = 0;
  @Input() dayNumber: number = 0;

  constructor(
    public scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {}

  selectLecture() {
    this.scheduleService.selectedLecture = this.data[this.selected];
    this.scheduleService.dayNumber = this.dayNumber;
    let element = document.getElementById('course-anchor') as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  belongs(): boolean {
    //empty data if the lecture doesn't belong to the child
    if(!this.scheduleService.childLectures[this.data[0].id]){
      if(this.scheduleService.childLectures[this.data[1].id]){
        this.selected = 1;
      } else {
        this.data = [this.emptyLecture];
      }
    }
    return true;
  }
}
