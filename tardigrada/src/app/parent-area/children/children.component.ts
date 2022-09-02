import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { IChild } from 'src/app/models/child';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  public children = [];
  public editMode: boolean = true;
  public saveSuccess: string = '';
  public saveError: string = '';

  public childData: IChild = {
    firstName: '',
    lastName: '',
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
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  saveChild() {
    this.http
      .post<{ message: string }>(
        environment.apiEndPoint + 'saveChild',
        this.childData
      )
      .subscribe(
        (data) => {
          this.saveError = '';
          this.saveSuccess = data.message;
          this.childData = {
            firstName: '',
            lastName: '',
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
          };
        },
        (error) => {
          this.saveError = error.message;
        }
      );
  }
}
