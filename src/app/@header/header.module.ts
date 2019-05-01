import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme';

import { HeaderService } from './header.service';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ], 
  providers: [
    HeaderService,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
