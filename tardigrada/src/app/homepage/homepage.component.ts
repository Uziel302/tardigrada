import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  config: any;
  fullpage_api: any;

  constructor(private router: Router) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      menu: '#menu',

      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin: any, destination: any, direction: any) => {
        console.log(origin.index);
      },
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  logoClick() {
    this.router.navigate(['/login']);
  }
}
