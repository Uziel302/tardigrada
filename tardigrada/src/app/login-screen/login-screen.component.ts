import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  public login: boolean = true;
  public name: string = '';
  public email: string = '';
  public telegram: string = '';
  public password: string = '';

  constructor(
    public loginService: LoginService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.login) {
      this.loginService.login(this.name, this.password, true);
    } else {
      this.loginService.createUser(this.name, this.email, this.telegram, this.password, true);
    }
  }
}
