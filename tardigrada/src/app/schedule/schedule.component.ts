import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITimeZone } from '../models/timezone';

import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
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

  public ageList: number[] = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  public selectedAges: number[] = [];
  public selectedCategories: string[] = [];
  public selectedDays: number[] = [];
  public search: string = '';
  public timeZones: ITimeZone[] = [
    { text: 'Иерусалим - Израиль', name: 'Asia/Jerusalem', offset: 0 },
    { text: 'Тбилиси - Грузия', name: 'Asia/Tbilisi', offset: 0 },
    { text: 'Киев - Украина', name: 'Europe/Kyiv', offset: 0 },
    { text: 'Москва - Россия', name: 'Europe/Moscow', offset: 0 },
    { text: 'Стамбул - Турция', name: 'Europe/Istanbul', offset: 0 },
  ];

  private subscriptions: Subscription[] = [];

  constructor(public scheduleService: ScheduleService) {}

  onMakeVisible(event: boolean, selector: string) {
    let element = document.getElementById(selector) as HTMLElement;
    element.style.display = event ? 'block' : 'none';
  }

  ngOnInit(): void {
    this.calculateOffsets();

    this.subscriptions.push(
      this.scheduleService.getLecturesData().subscribe((lecturesData: any) => {
        this.scheduleService.processLecturesData(lecturesData);
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

  onZoneChange(event: any) {
    //ignore default timezones
    if(+event.target.value === 3){
      return;
    };
    this.scheduleService.offsetFromMoscow = +event.target.value - 3;
  }

  getOffset(tz: string) {
    let d: any = new Date();
    const a = d.toLocaleString('ja', { timeZone: tz }).split(/[/\s:]/);
    a[1]--;
    const t1 = Date.UTC.apply(null, a);
    const t2 = new Date(d).setMilliseconds(0);
    return (t1 - t2) / 60 / 60 / 1000;
  }

  calculateOffsets(){
    for(let timezone of this.timeZones){
      timezone.offset = this.getOffset(timezone.name);
    }
  }
}
