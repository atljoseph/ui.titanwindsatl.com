import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { ICoreModuleService } from './core.types';

@Injectable({
  providedIn: 'root'
})
export class LogService implements ICoreModuleService {

  logHandle: string = 'LogService';

  constructor() {
    this.info(`environment: ${environment.envCode}`, 'LogService.constructor()');
  }

  appOnInit() {
  }

  info(message: string, trace?:string, data?: any, stringify?: boolean) {
    const obj = { trace, message, data: !stringify ? data : JSON.stringify(data, null, 4) };
    if (environment.enableLogging) console.log(obj);
  }

  error(message: string, trace?:string, exception?: any) {
    const obj = { trace, message, exception };
    console.error(obj); // always log errors
  }
}
