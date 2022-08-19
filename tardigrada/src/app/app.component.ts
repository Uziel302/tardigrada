import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tardigrada';

  constructor(    
    public dialog: MatDialog,
  ){}

  public openStudentLoginDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'student', login: true},
      });
  }

  public openTeacherLoginDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'teacher', login: true},
      });
  }

  public openStudentRegDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'student', login: false},
      });
  }

  public openTeacherRegDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'teacher', login: false},
      });
  }
}
