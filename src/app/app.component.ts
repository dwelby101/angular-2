/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>

          <a md-button [routerLink]=" ['./home'] ">
            Home
          </a>
          <a md-button [routerLink]=" ['./gallery'] ">
            Gallery
          </a>
          <a md-button [routerLink]=" ['./commissions'] ">
            Commissions
          </a>
          <a md-button [routerLink]=" ['./about'] ">
            About
          </a>
          <a md-button [routerLink]=" ['./store'] ">
            Store
          </a>
          <a md-button [routerLink]=" ['./faq'] ">
            FAQ
          </a>

      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <main style="height: 80%">
        <router-outlet></router-outlet>
      </main>


      <footer>
        <span id="footerText">Footer for fionaniland.com
          <a [href]="url">@finiland</a>
        </span>
        <img [src]="angularclassLogo" width="6%">
      </footer>
    </md-content>
  `
})
export class App {
  angularclassLogo = 'https://pbs.twimg.com/profile_images/756586892083269636/lAA_JCoe.jpg';
  loading = false;
  name = 'FionaNiland.com';
  url = 'https://twitter.com/finiland';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
