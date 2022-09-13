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

  public getEmptyWeek(){
    let lessonsArray: ILecture[][][] = [];
    for(let i of [0, 1, 2, 3, 4, 5, 6]){
      lessonsArray[i] = [];
      for(let j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]){
        lessonsArray[i][j] = [];
        for(let k of [0, 1]){
          lessonsArray[i][j][k] = {
            title: '',
            subtitle: '',
            teacher: '',
            hour: '',
            minAge: '',
            maxAge: '',
            background: '',
            url: '',
          };
        }
      }
    }
    return lessonsArray;
  }
}