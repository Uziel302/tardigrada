import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ICourse } from '../models/course';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css'],
})
export class LecturePageComponent implements OnInit {
  public id: number = 0;
  public course: ICourse = {
    title: '',
    teacher: '',
    day: 0,
    hour: 0,
    minutes: 0,
    minAge: 0,
    maxAge: 0,
    image: '',
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.getCourseDetails();
  }

  getCourseDetails() {
    this.http.get<ICourse>(environment.apiEndPoint + 'course/?id='+this.id).subscribe(
      (data) => {
        this.course = data;
      },
      (error) => {
      }
    );
  }
}
