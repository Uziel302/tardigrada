import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ScheduleService } from '../schedule/schedule.service';
import { LoginService } from '../login-screen/login.service';
import { INote } from '../models/note';
import { ITeacher } from '../models/teacher';

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

  constructor(
    public scheduleService: ScheduleService,
    public loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadOrCreateTeacher();
    this.getNotes();
    this.getAnnoying();
    //TODO remove
    for (let i of [0, 1, 2, 3, 4]) {
      this.scheduleService.currentChildren.push({
        id: 0,
        firstName: 'Имя ' + i,
        lastName: 'Фамилия',
        fatherName: '',
        dateOfBirth: '',
        className: '',
        subjects: '',
        timezone: '',
        zoom: '',
        device: '',
        language: '',
        limits: '',
        telegram: '',
        note: '',
        cover: '/assets/images/default-cover.jpeg',
        profile: '/assets/images/profile-default.jpg',
      });
    }
  }

  stopProp(event: any) {
    event.stopPropagation();
  }

  selectChild(index: number) {
    this.chosenChild = index;
    let element = document.getElementById('child-anchor') as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  handleKeyUp(e: any) {
    if (e.keyCode === 13) {
      this.saveNote();
    }
  }

  getAnnoying() {
    this.http.get<{text: string; size: string; color: string;}>(environment.apiEndPoint + 'getAnnoying').subscribe(
      (data) => {
        this.annoyingText = data.text;
        this.annoyingSize = data.size;
        this.annoyingColor = data.color;
      },
      (error) => {
      }
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
      .post<{ id: number }>(environment.apiEndPoint + 'saveNote', { note: this.currentNote, link: this.currentLink })
      .subscribe(
        (data) => {
          this.noteList.unshift({
            id: data.id,
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

  saveUpload(event: {filename: string; id: number;}){
    this.noteList.unshift({
      id: event.id,
      note: this.currentNote ? this.currentNote : event.filename,
      link: event.filename,
    });
    this.currentNote = '';
    this.currentLink = '';
  }

  loadOrCreateTeacher() {
    this.http
      .get<ITeacher>(environment.apiEndPoint + 'loadOrCreateTeacher')
      .subscribe(
        (data) => {
          this.loginService.teacher = data;
        },
        (error) => {}
      );
  }
}
