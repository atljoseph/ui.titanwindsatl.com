import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { IMenuModuleService } from './menu.types';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuModuleService {

  isMenuVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public dialogService: MatDialog
  ) { 
    this.isMenuVisible.subscribe(isVisible => {
      console.log('isMenuVisible', isVisible);
    });
  }

  appOnInit() {
    
  }

  openMenu() {
    this.isMenuVisible.next(true);
  }

  closeMenu() {
    this.isMenuVisible.next(false);
  }
  
}
