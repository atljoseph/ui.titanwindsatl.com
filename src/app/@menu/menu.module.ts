import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuService } from './menu.service';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MenuService
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
