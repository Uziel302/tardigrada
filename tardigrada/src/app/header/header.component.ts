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

  constructor(
    public loginService: LoginService,
  ) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.tilted = !this.tilted;
    this.hidden = !this.hidden;
  }
}
