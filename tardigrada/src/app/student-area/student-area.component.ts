import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { IChild } from '../models/child';
import { ParsingService } from '../general/parser.service';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./shared-user-area.css', './student-area.component.css'],
})
export class StudentAreaComponent implements OnInit, OnDestroy {
  public userId: number = 0;
  public showSettings: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    public parsing: ParsingService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.loginService.getChildData().subscribe((childData: IChild) => {
        this.loginService.currentChild = childData;
      })
    );

    if (this.loginService.children.length === 0) {
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
    localStorage.setItem('childId', '' + child.id);
    this.showSettings = false;
    this.scheduleService.savedHomeworkText = '';
    this.scheduleService.savedHomeworkFile = '';
    this.scheduleService.openHwResponse = [];
  }

  onLectureChange(event: number) {
    this.scheduleService.openHwResponse = [];
    this.scheduleService.getHomeworks(event, this.loginService.currentChildId);
  }
}
