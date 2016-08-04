import { Injectable } from '@angular/core';
import { MENU } from '../components/navigation/mock-menu';


@Injectable()
export class NavigationService {

  getNavItems() {
       return MENU;
  }
}
