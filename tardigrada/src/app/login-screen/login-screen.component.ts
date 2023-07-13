import { Component, OnInit } from '@angular/core';
import { ITeacher } from '../models/teacher';
import { TeachersService } from '../teachers/teachers.service';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  public login: boolean = true;
  public isStudent: boolean = true;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public telegram: string = '';
  public password: string = '';
  public teacherId: number = 0;

  constructor(
    public loginService: LoginService,
    public teachersService: TeachersService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.login = this.route?.snapshot?.routeConfig?.path == 'login';
    this.teachersService.getTeachers();
  }

  submit() {
    this.loginService.login(this.email, this.password, this.isStudent);
  }

  registrationClick(formObj: any) {
    if (this.login) {
      this.router.navigate(['/registration']);
    } else if (!formObj.valid) {
      Object.keys(formObj.form.controls).forEach((key) => {
        formObj.controls[key].markAsTouched();
      });
    } else {
      this.loginService.createUser(
        this.firstName,
        this.lastName,
        this.email,
        this.telegram,
        this.password,
        this.isStudent,
        this.teacherId,
      );
    }
  }

  onSelectTeacher(event: any) {
    this.teacherId = Number(event.target.value);
    let teacher: ITeacher | undefined = this.teachersService.teachers.find(x=>x.userId === this.teacherId);
    if(teacher){
      let name = teacher.name.split(' ');
      this.firstName = name[0];
      this.lastName = name[1];
    }
  }
}
