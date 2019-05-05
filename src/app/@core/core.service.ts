import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { HeaderService } from '../@header';
import { ContentService } from '../@content';
import { MenuService } from '../@menu';
import { ModalService } from '../@modal';
import { LogService } from './log.service';
import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private headerService: HeaderService,
    private menuService: MenuService,
    private contentService: ContentService,
    private modalService: ModalService,
    private router: Router,
    private log: LogService,
    private seoService: SeoService
  ) { 
    // core service ties it all together ...
    this.log.info('Hello from CoreService', 'CoreService.ctor()', event);

    // header
    this.headerService.menuButtonClicked.subscribe(clickCount => {
      // if header's menu button is clicked, open the menu
        this.log.info('headerService.menuButtonClicked.subscribe()', 'CoreService - menuService.openMenu()', event);
        this.menuService.openMenu();
    });
     this.headerService.isHeaderVisible.subscribe(isVisible => {
      this.log.info('headerService.isHeaderVisible.subscribe()', 'CoreService', isVisible);
    });

    // menu
    this.menuService.isMenuVisible.subscribe(isVisible => {
        this.log.info('menuService.isMenuVisible.subscribe()', 'CoreService', isVisible);
    });

    // modal
    this.modalService.isModalVisible.subscribe(isVisible => {
      this.log.info('modalService.isModalVisible.subscribe()', 'CoreService', isVisible);
    });
    this.modalService.modalAfterClosedResult.subscribe(result => {
      this.log.info('modalService.isModalVisible.subscribe()', 'ModalService', result);
    });
    
    // router 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // close the menu when router NavigationStart fires
        this.log.info('NavigationStart', 'CoreService - menuService.closeMenu()', event);
        this.menuService.closeMenu();
      }
    });

  }
}
