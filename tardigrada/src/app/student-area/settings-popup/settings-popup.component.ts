import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoginService } from '../../login-screen/login.service';
import { IChild } from 'src/app/models/child';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.css'],
})
export class SettingsPopupComponent implements OnInit {
  @Input() isStudent: boolean = true;
  @Input() showSettings: boolean = true;
  @Output() switchChild = new EventEmitter<IChild>();
  @Output() settingsChange = new EventEmitter<boolean>();
  public adminView: number = -3;
  public adminChild: string = '';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}

  stopProp(event: any) {
    event.stopPropagation();
  }

  changeChild(child: IChild) {
    this.switchChild.emit(child);
  }

  backgroundClick() {
    this.showSettings = false;
    this.settingsChange.emit(false);
  }

  titleClick() {
    if (!this.adminView) {
      localStorage.setItem('childId', this.adminChild);
    }
    this.adminView++;
  }
}
