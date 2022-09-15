import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public tilted: boolean = false;
  public hidden: boolean = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.tilted = !this.tilted;
    this.hidden = !this.hidden;
  }
}
