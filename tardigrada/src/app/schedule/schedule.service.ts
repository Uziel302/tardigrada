import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IChild } from '../models/child';
import { ILecture } from '../models/lecture';
import { IHomeWork } from '../models/homework';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  public lessonsArray: ILecture[][][] = this.getEmptyWeek();
  public childLectures: boolean[] = [];
  public selectedLecture: ILecture = {
    id: 0,
    title: '',
    subtitle: '',
    teacher: '',
    hour: '',
    minAge: '',
    maxAge: '',
    background: '',
    url: '',
    stationeryText: '',
    stationeryFile: '',
    book: '',
  };
  public currentChildren: IChild[] = [];
  public dayNumber: number = 0;
  public week: string[] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  public savedHomeworkText: string = '';
  public savedHomeworkFile: string = '';
  public currentHomeworks: IHomeWork[] = [];
  public openHwResponse: boolean[] = [];

  public getLecturesData() {
    return this.http.get(environment.apiEndPoint + 'getLectures');
  }

  public getChildLectures(childId: number) {
    return this.http.post(environment.apiEndPoint + 'getChildLectures', {
      childId,
    });
  }

  constructor(private http: HttpClient) {}

  public getEmptyWeek() {
    let lessonsArray: ILecture[][][] = [];
    for (let i of [0, 1, 2, 3, 4, 5, 6]) {
      lessonsArray[i] = [];
      for (let j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
        lessonsArray[i][j] = [];
        for (let k of [0, 1]) {
          lessonsArray[i][j][k] = {
            id: 0,
            title: '',
            subtitle: '',
            teacher: '',
            hour: '',
            minAge: '',
            maxAge: '',
            background: '',
            url: '',
            stationeryText: '',
            stationeryFile: '',
            book: '',
          };
        }
      }
    }
    return lessonsArray;
  }

  public joinLecture(lectureId: number, childId: number) {
    this.http
      .post(environment.apiEndPoint + 'joinLecture', { lectureId, childId })
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }

  public leaveLecture(lectureId: number, childId: number) {
    this.http
      .post(environment.apiEndPoint + 'leaveLecture', { lectureId, childId })
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }

  public processLecturesData(lecturesData: any) {
    for (let lectureData of lecturesData) {
      const whichHalf = this.lessonsArray[lectureData.day][
        lectureData.hour - 9
      ][0]['id']
        ? 1
        : 0;
      this.lessonsArray[lectureData.day][lectureData.hour - 9][whichHalf] = {
        id: lectureData.id,
        title: lectureData.title,
        subtitle: lectureData.subtitle,
        teacher: lectureData.teacherName,
        hour: this.getTimeFormatted(lectureData.hour, lectureData.minutes),
        minAge: lectureData.minAge,
        maxAge: lectureData.maxAge,
        background: lectureData.background,
        url: lectureData.telegram,
        stationeryText: lectureData.stationeryText,
        stationeryFile: lectureData.stationeryFile,
        book: lectureData.book,
      };
    }
  }

  public processChildLectures(childLectures: any) {
    for (let childLecture of childLectures) {
      this.childLectures[childLecture.lectureId] = true;
    }
  }

  private getTimeFormatted(hour: number, minutes: number) {
    let formatted = hour < 10 ? '0' + hour : '' + hour;
    formatted += minutes < 10 ? ':0' + minutes : ':' + minutes;
    return formatted;
  }

  getHomework(id: number) {
    this.savedHomeworkText = '';
    this.savedHomeworkFile = '';
    this.http
      .get<{ text: string; file: string }>(
        environment.apiEndPoint + 'homework/?id=' + id
      )
      .subscribe(
        (data) => {
          if(data){
            this.savedHomeworkText = data.text;
            this.savedHomeworkFile = data.file;
          }
        },
        (error) => {}
      );
  }


  getHomeworks(id: number, childId: number) {
    this.http
      .get<IHomeWork[]>(
        environment.apiEndPoint + 'homeworks/?id=' + id + '&childId=' + childId
      )
      .subscribe(
        (data) => {
          if(data){
            this.currentHomeworks = data;
          }
        },
        (error) => {}
      );
  }
}
