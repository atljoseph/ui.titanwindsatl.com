
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isMenuVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    public dialogService: MatDialog
  ) { 
    this.isMenuVisible.subscribe(isVisible => {
      console.log('isMenuVisible', isVisible);
    });
  }

  openMenu() {
    this.isMenuVisible.next(true);
    // open dialog
    const dialogRef = this.dialogService.open(ModalComponent, {
      panelClass: 'modal-overlay',
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
