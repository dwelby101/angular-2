import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {Renderer} from '@angular/core';
import {ElementRef} from '@angular/core';

import { Navigation } from '../navigation/navigation.component';

@Component({
  selector: 'header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.scss'],
  directives: [
    Navigation
  ],
  encapsulation: ViewEncapsulation.None
})
export class Header {

  ngOnInit() {
console.log('====== loading Header componenet =========');
  }
}
