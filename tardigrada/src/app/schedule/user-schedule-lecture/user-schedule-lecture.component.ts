import { Component, OnInit, Input } from '@angular/core';

import { ILecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-user-schedule-lecture',
  templateUrl: './user-schedule-lecture.component.html',
  styleUrls: ['./user-schedule-lecture.component.css']
})
export class UserScheduleLectureComponent implements OnInit {

  @Input() data: ILecture = {title:'',subtitle:'',teacher:'',hour:'',minAge:'',maxAge:'',background:'',url:''};

  constructor() {
  }

  ngOnInit(): void {
  }

}
