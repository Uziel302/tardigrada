import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css'],
})
export class LectureComponent implements OnInit {
  @Input() data: ILecture = {
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

  constructor() {}

  ngOnInit(): void {}
}
