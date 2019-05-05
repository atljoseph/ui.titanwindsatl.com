import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterModule } from '../@footer';
import { SharedModule } from '../@shared';

import { MenuService } from './menu.service';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    FooterModule
  ],
  entryComponents: [
    MenuComponent,
  ],
  providers: [
    MenuService,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
