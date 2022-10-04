import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ILecture } from 'src/app/models/lecture';
import { ScheduleService } from '../schedule.service';
import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/login-screen/login.service';

@Component({
  selector: 'app-user-schedule-lecture',
  templateUrl: './user-schedule-lecture.component.html',
  styleUrls: ['./user-schedule-lecture.component.css'],
})
export class UserScheduleLectureComponent implements OnInit {
  public selected: number = 0;
  @Input() data: ILecture[] = [this.scheduleService.emptyLecture];
  @Input() rowNumber: number = 0;
  @Input() dayNumber: number = 0;
  @Output() lectureChange = new EventEmitter<number>();

  constructor(
    public scheduleService: ScheduleService,
    private http: HttpClient,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {}

  selectLecture() {
    this.scheduleService.selectedLecture = this.data[this.selected];
    this.lectureChange.emit(this.data[this.selected].id);
    this.scheduleService.dayNumber = this.dayNumber;
    if (this.data[this.selected].id) {
      let element = document.getElementById('course-anchor') as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  savePersonalSlot() {
    let newText =
      this.scheduleService.personalSlots[this.dayNumber][this.rowNumber];
    let oldText =
      this.scheduleService.personalSlotsOrig[this.dayNumber][this.rowNumber];
    if (newText === oldText) {
      return;
    }

    this.http
      .post(environment.apiEndPoint + 'savePersonalSlot', {
        childId: this.loginService.currentChildId,
        userId: this.loginService.teacher.userId,
        day: this.dayNumber,
        hour: this.rowNumber,
        text: newText,
        isUpdate: oldText !== '',
      })
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }
}
