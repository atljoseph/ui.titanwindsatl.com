import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared';
import { FooterModule } from '../@footer';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FooterModule
  ],
  providers: [
    ModalService
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
})
export class ModalModule { }
