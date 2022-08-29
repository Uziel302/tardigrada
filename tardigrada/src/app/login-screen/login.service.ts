import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Subscription, Observable } from 'rxjs';

import { INameAndPass } from '../models/name-and-pass';
import { INameEmailPass } from '../models/name-email-pass';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
  public currentError: string = '';

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

  createUser(name: string, email: string, password: string, isParent: boolean): void {
    const authData: INameEmailPass = { name, email, password };
    this.http.post(environment.apiEndPoint + 'signup', authData).subscribe(
      (data) => {
        this.login(name, password, isParent);
      },
      (error) => {
        this.currentError = error.error.message;
      }
    );
  }

  login(name: string, password: string, isParent: boolean): void {
    const authData: INameAndPass = { name, password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        environment.apiEndPoint + 'login',
        authData
      )
      .subscribe(
        (data) => {
          const token: string = data.token;
          this.token = token;
          if (token) {
            const expiresInDuration: number = data.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const now: Date = new Date();
            const expirationDate: Date = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveAuthData(token, expirationDate);
            this.currentError = '';
            let target = isParent ? '/parent' : '/teacher';
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
    } = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now: Date = new Date();
    const expiresIn: number =
      authInformation.expirationDate.getTime() - now.getTime();
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

  private getAuthData(): { token: string; expirationDate: Date } | void {
    const token: string | null = localStorage.getItem('token');
    const expirationDate: string | null = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}
