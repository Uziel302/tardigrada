import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/login-screen/login.service';
import { ScheduleService } from 'src/app/schedule/schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() isPaying: boolean = false;
  @Input() showPopup: boolean = false;
  @Input() lectureId: number = 0;
  @Output() hidePopup = new EventEmitter<boolean>();

  constructor(
    private scheduleService: ScheduleService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  backgroundClick() {
    this.showPopup = false;
    this.hidePopup.emit(true);
  }

  stopProp(event: any) {
    event.stopPropagation();
  }

  joinLecture() {
    this.scheduleService.joinLecture(
      this.lectureId,
      this.loginService.currentChildId
    );
    this.scheduleService.childLectures[this.lectureId] = true;
    this.router.navigate(['/student']);
  }
}
