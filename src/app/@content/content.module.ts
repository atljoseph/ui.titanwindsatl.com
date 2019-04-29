import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content.routing';

import { ContentService } from './content.service';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  providers: [
    ContentService
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
