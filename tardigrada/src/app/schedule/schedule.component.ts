import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login-screen/login.service';
import { ILecture } from '../models/lecture';

import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  @Input() isCourses = false;
  public selectedDay: number = 0;
  public weekDays = [0, 1, 2, 3, 4, 5, 6];
  public weekMapShort = new Map([
    [0, 'пн'],
    [1, 'вт'],
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
    [5, 'сб'],
    [6, 'вс'],
  ]);

  public weekFirstHalf = new Map([
    [0, 'пн'],
    [1, 'вт'],
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
  ]);

  public weekSecondHalf = new Map([
    [2, 'ср'],
    [3, 'чт'],
    [4, 'пт'],
    [5, 'сб'],
    [6, 'вс'],
  ]);
  public secondHalf: boolean = false;

  public ageList: number[] = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  public ageShortList: number[] = [4, 5, 6, 7, 8];
  public selectedAges: number[] = [];
  public selectedCategories: string[] = [];
  public selectedDays: number[] = [];
  public search: string = '';
  public filteredLectures: ILecture[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    public scheduleService: ScheduleService,
    private loginService: LoginService
  ) {}

  onMakeVisible(event: boolean, selector: string) {
    let element = document.getElementById(selector) as HTMLElement;
    element.style.display = event ? 'block' : 'none';
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.scheduleService.processLecturesData(lecturesData);
        this.filteredLectures = this.scheduleService.lecturesData;
      })
    );

    this.subscriptions.push(
      this.scheduleService
        .getChildLectures(this.loginService.connectedChildId)
        .subscribe((childLectures: any) => {
          this.scheduleService.processLecturesData(childLectures);
        })
    );
  }

  ngOnDestroy(): void {
    for (let item of this.subscriptions) {
      item.unsubscribe();
    }
  }

  toggleAge(age: number) {
    if (this.selectedAges.includes(age)) {
      this.selectedAges.splice(this.selectedAges.indexOf(age), 1);
    } else {
      this.selectedAges.push(age);
    }

    this.filterLectures();
  }

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories.splice(
        this.selectedCategories.indexOf(category),
        1
      );
    } else {
      this.selectedCategories.push(category);
    }
    this.filterLectures();
  }

  toggleDay(day: number) {
    if (this.selectedDays.includes(day)) {
      this.selectedDays.splice(this.selectedDays.indexOf(day), 1);
    } else {
      this.selectedDays.push(day);
    }
  }

  filterday(day: number): boolean {
    if (!this.selectedDays.length) {
      return true;
    }

    if (this.selectedDays.includes(day)) {
      return true;
    }

    return false;
  }

  lowerAge() {
    if (this.ageShortList[0] !== 4) {
      [...Array(5)].forEach((_, i) => {
        this.ageShortList[i] -= 5;
      });
    }
  }

  higherAge() {
    if (this.ageShortList[4] !== 18) {
      [...Array(5)].forEach((_, i) => {
        this.ageShortList[i] += 5;
      });
    }
  }

  filterLectures(): void {
    this.filteredLectures = [];
    for(let lecture of this.scheduleService.lecturesData){
      if(this.checkFilters(lecture)){
        this.filteredLectures.push(lecture);
      }
    }
  }

  clearFilters(){
    this.selectedAges = [];
    this.selectedCategories = [];
    this.selectedDays = [];
    this.filterLectures();
  }

  checkFilters(lecture: ILecture): boolean {
    if(this.checkAge(lecture.minAge, lecture.maxAge) && this.checkSubject(lecture)){
      return true;
    }
    return false;
  }

  checkAge(min: number, max: number): boolean {
    if(!this.selectedAges.length){
      return true;
    }
    return this.selectedAges
      ? this.selectedAges.some((x) => x >= min && x <= max)
      : false;
  }

  checkSubject(lecture: ILecture): boolean {
    if(!this.selectedCategories.length){
      return true;
    }
    return this.selectedCategories.includes(lecture.category);
  }
}
