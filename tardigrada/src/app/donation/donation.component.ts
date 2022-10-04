import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  public repeat: boolean = true;
  public sum: number = 30;
  public prices: number[] = [5,10,20,30];
  public otherSum: number;
  public myName: string = '';
  public myEmail: string = '';

  constructor() {}

  ngOnInit(): void {}
}
