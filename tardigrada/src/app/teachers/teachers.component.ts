import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ITeacher } from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  public teachers: ITeacher[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.http
      .get<ITeacher[]>(
        environment.apiEndPoint + 'getTeachers'
      )
      .subscribe(
        (data) => {
          this.teachers = data;
        },
        (error) => {}
      );
  }
}
