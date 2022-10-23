import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { IChild } from 'src/app/models/child';
import { LoginService } from 'src/app/login-screen/login.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  public children = [];
  public saveError: string = '';

  public childData: IChild = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    className: '',
    subjects: '',
    timezone: '',
    zoom: '',
    device: '',
    country: '',
    language: '',
    limits: '',
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
          this.loginService.currentChildId = data.createId;
          this.router.navigate(['/student']);
        },
        (error) => {
          this.saveError = error.message;
        }
      );
  }

}
