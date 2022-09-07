import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { IChild } from '../models/child';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {

  public userId: number = 0;
  public showSettings: boolean = false;
  public cover: string = '';
  public profile: string = '';

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.getChildData().subscribe((childData: IChild) => {
        this.loginService.currentChild = childData;
        this.cover = childData.cover ? environment.uploadsFolder + childData.cover : '';
        this.profile = childData.profile ? environment.uploadsFolder + childData.profile : '';
      })
    );
  }

  stopProp(event: any){
    event.stopPropagation();
  }

  changeCover (event: string) {
    this.cover = event;
  }

  changeProfile (event: string) {
    this.profile = event;
  }
}
