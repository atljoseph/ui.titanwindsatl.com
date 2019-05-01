import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { HeaderService } from '../@header';
import { ContentService } from '../@content';
import { MenuService } from '../@menu';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private headerService: HeaderService,
    private menuService: MenuService,
    private contentService: ContentService,
    private router: Router,
  ) { 
    // if header's menu button is clicked, open the menu
    this.headerService.menuButtonClicked.subscribe(clickCount => {
      this.menuService.openMenu();
    });

    // router - close the menu when router NavigationStart fires
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        console.log('NavigationStart', event);
        this.menuService.closeMenu();
      }
    });
  }
}
