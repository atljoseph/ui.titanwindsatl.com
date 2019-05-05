import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core.routing';

import { ModalModule } from '../@modal';
import { MenuModule } from '../@menu';
import { HeaderModule } from '../@header';
import { FooterModule } from '../@footer';
import { ContentModule } from '../@content';
import { FeaturesModule } from '../@features';

import { LogService } from './log.service';
import { CoreService } from './core.service';
import { SeoService } from './seo.service';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreRoutingModule,

    HeaderModule,
    FooterModule,
    ModalModule,
    ContentModule,
    MenuModule,
    FeaturesModule,
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: LogService) => () => instance.appOnInit(),
      deps: [LogService],
      multi: true
    },
    CoreService,
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: SeoService) => () => instance.appOnInit(),
      deps: [SeoService],
      multi: true
    },
  ],
})
export class CoreModule { }
