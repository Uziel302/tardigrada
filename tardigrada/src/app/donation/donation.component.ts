import { Component, OnInit } from '@angular/core';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  public repeat: boolean = true;
  public sum: number = 30;
  public prices: number[] = [5, 10, 20, 30];
  public otherSum: number;
  public myName: string = '';
  public myEmail: string = '';
  public showPayment: boolean = false;

  public showForm() {
    this.showPayment = true;
    if (!this.repeat) {
      this.donationService.loadPaypalScript().then(() => {
        this.donationService.renderButtons();
      });
    }

    if (this.repeat) {
      this.donationService.loadSubscribeScript().then(() => {
        this.donationService.renderButtonsRepeat();
      });
    }
  }

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {}
}
