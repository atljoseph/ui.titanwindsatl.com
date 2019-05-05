import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../@shared';

import { HeaderService } from './header.service';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  providers: [
    HeaderService,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
