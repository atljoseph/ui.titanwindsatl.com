import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './@core';
import { HeaderModule } from './@header';
import { ContentModule } from './@content';
import { FeaturesModule } from './@features';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HeaderModule,
    ContentModule,
    FeaturesModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
