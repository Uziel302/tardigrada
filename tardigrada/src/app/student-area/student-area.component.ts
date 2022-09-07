import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { IChild } from '../models/child';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: [
    './shared-user-area.css',
    './student-area.component.css'
  ]
})
export class StudentAreaComponent implements OnInit, OnDestroy {

  public userId: number = 0;
  public showSettings: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.getChildData().subscribe((childData: IChild) => {
        this.loginService.currentChild = childData;
        //TODO - get rid of these lines, get full path from backend
        this.loginService.currentChild.cover = childData.cover ? environment.uploadsFolder + childData.cover : null;
        this.loginService.currentChild.profile = childData.profile ? environment.uploadsFolder + childData.profile : null;
      })
    );

    if(this.loginService.children.length === 0){
      this.subscriptions.push(
        this.loginService.getChildren().subscribe((children: IChild[]) => {
          this.loginService.children = children;
        })
      );
    }
  }

  ngOnDestroy(): void {
    for (let item of this.subscriptions) {
      item.unsubscribe();
    }
  }

  switchChild(child: IChild) {
    this.loginService.currentChild = child;
    this.loginService.currentChildId = child.id;
    localStorage.setItem('childId', ''+child.id);
    //TODO - get rid of these lines, get full path from backend
    this.loginService.currentChild.profile = child.profile ? environment.uploadsFolder + child.profile: null;
    this.loginService.currentChild.cover = child.cover ? environment.uploadsFolder + child.cover : null;
    this.showSettings = false;
  }
}
