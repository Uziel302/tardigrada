import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
} from '@angular/material/core';

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
import { UploadPhotoComponent } from './student-area/upload-photo/upload-photo.component';
import { SettingsPopupComponent } from './student-area/settings-popup/settings-popup.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeworkComponent } from './homework/homework.component';
import { DonationComponent } from './donation/donation.component';
import { ScheduleDayComponent } from './schedule/schedule-day/schedule-day.component';
import { ZoneSelectorComponent } from './schedule/zone-selector/zone-selector.component';
import { LecturePageComponent } from './lecture-page/lecture-page.component';
import { RoundPipe } from './pipes/round';
import { NewStudentComponent } from './new-student/new-student.component';
import { CustomDateAdapter } from './new-student/custom-date-adapter';
import { TeachersComponent } from './teachers/teachers.component';
import { ManagementComponent } from './management/management.component';
import { CoursesComponent } from './lecture-page/courses/courses.component';
import { PopupComponent } from './lecture-page/popup/popup.component';
import { OrderModule } from 'ngx-order-pipe';
import { CourseEditorComponent } from './admin-area/course-editor/course-editor.component';
import { CoursesManagementComponent } from './admin-area/courses-management/courses-management.component';
import { EnAboutComponent } from './en-about/en-about.component';
import { EnTeachersComponent } from './en-teachers/en-teachers.component';

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
    UploadPhotoComponent,
    SettingsPopupComponent,
    AdminAreaComponent,
    PrivacyComponent,
    HomeworkComponent,
    DonationComponent,
    ScheduleDayComponent,
    ZoneSelectorComponent,
    LecturePageComponent,
    RoundPipe,
    NewStudentComponent,
    TeachersComponent,
    ManagementComponent,
    CoursesComponent,
    PopupComponent,
    CourseEditorComponent,
    CoursesManagementComponent,
    EnAboutComponent,
    EnTeachersComponent,
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
    MatSelectModule,
    OrderModule,
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
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
