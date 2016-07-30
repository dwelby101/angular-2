import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'gallery',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class Gallery {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Gallery` component');
  }

}
