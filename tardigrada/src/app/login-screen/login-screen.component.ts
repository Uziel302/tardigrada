import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  public login: boolean = true;
  public isStudent: boolean = true;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public telegram: string = '';
  public password: string = '';

  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isStudent = !this.route.snapshot.paramMap.get('teacher');
  }

  submit() {
    this.loginService.login(this.email, this.password, this.isStudent);
  }

  registrationClick() {
    if (this.login) {
      this.login = !this.login;
    } else {
      this.loginService.createUser(
        this.firstName,
        this.lastName,
        this.email,
        this.telegram,
        this.password,
        this.isStudent
      );
    }
  }
}
