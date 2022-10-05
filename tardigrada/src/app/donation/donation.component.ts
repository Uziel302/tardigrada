import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit, AfterViewChecked {
  public repeat: boolean = true;
  public sum: number = 30;
  public prices: number[] = [5, 10, 20, 30];
  public otherSum: number;
  public myName: string = '';
  public myEmail: string = '';
  public showPayment: boolean = false;

  public paypalId = 'Ac5qubv1EmzyWivxbUMFPQwqtdIH3_Afj83TtHYVX2MHVTBZr7dbCd2W8xNUSkZDGDsRFqfKxmWrUi2B';
  public didPaypalScriptLoad: boolean = false;

  public ngAfterViewChecked(): void {
    if (!this.didPaypalScriptLoad) {
      this.loadPaypalScript().then(() => {
        paypal.Buttons({
          style: {
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              tagline: false,              
          },
          createOrder: (data:any, actions:any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: (document.getElementById('paypal-sum') as HTMLElement).innerText,
                }
              }]
            });
          },
          onApprove: (data:any, actions:any) => {
            return actions.order.capture().then(function(orderData:any) {
              console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
              const element = document.getElementById('paypal-button') as HTMLElement;
              element.innerHTML = '<h3>Thank you for your payment!</h3>';
            });
          }
      }).render('#paypal-button');
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypal.com/sdk/js?client-id='+this.paypalId+'&currency=EUR';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
