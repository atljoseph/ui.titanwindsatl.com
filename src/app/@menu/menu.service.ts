import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isMenuVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public dialogService: MatDialog
  ) { 
    this.isMenuVisible.subscribe(isVisible => {
      console.log('isMenuVisible', isVisible);
    });
  }

  openMenu() {
    this.isMenuVisible.next(true);
  }

  closeMenu() {
    this.isMenuVisible.next(false);
  }
  
}
