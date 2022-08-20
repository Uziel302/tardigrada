import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  @Input() data: ILecture = {
    title: '',
    subtitle: '',
    teacher: '',
    hour: '',
    minAge: '',
    maxAge: '',
    background: '',
    url: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
