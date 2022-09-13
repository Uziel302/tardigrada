import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScheduleService } from '../schedule.service';
import { LoginService } from '../../login-screen/login.service';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css']
})
export class UserScheduleComponent implements OnInit {

  @Input() userId: number = 0;

  public hourColumn: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ];

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    //TODO - get from db only details of the current child's lectures
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.scheduleService.processLecturesData(lecturesData);
      })
    );

    this.subscriptions.push(
      this.scheduleService.getChildLectures(this.loginService.currentChildId).subscribe((childLectures: any) => {
        for(let childLecture of childLectures){
          this.scheduleService.processChildLectures(childLectures);
        }
      })
    );
  }

}
