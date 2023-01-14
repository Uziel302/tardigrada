import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public message: string = '';
  public success: boolean = false;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  sendEmail(): void {
    this.http
      .post(environment.apiEndPoint + 'sendEmail', {
        to: 'nomadic.tardigrade@gmail.com',
        from: this.email,
        title: 'New message from '+this.name,
        message: this.message,
      })
      .subscribe(
        (data) => {
          this.success = true;
        },
        (error) => {}
      );

  }
}
