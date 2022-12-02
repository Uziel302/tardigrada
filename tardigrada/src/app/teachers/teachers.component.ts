import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  constructor(public teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.getTeachers();
  }
}
