import { Component, OnInit, Inject, ViewEncapsulation, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None, // for the "modal" action
})
export class ModalComponent implements OnInit {

  @Input() title: string = 'Modal Dialog';

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close({ test: 'value' });
  }

}
