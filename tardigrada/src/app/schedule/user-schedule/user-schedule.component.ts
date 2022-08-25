import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css']
})
export class UserScheduleComponent implements OnInit {

  @Input() userId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
