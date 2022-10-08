import { Component, OnInit } from '@angular/core';

declare let paypal: any;

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

  public paypalId = 'Ac5qubv1EmzyWivxbUMFPQwqtdIH3_Afj83TtHYVX2MHVTBZr7dbCd2W8xNUSkZDGDsRFqfKxmWrUi2B';
  
  public loadPaypalScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypal.com/sdk/js?client-id='+this.paypalId+'&currency=EUR&locale=en_IL';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  public loadSubscribeScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = "https://www.paypal.com/sdk/js?client-id=ARSXCL-D4d86AUAYeDAsC2ne8HD4RIdlm8xUZgxg-GzLkfiwuveCwDBpVnQEpUReDqrmHr1Hafp1OBTN&vault=true&intent=subscription";
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  public showForm(){
    this.showPayment = true;
    if(!this.repeat){
      this.loadPaypalScript().then(() => {
        paypal.Buttons({
          style: {
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              tagline: false,
              label: 'pay',             
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
    
    if(this.repeat){
      this.loadSubscribeScript().then(() => {
        paypal.Buttons({
          style: {
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              tagline: false,
              label: 'subscribe',             
          },
          createSubscription: function(data: any, actions: any) {
            return actions.subscription.create({
              plan_id: 'P-3X07202057110705XMNAZU3A',
              quantity: (document.getElementById('paypal-sum') as HTMLElement).innerText
            });
          },
          onApprove: (data:any, actions:any) => {
            return actions.order.capture().then(function(orderData:any) {
              console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
              const element = document.getElementById('paypal-button') as HTMLElement;
              element.innerHTML = '<h3>Thank you for your subscription!</h3>';
            });
          }
      }).render('#paypal-subscribe');
      });
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
