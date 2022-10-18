import { Component, OnInit, Input } from '@angular/core';

import { ITimeZone } from '../../models/timezone';
import { ScheduleService } from '../../schedule/schedule.service';

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css'],
})
export class ZoneSelectorComponent implements OnInit {
  public moscowOffset: number = 3;
  @Input() userpage: boolean = false;

  public timeZones: ITimeZone[] = [
    { text: 'Иерусалим - Израиль', name: 'Asia/Jerusalem', offset: 0 },
    { text: 'Тбилиси - Грузия', name: 'Asia/Tbilisi', offset: 0 },
    { text: 'Киев - Украина', name: 'Europe/Kyiv', offset: 0 },
    { text: 'Москва - Россия', name: 'Europe/Moscow', offset: 0 },
    { text: 'Стамбул - Турция', name: 'Europe/Istanbul', offset: 0 },
  ];

  constructor(public scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.calculateOffsets();
  }

  getOffset(tz: string) {
    let d: any = new Date();
    const a = d.toLocaleString('ja', { timeZone: tz }).split(/[/\s:]/);
    a[1]--;
    const t1 = Date.UTC.apply(null, a);
    const t2 = new Date(d).setMilliseconds(0);
    return (t1 - t2) / 60 / 60 / 1000;
  }

  calculateOffsets() {
    for (let timezone of this.timeZones) {
      timezone.offset = this.getOffset(timezone.name) - this.moscowOffset;
    }
  }
}
