import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LectureComponent } from './schedule/lecture/lecture.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ScheduleTableComponent } from './schedule/schedule-table/schedule-table.component';
import { UserScheduleComponent } from './schedule/user-schedule/user-schedule.component';
import { UserScheduleLectureComponent } from './schedule/user-schedule-lecture/user-schedule-lecture.component';
import { UserScheduleDayComponent } from './schedule/user-schedule-day/user-schedule-day.component';
import { ParentAreaComponent } from './parent-area/parent-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherAreaComponent,
    StudentAreaComponent,
    HeaderComponent,
    FooterComponent,
    LoginScreenComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    ScheduleComponent,
    LectureComponent,
    HomepageComponent,
    ScheduleTableComponent,
    UserScheduleComponent,
    UserScheduleLectureComponent,
    UserScheduleDayComponent,
    ParentAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr', autoFocus: 'first-tabbable'} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
