import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme';

import { MenuService } from './menu.service';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  entryComponents: [
    MenuComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: MenuService) => {
        // console.log(instance, FullScreenService);
        return () => instance.appOnInit();
      },
      deps: [MenuService],
      multi: true
    },
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
