import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  public freeClicked: boolean = false;
  public freeText: string = '';
  public successMessage: any;
  public currentError: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitRequest(): void {
    let data = { text: this.freeText };
    this.http
      .post<string>(environment.apiEndPoint + 'freeRequest', data)
      .subscribe(
        (data) => {
          this.successMessage = data;
        },
        (error) => {
          this.currentError = error.error.message;
        }
      );
  }
}
