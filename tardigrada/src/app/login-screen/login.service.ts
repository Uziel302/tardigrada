import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { IEmailAndPass } from '../models/email-and-pass';
import { INewUser } from '../models/new-user';
import { environment } from '../../environments/environment';

import { IChild } from '../models/child';
import { ITeacher } from '../models/teacher';

@Injectable({ providedIn: 'root' })
export class LoginService {
  public currentError: string = '';
  public connectedChildId: number = 0;
  public selectedChildId: number = 0;
  public isStudent = true;
  public children: IChild[] = [];
  public emptyChild: IChild = {
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
  public currentChild: IChild = JSON.parse(JSON.stringify(this.emptyChild));
  public teacher: ITeacher = {
    userId: 0,
    name: '',
    about: '',
    cover: null,
    profile: null,
    timezone: null,
  };

  private token: string = '';
  private tokenTimer: number = 0;
  private authStatusListener: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient, 
    private router: Router,
  ) {}

  getToken(): string {
    return this.token;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    telegram: string,
    password: string,
    isStudent: boolean,
    teacherId: number,
  ): void {
    const authData: INewUser = {
      firstName,
      lastName,
      email,
      telegram,
      password,
      teacherId,
    };
    this.http.post(environment.apiEndPoint + 'signup', authData).subscribe(
      (data) => {
        this.login(email, password, isStudent);
      },
      (error) => {
        alert(error.error.message);
        this.currentError = error.error.message;
      }
    );
  }

  login(email: string, password: string, isStudent: boolean): void {
    const authData: IEmailAndPass = { email, password };
    this.http
      .post<{ token: string; expiresIn: number; childId: number }>(
        environment.apiEndPoint + 'login',
        authData
      )
      .subscribe(
        (data) => {
          const token: string = data.token;
          this.token = token;
          if (token) {
            const expiresInDuration: number = data.expiresIn;
            this.authStatusListener.next(true);
            const now: Date = new Date();
            const expirationDate: Date = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.currentError = '';
            let target = '/new-student/';
            if (data.childId) {
              this.connectedChildId = data.childId;
              target = '/student';
            }
            if (!isStudent) {
              target = '/teacher';
            }
            this.saveAuthData(token, expirationDate, this.connectedChildId);
            if(target == '/new-student/'){
              this.createEmptyStudent().subscribe((data)=>{
                this.router.navigate([target+data.createId]);
              })
            } else {
              this.router.navigate([target]);
            }
          }
        },
        (error) => {
          this.currentError = error.error.message;
        }
      );
  }

  createEmptyStudent(){
    return this.http.get<{createId: number}>(environment.apiEndPoint +'createNewStudent');
  }

  autoAuthUser(): void {
    const authInformation: void | {
      token: string;
      expirationDate: Date;
      childId: number;
    } = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now: Date = new Date();
    const expiresIn: number =
      authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.connectedChildId = authInformation.childId;      
      this.authStatusListener.next(true);
    }
  }

  logout(): void {
    this.token = '';
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    childId: number
  ): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('childId', '' + childId);
  }

  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('childId');
  }

  private getAuthData(): {
    token: string;
    expirationDate: Date;
    childId: number;
  } | void {
    const token: string | null = localStorage.getItem('token');
    const expirationDate: string | null = localStorage.getItem('expiration');
    let savedChildId = localStorage.getItem('childId');
    let childId: number;
    if (savedChildId) {
      childId = +savedChildId;
    } else {
      childId = 0;
    }
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      childId,
    };
  }

  public getChildData() {
    return this.http.get<IChild>(
      environment.apiEndPoint + 'getChild/?id=' + this.connectedChildId
    );
  }

  public getChildren() {
    return this.http.get<IChild[]>(environment.apiEndPoint + 'getChildren');
  }

  loadTeacher(){
    this.http
    .get<ITeacher>(environment.apiEndPoint + 'loadTeacher')
    .subscribe(
      (data) => {
        this.teacher = data;
        this.authStatusListener.next(true);
      },
      (error) => {}
    );
  }
}
