import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ICourse } from '../models/course';
import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css'],
})
export class LecturePageComponent implements OnInit {
  public stars = 3.5;
  public id: number = 0;
  public course: ICourse = {
    title: '',
    subtitle: '',
    teacher: '',
    profile: '',
    day: 0,
    hour: 0,
    minutes: 0,
    minAge: 0,
    maxAge: 0,
    level: '',
    image: '',
    about: '',
    description: '',
    bullets: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.getCourseDetails();
  }

  getCourseDetails() {
    this.http
      .get<ICourse>(environment.apiEndPoint + 'course/?id=' + this.id)
      .subscribe(
        (data) => {
          this.course = data;
        },
        (error) => {}
      );
  }
}
