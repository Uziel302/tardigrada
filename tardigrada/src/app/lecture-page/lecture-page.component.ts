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
  public reviews: IReview[] = [];
  public newReview: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.getCourseDetails();
    this.getReviews();
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

  getReviews() {
    this.http
      .get<any[]>(environment.apiEndPoint + 'reviews/?id=' + this.id)
      .subscribe(
        (data) => {
          for (let review of data) {
            let likers = JSON.parse(review.likers);
            this.reviews.push({
              name: review.name,
              stars: review.stars,
              date: this.formatDate(review.creation),
              content: review.content,
              count: likers.length,
              likers: likers,
            });
          }
        },
        (error) => {}
      );
  }

  formatDate(date: string): string {
    let dateObj = new Date(date);
    return (
      dateObj.getDate() +
      '.' +
      (dateObj.getMonth() + 1) +
      '.' +
      dateObj.getFullYear()
    );
  }

  submitReview() {
    //TODO
    this.newReview;
  }
}
