import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreService } from './core.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: CoreService) => {
        // console.log(instance, FullScreenService);
        return () => instance.appOnInit();
      },
      deps: [CoreService],
      multi: true
    },
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
