import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  public childData: IChild = JSON.parse(JSON.stringify(this.loginService.emptyChild));
  public childId: number = 0;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.childId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    if(this.childId){
      this.getChildData();
    }
  }

  getChildData(){
    this.loginService.connectedChildId = this.childId;
    this.loginService.getChildData().subscribe((childData: IChild) => {
      this.childData = childData;
    });
  }

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
          this.router.navigate(['/student']);
        },
        (error) => {
          this.saveError = error.message;
        }
      );
  }
}
