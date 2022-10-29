import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentAreaComponent } from './student-area/student-area.component';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DonationComponent } from './donation/donation.component';
import { LecturePageComponent } from './lecture-page/lecture-page.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login/:teacher', component: LoginScreenComponent },
  { path: 'login', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'student', component: StudentAreaComponent },
  { path: 'course/:id', component: LecturePageComponent },
  { path: 'admin', component: AdminAreaComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'new-student', component: NewStudentComponent },
  { path: 'teacher', component: TeacherAreaComponent },
  { path: 'teachers', component: TeachersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
