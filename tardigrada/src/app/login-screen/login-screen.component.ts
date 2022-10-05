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
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public telegram: string = '';
  public password: string = '';

  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.login = !this.route.snapshot.paramMap.get('type');
  }

  submit() {
    this.loginService.login(this.email, this.password);
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
        this.password
      );
    }
  }
}
