import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/login-screen/login.service';

import { ITimeZone } from '../../models/timezone';
import { ScheduleService } from '../../schedule/schedule.service';
import { ZonesInRussian } from './zones-russian.service';

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css'],
})
export class ZoneSelectorComponent implements OnInit {
  public moscowOffset: number = 3;
  @Input() userpage: boolean = false;
  @Input() newstudent: boolean = false;
  @Output() changeTz = new EventEmitter();

  public promotedTz: string[] = [
    'Asia/Jerusalem',
    'Asia/Tbilisi',
    'Europe/Kyiv',
    'Europe/Moscow',
    'Europe/Istanbul',
  ];
  public filteredTimeZones: ITimeZone[] = [];

  constructor(
    public scheduleService: ScheduleService,
    public zonesInRussian: ZonesInRussian,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loadTimezones();
  }

  getOffset(tz: string) {
    let d: any = new Date();
    const a = d.toLocaleString('ja', { timeZone: tz }).split(/[/\s:]/);
    a[1]--;
    const t1 = Date.UTC.apply(null, a);
    const t2 = new Date(d).setMilliseconds(0);
    return (t1 - t2) / 60 / 60 / 1000;
  }

  loadTimezones() {
    //first, calculate the offsets of the predefined timezones
    for (let timezone of this.scheduleService.timeZones) {
      timezone.offset = this.getOffset(timezone.name) - this.moscowOffset;
    }
    let intl: any = Intl;
    let ary = intl.supportedValuesOf('timeZone');
    ary.forEach((timeZone: any) => {
      if (!this.promotedTz.includes(timeZone)) {
        let russianName = this.zonesInRussian.getZoneInRussian(timeZone);
        let offset = this.getOffset(timeZone) - this.moscowOffset;
        this.scheduleService.timeZones.push({
          text: russianName,
          name: timeZone,
          offset,
        });
      }
    });
    this.filteredTimeZones = this.scheduleService.timeZones;
  }

  changeTime(timezone: ITimeZone) {
    this.changeTz.emit(timezone.name);
  }

  onKey(event: any) {
    let needle = event.target.value.toLowerCase();
    this.filteredTimeZones = this.scheduleService.timeZones.filter(
      (timezone) =>
        timezone.text.toLowerCase().includes(needle) ||
        timezone.name.toLowerCase().includes(needle)
    );
  }
}
