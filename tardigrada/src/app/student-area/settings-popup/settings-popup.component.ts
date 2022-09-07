import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoginService } from '../../login-screen/login.service';
import { IChild } from 'src/app/models/child';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.css']
})
export class SettingsPopupComponent implements OnInit {

  @Input() isStudent: boolean = true;
  @Input() showSettings: boolean = true;
  @Output() switchChild = new EventEmitter<IChild>;

  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  stopProp(event: any){
    event.stopPropagation();
  }

  changeChild(child: IChild){
    this.switchChild.emit(child);
  }

}
