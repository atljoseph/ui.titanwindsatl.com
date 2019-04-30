import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MenuComponent } from './menu.component';
import { IMenuModuleService } from './menu.types';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuModuleService {

  isMenuVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);

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
    // open dialog
    const dialogRef = this.dialogService.open(MenuComponent, {
      panelClass: 'menu-overlay',
      data: { test: 'data' },
      hasBackdrop: false, // if true, shadow AND click off to dismiss
      
    });
    // listen for the close event, and also result, if any
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialogRef.afterClosed', result);
      this.isMenuVisible.next(false);
    });
  }
  
}
