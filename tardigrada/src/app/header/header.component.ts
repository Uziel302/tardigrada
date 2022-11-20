import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-screen/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public tilted: boolean = false;
  public hidden: boolean = true;
  public loggedIn: boolean = false;

  constructor(
    public loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.loginService.getAuthStatusListener().subscribe(loggedIn => {
      setTimeout(() => { this.loggedIn = loggedIn; }, 300)
    });
  }

  toggleMenu() {
    this.tilted = !this.tilted;
    this.hidden = !this.hidden;
  }
}
