import { Injectable } from '@angular/core';

import { HeaderService } from '../@header';
import { ContentService } from '../@content';
import { MenuService } from '../@menu';

import { ICoreModuleService } from './core.types';

@Injectable({
  providedIn: 'root'
})
export class CoreService implements ICoreModuleService {

  constructor(
    private headerService: HeaderService,
    private menuService: MenuService,
    private contentService: ContentService
  ) { }

  appOnInit(): void {
    // // menu
    // this.menuService.isMenuVisible.subscribe(isVisible => console.log('menuService.isHeaderVisible', isVisible));

    // content

    // header
    // if menu is open, close it
    this.headerService.menuButtonClicked.subscribe(clickCount => {
      console.log('clicky');
      this.menuService.openMenu();
    });
  }
}
