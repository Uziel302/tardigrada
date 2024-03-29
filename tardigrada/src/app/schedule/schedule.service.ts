import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IChild } from '../models/child';
import { ILecture } from '../models/lecture';
import { IHomeWork } from '../models/homework';
import { ICourse } from '../models/course';
import { ITimeZone } from '../models/timezone';
import { LoginService } from '../login-screen/login.service';

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
    teacherImage: '',
    teacherId: 0,
    day: 0,
    hour: 0,
    minutes: 0,
    duration: 0,
    day2: 0,
    hour2: 0,
    minutes2: 0,
    duration2: 0,
    startDate: '',
    minAge: 0,
    maxAge: 0,
    background: '',
    url: '',
    zoom: '',
    stationeryText: '',
    stationeryFile: '',
    book: '',
    category: '',
    image: '',
    price: 0,
  };
  public selectedLecture: ILecture = this.emptyLecture;
  public currentChildren: IChild[] = [];
  public dayNumber: number = 0;
  public week: string[] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  public weekDays: string[] = [
    'понедельникам',
    'вторникам',
    'средам',
    'четвергам',
    'пятницам',
    'субботам',
    'воскресенья',
  ];
  public savedHomeworkText: string = '';
  public savedHomeworkFile: string = '';
  public currentHomeworks: IHomeWork[] = [];
  public openHwResponse: boolean[] = [];
  public personalSlots: string[][] = this.getEmptyPersonalSlots();
  public personalSlotsOrig: string[][] = [];
  public timeZones: ITimeZone[] = [
    { text: 'Израиль - Иерусалим', name: 'Asia/Jerusalem', offset: 0 },
    { text: 'Грузия - Тбилиси', name: 'Asia/Tbilisi', offset: 0 },
    { text: 'Украина - Киев', name: 'Europe/Kyiv', offset: 0 },
    { text: 'Россия - Москва', name: 'Europe/Moscow', offset: 0 },
    { text: 'Турция - Стамбул', name: 'Europe/Istanbul', offset: 0 },
  ];
  public currentTz: ITimeZone = this.timeZones[3];

  constructor(private http: HttpClient, private loginService: LoginService) {}

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
    return this.http.get<any[]>(
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

  public joinLecture(lectureId: number, childId: number, amountPaid: number) {
    this.http
      .post(environment.apiEndPoint + 'joinLecture', {
        lectureId,
        childId,
        amountPaid,
      })
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
    this.lecturesArray = this.getEmptyWeek();
    if (!lecturesData.length) {
      return;
    }
    if (!lecturesData[0].lectureId) {
      this.lecturesData = lecturesData;
    }
    for (let lectureData of lecturesData) {
      if (lectureData.lectureId) {
        this.childLectures[lectureData.lectureId] = true;
      }
      if (lectureData.hour > 9) {
        const whichHalf = this.lecturesArray[lectureData.day][
          lectureData.hour - 9
        ][0]['id']
          ? 1
          : 0;
        this.lecturesArray[lectureData.day][lectureData.hour - 9][whichHalf] =
          lectureData;
      }
      if (lectureData.hour2 > 9) {
        const whichHalf2 = this.lecturesArray[lectureData.day2][
          lectureData.hour2 - 9
        ][0]['id']
          ? 1
          : 0;
        this.lecturesArray[lectureData.day2][lectureData.hour2 - 9][
          whichHalf2
        ] = lectureData;
      }
    }
  }

  public getTimeFormatted(
    lecture: ILecture | ICourse,
    end: boolean,
    isSecond: boolean
  ) {
    let hour = 0;
    let minutes = 0;
    if (isSecond) {
      hour =
        lecture.hour2 +
        this.currentTz.offset +
        (end ? Math.floor(lecture.duration2 / 60) : 0);
      minutes = lecture.minutes2 + (end ? lecture.duration2 % 60 : 0);
    } else {
      hour =
        lecture.hour +
        this.currentTz.offset +
        (end ? Math.floor(lecture.duration / 60) : 0);
      minutes = lecture.minutes + (end ? lecture.duration % 60 : 0);
    }
    let formatted = hour < 10 ? '0' + hour : '' + hour;
    formatted += minutes < 10 ? '.0' + minutes : '.' + minutes;
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
    subjects.sort();
    return subjects;
  }

  saveUserTz(timezone: string) {
    this.http
      .post(environment.apiEndPoint + 'saveUserTz', {
        childId: this.loginService.connectedChildId,
        userId: this.loginService.teacher.userId,
        timezone,
      })
      .subscribe(
        (data) => {},
        (error) => {}
      );
  }

  updateLecture(lecture: ILecture) {
    return this.http.post(environment.apiEndPoint + 'updateLecture', lecture);
  }

  createEmptyLecture() {
    return this.http.post<number>(
      environment.apiEndPoint + 'createEmptyLecture',
      this.emptyLecture
    );
  }
}
