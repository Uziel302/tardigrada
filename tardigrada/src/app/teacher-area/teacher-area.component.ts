import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { INote } from '../models/note';
import { ITeacher } from '../models/teacher';
import { IChild } from '../models/child';
import { ParsingService } from '../general/parser.service';

@Component({
  selector: 'app-teacher-area',
  templateUrl: './teacher-area.component.html',
  styleUrls: [
    '../student-area/shared-user-area.css',
    './teacher-area.component.css',
  ],
})
export class TeacherAreaComponent implements OnInit {
  public userId: number = 0;
  public showSettings: boolean = false;
  public chosenChild: number = -1;
  public noteList: INote[] = [];
  public currentNote: string = '';
  public currentLink: string = '';
  public currentError: string = '';
  public showLinkInput: boolean = false;
  public annoyingText: string = '';
  public annoyingSize: string = '20px';
  public annoyingColor: string = 'red';
  public stationeryText: string = '';
  public homeworkText: string = '';
  public homeworkFile: string = '';

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    public parsing: ParsingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginService.currentChildId = 0;
    this.loadOrCreateTeacher();
    this.getNotes();
    this.getAnnoying();
  }

  stopProp(event: any) {
    event.stopPropagation();
  }

  selectChild(index: number) {
    this.chosenChild = index;
    this.loginService.currentChildId =
      this.scheduleService.currentChildren[index].id;
    this.scheduleService.getHomeworks(
      this.scheduleService.selectedLecture.id,
      this.loginService.currentChildId
    );
    let element = document.getElementById('child-anchor') as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  getAnnoying() {
    this.http
      .get<{ text: string; size: string; color: string }>(
        environment.apiEndPoint + 'getAnnoying'
      )
      .subscribe(
        (data) => {
          this.annoyingText = data.text;
          this.annoyingSize = data.size;
          this.annoyingColor = data.color;
        },
        (error) => {}
      );
  }

  getLectureChildren(lectureId: number) {
    this.http
      .get<IChild[]>(
        environment.apiEndPoint +
          'getLectureChildren' +
          '/?lectureId=' +
          lectureId
      )
      .subscribe(
        (data) => {
          this.scheduleService.currentChildren = data;
        },
        (error) => {}
      );
  }

  getNotes() {
    this.http.get<INote[]>(environment.apiEndPoint + 'notes').subscribe(
      (data) => {
        this.noteList = data;
      },
      (error) => {
        this.currentError = error.error.message;
      }
    );
  }

  deleteNote(i: number) {
    this.http
      .post(environment.apiEndPoint + 'deleteNote', { id: this.noteList[i].id })
      .subscribe(
        (data) => {
          this.noteList.splice(i, 1);
        },
        (error) => {
          this.currentError = error.error.message;
        }
      );
  }

  saveNote() {
    this.http
      .post<{ id: number }>(environment.apiEndPoint + 'saveNote', {
        note: this.currentNote,
        link: this.currentLink,
        lectureId: this.scheduleService.selectedLecture.id,
      })
      .subscribe(
        (data) => {
          this.noteList.unshift({
            id: data.id,
            lectureId: this.scheduleService.selectedLecture.id,
            note: this.currentNote ? this.currentNote : this.currentLink,
            link: this.currentLink,
          });
          this.currentNote = '';
          this.currentLink = '';
        },
        (error) => {
          this.currentError = error.error.message;
        }
      );
  }

  updateNoteFile(event: string) {
    this.currentLink = event;
  }

  updateHwFile(event: string) {
    this.homeworkFile = event;
  }

  loadOrCreateTeacher() {
    this.http
      .get<ITeacher>(environment.apiEndPoint + 'loadOrCreateTeacher')
      .subscribe(
        (data) => {
          this.loginService.teacher = data;
          this.scheduleService.getTeacherLectures(data.userId);
          this.scheduleService.getPersonalSlots(0, data.userId);
        },
        (error) => {}
      );
  }

  saveStationery() {
    this.http
      .post(environment.apiEndPoint + 'saveStationery', {
        lectureId: this.scheduleService.selectedLecture.id,
        stationeryText: this.stationeryText,
        stationeryFile: this.scheduleService.selectedLecture.stationeryFile,
      })
      .subscribe(
        (data) => {
          this.scheduleService.selectedLecture.stationeryText =
            this.stationeryText;
        },
        (error) => {}
      );
  }

  saveHomework() {
    this.http
      .post(environment.apiEndPoint + 'saveHomework', {
        text: this.homeworkText,
        file: this.homeworkFile,
        lectureId: this.scheduleService.selectedLecture.id,
      })
      .subscribe(
        (data) => {
          this.scheduleService.savedHomeworkText = this.homeworkText;
          this.scheduleService.savedHomeworkFile = this.homeworkFile;
        },
        (error) => {}
      );
  }

  onLectureChange(lectureId: number) {
    if (lectureId) {
      this.getLectureChildren(lectureId);
      this.scheduleService.getHomework(lectureId);
    }
  }
}
