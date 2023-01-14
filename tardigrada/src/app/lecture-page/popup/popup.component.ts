import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() isPaying: boolean = false;
  @Input() showPopup: boolean = false;
  @Output() hidePopup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  backgroundClick() {
    this.showPopup = false;
    this.hidePopup.emit(true);
  }

  stopProp(event: any) {
    event.stopPropagation();
  }

}
