import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IChild } from '../models/child';
import { ILecture } from '../models/lecture';
import { IHomeWork } from '../models/homework';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  public lecturesArray: ILecture[][][] = this.getEmptyWeek();
  public lecturesData: ILecture[] = [];
  public childLectures: boolean[] = [];
  public emptyLecture: ILecture = {
    id: 0,
    title: '',
    subtitle: '',
    teacher: '',
    day: 0,
    hour: 0,
    minutes: 0,
    minAge: 0,
    maxAge: 0,
    background: '',
    url: '',
    stationeryText: '',
    stationeryFile: '',
    book: '',
    category: '',
  };
  public selectedLecture: ILecture = this.emptyLecture;
  public currentChildren: IChild[] = [];
  public dayNumber: number = 0;
  public week: string[] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  public savedHomeworkText: string = '';
  public savedHomeworkFile: string = '';
  public currentHomeworks: IHomeWork[] = [];
  public openHwResponse: boolean[] = [];
  public personalSlots: string[][] = this.getEmptyPersonalSlots();
  public personalSlotsOrig: string[][] = [];
  public offsetFromMoscow: number = 0;

  constructor(private http: HttpClient) {}

  public getPersonalSlots(childId: number, userId: number) {
    let queryString = childId ? '/?childId=' + childId : '/?userId=' + userId;
    this.http
      .get<{ day: number; hour: number; text: string }[]>(
        environment.apiEndPoint + 'getPersonalSlots' + queryString
      )
      .subscribe(
        (data) => {
          this.personalSlots = this.getEmptyPersonalSlots();
          this.personalSlotsOrig = this.getEmptyPersonalSlots();
          for (let slot of data) {
            this.personalSlots[slot.day][slot.hour] = slot.text;
            this.personalSlotsOrig[slot.day][slot.hour] = slot.text;
          }
        },
        (error) => {}
      );
  }

  public getLecturesData() {
    return this.http.get(environment.apiEndPoint + 'getLectures');
  }

  public getChildLectures(childId: number) {
    return this.http.get(
      environment.apiEndPoint + 'getChildLectures/?childId=' + childId
    );
  }

  public getTeacherLectures(teacherId: number) {
    this.http
      .get(
        environment.apiEndPoint + 'getTeacherLectures/?teacherId=' + teacherId
      )
      .subscribe(
        (data) => {
          this.processLecturesData(data);
        },
        (error) => {}
      );
  }

  public getEmptyWeek() {
    let lecturesArray: ILecture[][][] = [];
    for (let i of [0, 1, 2, 3, 4, 5, 6]) {
      lecturesArray[i] = [];
      for (let j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
        lecturesArray[i][j] = [];
        for (let k of [0, 1]) {
          lecturesArray[i][j][k] = { ...this.emptyLecture };
        }
      }
    }
    return lecturesArray;
  }

  public getEmptyPersonalSlots() {
    let personalSlots: string[][] = [];
    for (let i of [0, 1, 2, 3, 4, 5, 6]) {
      personalSlots[i] = [];
      for (let j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
        personalSlots[i][j] = '';
      }
    }
    return personalSlots;
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
    if (!lecturesData.length) {
      return;
    }
    this.lecturesArray = this.getEmptyWeek();
    if (!lecturesData[0].lectureId) {
      this.lecturesData = lecturesData;
    }
    for (let lectureData of lecturesData) {
      if (lectureData.lectureId) {
        this.childLectures[lectureData.lectureId] = true;
      }
      const whichHalf = this.lecturesArray[lectureData.day][
        lectureData.hour - 9
      ][0]['id']
        ? 1
        : 0;
      this.lecturesArray[lectureData.day][lectureData.hour - 9][whichHalf] =
        lectureData;
    }
  }

  public getTimeFormatted(lecture: ILecture, end: boolean) {
    let hour = lecture.hour + this.offsetFromMoscow + (end ? 1 : 0);
    let minutes = lecture.minutes;
    let formatted = hour < 10 ? '0' + hour : '' + hour;
    formatted += minutes < 10 ? ':0' + minutes : ':' + minutes;
    return formatted;
  }

  public getHomework(lectureId: number) {
    this.savedHomeworkText = '';
    this.savedHomeworkFile = '';
    this.http
      .get<{ text: string; file: string }>(
        environment.apiEndPoint + 'homework/?lectureId=' + lectureId
      )
      .subscribe(
        (data) => {
          if (data) {
            this.savedHomeworkText = data.text;
            this.savedHomeworkFile = data.file;
          }
        },
        (error) => {}
      );
  }

  getHomeworks(lectureId: number, childId: number) {
    let lectures = '';
    if (!lectureId) {
      for (let lecture of this.lecturesData) {
        lectures = lectures ? lectures + ',' : lectures;
        lectures += lecture.id;
      }
    }
    this.http
      .get<IHomeWork[]>(
        environment.apiEndPoint +
          'homeworks/?lectureId=' +
          (lectureId ? lectureId : lectures) +
          '&childId=' +
          childId
      )
      .subscribe(
        (data) => {
          if (data) {
            this.currentHomeworks = data;
          }
        },
        (error) => {}
      );
  }

  getCategoriesList(): string[] {
    let subjects: string[] = [];
    for (let lecture of this.lecturesData) {
      if (lecture.category && !subjects.includes(lecture.category)) {
        subjects.push(lecture.category);
      }
    }
    return subjects;
  }
}
