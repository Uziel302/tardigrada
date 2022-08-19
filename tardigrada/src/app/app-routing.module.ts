import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentAreaComponent } from './student-area/student-area.component';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'student/:name', component: StudentAreaComponent },
  { path: 'teacher/:name', component: TeacherAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
