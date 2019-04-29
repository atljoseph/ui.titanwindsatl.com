import { Injectable } from '@angular/core';

import { HeaderService } from '../@header';
import { ContentService } from '../@content';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private headerService: HeaderService,
    private contentService: ContentService
  ) { }
}
