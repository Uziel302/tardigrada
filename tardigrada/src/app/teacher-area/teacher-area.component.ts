import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';

@Component({
  selector: 'app-teacher-area',
  templateUrl: './teacher-area.component.html',
  styleUrls: [
    '../student-area/shared-user-area.css',
    './teacher-area.component.css',
  ],
})
export class TeacherAreaComponent implements OnInit {
  public userId: number = 0;
  public showSettings: boolean = false;
  public cover: string = '';
  public profile: string = '';
  public chosenChild: number = -1;
  public noteList: string[] = [];
  public currentNote: string = '';

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    //TODO remove
    for (let i of [0, 1, 2, 3, 4]) {
      this.scheduleService.currentChildren.push({
        id: 0,
        firstName: 'Имя ' + i,
        lastName: 'Фамилия',
        fatherName: '',
        dateOfBirth: '',
        className: '',
        subjects: '',
        timezone: '',
        zoom: '',
        device: '',
        language: '',
        limits: '',
        telegram: '',
        note: '',
        cover: '/assets/images/default-cover.jpeg',
        profile: '/assets/images/profile-default.jpg',
      });
    }
  }

  stopProp(event: any) {
    event.stopPropagation();
  }

  selectChild(index: number) {
    this.chosenChild = index;
    let element = document.getElementById('child-anchor') as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  handleKeyUp(e: any) {
    if(e.keyCode === 13){
      this.noteList.push(this.currentNote);
      this.currentNote = '';
    }
  }
}
