import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-about',
  templateUrl: './en-about.component.html',
  styleUrls: ['./en-about.component.css']
})
export class EnAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('isEnglish', 'true');
  }

}
