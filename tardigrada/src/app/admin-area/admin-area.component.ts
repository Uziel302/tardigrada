import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css'],
})
export class AdminAreaComponent implements OnInit {
  public annoyingText: string = '';
  public annoyingColor: string = 'red';
  public annoyingSize: string = '20px';
  public saved: boolean = false;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
  }

  submit() {
    this.http
      .post(environment.apiEndPoint + 'saveAnnoying', {
        text: this.annoyingText,
        color: this.annoyingColor,
        size: this.annoyingSize,
      })
      .subscribe(
        (data) => {
          this.saved = true;
        },
        (error) => {}
      );
  }

}
