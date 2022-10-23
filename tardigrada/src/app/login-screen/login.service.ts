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
  public currentChildId: number = 0;
  public children: IChild[] = [];
  public currentChild: IChild = {
    id: 0,
    firstName: '',
    lastName: '',
    fatherName: '',
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
    note: '',
    cover: null,
    profile: null,
  };
  public teacher: ITeacher = {
    userId: 0,
    name: '',
    cover: null,
    profile: null,
  };

  private isAuthenticated: boolean = false;
  private token: string = '';
  private tokenTimer: number = 0;
  private authStatusListener: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken(): string {
    return this.token;
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
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
    isStudent: boolean
  ): void {
    const authData: INewUser = {
      firstName,
      lastName,
      email,
      telegram,
      password,
    };
    this.http.post(environment.apiEndPoint + 'signup', authData).subscribe(
      (data) => {
        this.login(email, password, isStudent);
      },
      (error) => {
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
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now: Date = new Date();
            const expirationDate: Date = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.currentError = '';
            let target = '/new-student';
            if (data.childId) {
              this.currentChildId = data.childId;
              target = '/student';
            }
            if (!isStudent) {
              target = '/teacher';
            }
            this.saveAuthData(token, expirationDate, this.currentChildId);
            this.router.navigate([target]);
          }
        },
        (error) => {
          this.currentError = error.error.message;
        }
      );
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
      this.currentChildId = authInformation.childId;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }

  logout(): void {
    this.token = '';
    this.isAuthenticated = false;
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
      environment.apiEndPoint + 'getChild/?id=' + this.currentChildId
    );
  }

  public getChildren() {
    return this.http.get<IChild[]>(environment.apiEndPoint + 'getChildren');
  }
}
