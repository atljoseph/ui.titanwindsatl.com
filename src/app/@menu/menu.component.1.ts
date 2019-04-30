import { Component, OnInit, Inject, ViewEncapsulation, HostBinding } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { MenuService } from './menu.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None, // for the "modal" action
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('enter', style({ transform: 'translateY(0)' })),
      state('leave', style({ transform: 'translateY(-100%)' })),
      transition('* => *', animate('1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class MenuComponent implements OnInit {

  // @HostBinding('@slideIn') slideDown = 'leave';

  constructor(
    // public menuService: MenuService,
    private dialogRef: MatDialogRef<MenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.dialogRef.close({ test: 'value' });
  }

}
