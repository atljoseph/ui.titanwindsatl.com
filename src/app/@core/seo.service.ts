import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { environment } from '../../environments/environment';
import { ICoreModuleService } from './core.types';

@Injectable({
  providedIn: 'root'
})
export class SeoService implements ICoreModuleService {

  constructor(
    private log: LogService
  ) {
    this.log.info('Hello from SeoService', 'SeoService.ctor()', event);
  }

  appOnInit() {
    
  }

  title(text: string) {

  } 

  description(text: string) {

  }

  keywords(text: string) {

  }
  
}
