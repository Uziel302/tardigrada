import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css'],
})
export class AdminAreaComponent implements OnInit {
  public annoyingText: string = '';
  public annoyingColor: string = 'red';
  public annoyingSize: string = '20px';
  public saved: boolean = false;

  public lecturesCount: number = 0;

  private subscriptions: Subscription[] = [];

  constructor(
    private http: HttpClient,
    public scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.lecturesCount = lecturesData.length;
      })
    );
  }

  submit() {
    this.http
      .post(environment.apiEndPoint + 'saveAnnoying', {
        text: this.annoyingText,
        color: this.annoyingColor,
        size: this.annoyingSize,
      })
      .subscribe(
        (data) => {
          this.saved = true;
        },
        (error) => {}
      );
  }
}
