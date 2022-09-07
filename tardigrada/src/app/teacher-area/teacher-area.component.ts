import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';

@Component({
  selector: 'app-teacher-area',
  templateUrl: './teacher-area.component.html',
  styleUrls: [
    '../student-area/shared-user-area.css',
    './teacher-area.component.css',
  ]
})
export class TeacherAreaComponent implements OnInit {

  public userId: number = 0;
  public showSettings: boolean = false;
  public cover: string = '';
  public profile: string = '';

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  stopProp(event: any){
    event.stopPropagation();
  }

}
