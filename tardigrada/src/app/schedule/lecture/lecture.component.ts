import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  @Input() data:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
