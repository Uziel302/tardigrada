import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AuthInterceptor } from './login-screen/login-interceptor';
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
import { AccountComponent } from './parent-area/account/account.component';
import { ChildrenComponent } from './parent-area/children/children.component';
import { UploadPhotoComponent } from './student-area/upload-photo/upload-photo.component';
import { SettingsPopupComponent } from './student-area/settings-popup/settings-popup.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeworkComponent } from './homework/homework.component';
import { DonationComponent } from './donation/donation.component';
import { ScheduleDayComponent } from './schedule/schedule-day/schedule-day.component';
import { ZoneSelectorComponent } from './schedule/zone-selector/zone-selector.component';

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
    ParentAreaComponent,
    AccountComponent,
    ChildrenComponent,
    UploadPhotoComponent,
    SettingsPopupComponent,
    CourseListComponent,
    AdminAreaComponent,
    PrivacyComponent,
    HomeworkComponent,
    DonationComponent,
    ScheduleDayComponent,
    ZoneSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        direction: 'ltr',
        autoFocus: 'first-tabbable',
      },
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
