import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Renderer,
  ElementRef
} from '@angular/core';

import {NgClass} from '@angular/common';
import {StickDirective} from '../../directives/stick.directive';
import {NavigationService} from '../../services/navigation.service';
import { Menu } from './class-menu';

@Component({
  selector: 'nav-bar',
  inputs: ['menuToggle'],
  templateUrl: './navigation.template.html',
  providers: [
    NavigationService
  ],
  directives: [
    NgClass,
    StickDirective
  ],
  styleUrls: ['./navigation.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class Navigation {

  private navItems: Menu[];
  private menuToggle: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer, navigationService: NavigationService) {
    this.navItems = navigationService.getNavItems();
    this.menuToggle = false;
  }

  ngOnInit() {
//console.log('====== loading Navigation componenet =========');
//console.log('navService returned: ', this.navItems);
  }

  toggleMenu(event) {
    this.menuToggle = !this.menuToggle;
  }

}
