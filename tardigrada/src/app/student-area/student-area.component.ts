import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { IChild } from '../models/child';

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
    this.showSettings = false;
  }

  isImage(filename: string){
    return (filename.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  onLectureChange(event: number){
    this.scheduleService.getHomework(event);
  }
}
