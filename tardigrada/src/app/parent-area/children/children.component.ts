import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  public children = [];
  public editMode: boolean = false;
  public firstName: string = '';
  public lastName: string = '';
  public fatherName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
