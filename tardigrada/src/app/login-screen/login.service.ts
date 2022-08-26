import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Subscription, Observable } from 'rxjs';

import { INameAndPass } from '../models/name-and-pass';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private isAuthenticated:boolean = false;
  private token: string = '';
  private tokenTimer: any;
  private authStatusListener:Subject<boolean> = new Subject<boolean>();


  constructor(private http: HttpClient, private router: Router) {}

  getToken():string {
    return this.token;
  }

  getIsAuth():boolean {
    return this.isAuthenticated;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  createUser(name: string, password: string, isStudent: boolean): void {
    const authData: INameAndPass = { name, password };
    this.http
      .post(environment.apiEndPoint + 'signup', authData)
      .subscribe(response => {
        this.login(name, password, isStudent);
      });
  }

  login(name: string, password: string, isStudent: boolean): void {
    const authData: INameAndPass = { name, password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        environment.apiEndPoint + 'login',
        authData
      )
      .subscribe(response => {
        const token:string = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration:number = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now: Date = new Date();
          const expirationDate: Date = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(['/timer']);
        }
      });
  }

  autoAuthUser():void {
    const authInformation: void | {
      token: string;
      expirationDate: Date;
    } = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now:Date = new Date();
    const expiresIn:number = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
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

  private setAuthTimer(duration: number): void {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData(): { token: string; expirationDate: Date; } | void {
    const token: string | null = localStorage.getItem('token');
    const expirationDate: string | null = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
}
