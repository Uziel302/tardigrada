import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";


import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  public openStudentLoginDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'student', login: true},
      });
      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((res:any) => {
          this.router.navigate(['/student', res[0]]);
        })
      );
  }

  public openTeacherLoginDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'teacher', login: true},
      });
      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((res:any) => {
          this.router.navigate(['/teacher', res[0]]);
        })
      );
  }

  public openStudentRegDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'student', login: false},
      });
      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((res:any) => {
          this.router.navigate(['/student', res[0]]);
        })
      );
  }

  public openTeacherRegDialog():void{
    const dialogRef: MatDialogRef<LoginDialogComponent, any> =
      this.dialog.open(LoginDialogComponent, {
        data: {type: 'teacher', login: false},
      });
      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((res:any) => {
          this.router.navigate(['/teacher', res[0]]);
        })
      );
  }

}
