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
        data: {},
      });
  }

  public openTeacherLoginDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {},
      });
  }
}
