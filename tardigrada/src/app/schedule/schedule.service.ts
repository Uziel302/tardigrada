import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IChild } from '../models/child';
import { ILecture } from '../models/lecture';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  public selectedLecture: ILecture = {
    title: '',
    subtitle: '',
    teacher: '',
    hour: '',
    minAge: '',
    maxAge: '',
    background: '',
    url: '',
  };
  public currentChildren: IChild[] = [];
  public dayNumber: number = 0;
  public week: string[] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  
  public getLecturesData(){
    return this.http.get(environment.apiEndPoint + 'getLectures');
  }
  
  constructor(
    private http: HttpClient,
  ){}
}