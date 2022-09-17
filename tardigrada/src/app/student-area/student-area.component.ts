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
  public showHomework: boolean = false;
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

    this.scheduleService.getPersonalSlots(this.loginService.currentChildId, 0);
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
    this.scheduleService.personalSlots = this.scheduleService.getEmptyPersonalSlots();
  }

  onLectureChange(event: number) {
    this.scheduleService.openHwResponse = [];
    this.scheduleService.getHomeworks(event, this.loginService.currentChildId);
  }

  showHomeworks(){
    this.scheduleService.selectedLecture = this.scheduleService.emptyLecture;
    this.showHomework = !this.showHomework;
    if(this.showHomework){
      this.scheduleService.getHomeworks(0, this.loginService.currentChildId);
    }
  }
}
