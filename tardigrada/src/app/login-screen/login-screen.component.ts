import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  public isStudent: boolean = true;
  public login: boolean = true;
  public name: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.login){
      this.loginService.login(this.name, this.password, this.isStudent);
    } else {
      this.loginService.createUser(this.name, this.password, this.isStudent);
    }
  }
}
