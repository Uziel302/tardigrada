import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { Subscription } from 'rxjs';
import { ScheduleService } from '../../schedule/schedule.service';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.css']
})
export class CoursesManagementComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  public newId: number = 0;

  constructor(        public scheduleService: ScheduleService,
    public adminDataService: AdminDataService
    ) { }

  ngOnInit(): void {
    if(!this.adminDataService.lectures.length){
      this.subscriptions.push(
        this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
          this.adminDataService.lectures = lecturesData;
        })
      );
    }
  }

  createEmptyLecture(){
    this.scheduleService.createEmptyLecture().subscribe(
      (data) => {
        this.newId = data;
      },
      (error) => {}
    );
  }
}
