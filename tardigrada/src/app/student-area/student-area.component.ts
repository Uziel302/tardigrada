import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {

  public selectedDay: number = 0;
  public checkedAges: number[] = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  constructor() { }

  ngOnInit(): void {
  }

}
