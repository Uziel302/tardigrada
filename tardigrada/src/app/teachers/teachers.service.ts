import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ITeacher } from '../models/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  public teachers: ITeacher[] = [];

  constructor(private http: HttpClient) {}

  getTeachers(): void {
    this.http
      .get<ITeacher[]>(environment.apiEndPoint + 'getTeachers')
      .subscribe(
        (data) => {
          this.teachers = data;
        },
        (error) => {}
      );
  }
}
