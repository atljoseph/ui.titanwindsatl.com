
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
  modalAfterClosedResult: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    public dialogService: MatDialog,
  ) { 
   
  }

  openMenu() {
    this.isModalVisible.next(true);
    // open dialog
    const dialogRef = this.dialogService.open(ModalComponent, {
      panelClass: 'modal-overlay',
      data: { test: 'data' },
      hasBackdrop: false, // if true, shadow AND click off to dismiss
    });
    // listen for the close event, and also result, if any
    dialogRef.afterClosed().subscribe(result => {
      console.log('', result);
      this.modalAfterClosedResult.next(result);
      this.isModalVisible.next(false);
    });
  }
  
}
