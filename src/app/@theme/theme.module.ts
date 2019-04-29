import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class ThemeModule { }
