import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from '../@footer';

import { ContentService } from './content.service';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    FooterModule
  ],
  providers: [
    ContentService
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
