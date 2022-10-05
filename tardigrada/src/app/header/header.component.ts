import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public tilted: boolean = false;
  public hidden: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.tilted = !this.tilted;
    this.hidden = !this.hidden;
  }
}
