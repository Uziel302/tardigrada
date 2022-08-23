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

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'student/:name', component: StudentAreaComponent },
  { path: 'teacher/:name', component: TeacherAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
