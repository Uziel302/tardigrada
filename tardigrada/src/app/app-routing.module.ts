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
import { ManagementComponent } from './management/management.component';
import { CoursesComponent } from './lecture-page/courses/courses.component';
import { CourseEditorComponent } from './admin-area/course-editor/course-editor.component';
import { CoursesManagementComponent } from './admin-area/courses-management/courses-management.component';
import { EnTeachersComponent } from './en-teachers/en-teachers.component';
import { EnAboutComponent } from './en-about/en-about.component';
import { ManagementEnComponent } from './management-en/management-en.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'en/about', component: EnAboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'en/management', component: ManagementEnComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'registration', component: LoginScreenComponent },
  { path: 'student', component: StudentAreaComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: LecturePageComponent },
  { path: 'admin', component: AdminAreaComponent },
  { path: 'admin/courses', component: CoursesManagementComponent },
  { path: 'admin/course/:id', component: CourseEditorComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'new-student/:id', component: NewStudentComponent },
  { path: 'teacher', component: TeacherAreaComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'en/teachers', component: EnTeachersComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
