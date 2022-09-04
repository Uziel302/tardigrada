import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  public isParent: boolean = true;
  public login: boolean = true;
  public name: string = '';
  public email: string = '';
  public telegram: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.login) {
      this.loginService.login(this.name, this.password, this.isParent);
    } else {
      this.loginService.createUser(this.name, this.email, this.telegram, this.password, this.isParent);
    }
  }
}
