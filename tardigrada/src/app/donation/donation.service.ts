import { Injectable } from '@angular/core';

declare let paypal: any;

@Injectable({ providedIn: 'root' })
export class DonationService {

  private paypalId =
  'ARaKC8HDKLoTOLrKqTjs2czeeevDCrodcdm31r7kbtU9Lv5RjVcfwy1eGKGo-ZXfi617BVCuVgh44Jhe';


  public loadPaypalScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src =
        'https://www.paypal.com/sdk/js?client-id=' +
        this.paypalId +
        '&currency=EUR&locale=en_IL';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  public loadSubscribeScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src =
        'https://www.paypal.com/sdk/js?client-id=ARSXCL-D4d86AUAYeDAsC2ne8HD4RIdlm8xUZgxg-GzLkfiwuveCwDBpVnQEpUReDqrmHr1Hafp1OBTN&vault=true&intent=subscription';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  public renderButtons(){
    paypal
      .Buttons({
        style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          tagline: false,
          label: 'pay',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (
                    document.getElementById('paypal-sum') as HTMLElement
                  ).innerText,
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then(function (orderData: any) {
            console.log(
              'Capture result',
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const element = document.getElementById(
              'paypal-button'
            ) as HTMLElement;
            element.innerHTML = '<h3>Thank you for your payment!</h3>';
            element.click();
          });
        },
      })
      .render('#paypal-button');
  }

  public renderButtonsRepeat(){
    paypal
    .Buttons({
      style: {
        shape: 'rect',
        color: 'white',
        layout: 'vertical',
        tagline: false,
        label: 'subscribe',
      },
      createSubscription: function (data: any, actions: any) {
        return actions.subscription.create({
          plan_id: 'P-3X07202057110705XMNAZU3A',
          quantity: (document.getElementById('paypal-sum') as HTMLElement)
            .innerText,
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then(function (orderData: any) {
          console.log(
            'Capture result',
            orderData,
            JSON.stringify(orderData, null, 2)
          );
          const element = document.getElementById(
            'paypal-button'
          ) as HTMLElement;
          element.innerHTML = '<h3>Thank you for your subscription!</h3>';
        });
      },
    })
    .render('#paypal-subscribe');
  }

}