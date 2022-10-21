import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ICourse } from '../models/course';
import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';
import { IReview } from '../models/review';

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css'],
})
export class LecturePageComponent implements OnInit {
  public stars: number = 0;
  public totalReviews: number = 0;
  public id: number = 0;
  public heartClicked: boolean[] = [];
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
  //TODO create model
  public reviews: IReview[] = [
    {name: 'Ваня Васечкин',stars: 3.5,date:'20.10.2022',content: 'bla', count: 10, likers: [8,9]},
    {name: 'asaf malin',stars:4,date:'20.10.2029',content: 'bla hjj', count: 11, likers: [8,9]}
  ];
  public newReview: string = '';

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

  submitReview(){
    //TODO 
    this.newReview;
  }
}
