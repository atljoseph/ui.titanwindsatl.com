import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core.routing';

import { ModalModule } from '../@modal';
import { MenuModule } from '../@menu';
import { HeaderModule } from '../@header';
import { ContentModule } from '../@content';
import { FeaturesModule } from '../@features';

import { CoreService } from './core.service';
import { LogService } from './log.service';
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
    ModalModule,
    ContentModule,
    MenuModule,
    FeaturesModule,
  ],
  exports: [
    CoreComponent
  ],
  providers: [
    CoreService,
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: LogService) => {
        // console.log(instance, FullScreenService);
        return () => instance.appOnInit();
      },
      deps: [LogService],
      multi: true
    },
  ],
})
export class CoreModule { }
