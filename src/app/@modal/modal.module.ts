import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
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
