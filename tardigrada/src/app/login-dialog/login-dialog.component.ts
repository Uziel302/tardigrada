import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  public type: string = '';
  public login: boolean = true;
  public currentTaskName: string = '';
  public name: string = '';
  public password: string = '';

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {type: string, login: boolean}) {
      this.type = data.type;
      this.login = data.login;
  }

  ngOnInit(): void {
  }

}
