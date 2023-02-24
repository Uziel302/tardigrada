import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { IChild } from 'src/app/models/child';
import { LoginService } from 'src/app/login-screen/login.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  public children = [];
  public saveError: string = '';
  public startDate = new Date(2000, 0, 1);

  public childData: IChild = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    subjects: '',
    timezone: '',
    country: '',
    telegram: '',
    email: '',
    note: '',
    cover: null,
    profile: null,
  };

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onChangeTz(event: string) {
    this.childData.timezone = event;
  }

  saveChild() {
    if (!this.childData.firstName) {
      return;
    }
    this.http
      .post<{ createId: number }>(
        environment.apiEndPoint + 'saveChild',
        this.childData
      )
      .subscribe(
        (data) => {
          this.saveError = '';
          this.loginService.currentChild = this.childData;
          this.loginService.connectedChildId = data.createId;
          this.router.navigate(['/student']);
        },
        (error) => {
          this.saveError = error.message;
        }
      );
  }
}
