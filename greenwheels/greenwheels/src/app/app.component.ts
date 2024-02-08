import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router   } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet  , RouterLink , RouterLinkActive  ]
})
export class AppComponent {
  title = 'GreenWheels';
  showGreenWheelsInfo: boolean = true;
  showGreenWheelsInfo1: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Logic to determine which components should show/hide the divs
        this.showGreenWheelsInfo = !event.url.includes('/vehicle-recommender') && !event.url.includes('/emission-map');
        this.showGreenWheelsInfo = !event.url.includes('/emission-map') && !event.url.includes('/vehicle-recommender') && !event.url.includes('/emission-rate') && !event.url.includes('/Login-Sign-up-page') && !event.url.includes('/About-Devs');
        this.showGreenWheelsInfo1 = !event.url.includes('/emission-map') && !event.url.includes('/vehicle-recommender') && !event.url.includes('/emission-rate') && !event.url.includes('/Login-Sign-up-page') && !event.url.includes('/About-Devs');
      }
    });
  }
}

