import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers/teachers.service';

@Component({
  selector: 'app-en-teachers',
  templateUrl: './en-teachers.component.html',
  styleUrls: ['./en-teachers.component.css']
})
export class EnTeachersComponent implements OnInit {

  constructor(public teachersService: TeachersService) { }

  ngOnInit(): void {
    this.teachersService.getTeachers();
  }

}
