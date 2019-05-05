import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { environment } from '../../environments/environment';
import { ICoreModuleService } from './core.types';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SeoService implements ICoreModuleService {

  constructor(
    private log: LogService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.log.info('Hello from SeoService', 'SeoService.ctor()', event);
    const dateFormat = 'YYYY-MM-DD';
    this.metaService.addTags([
      { name: 'description', content: this.baseDescription },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'INDEX, FOLLOW' },
      { name: 'author', content: 'Joseph Gill' },
      { name: 'keywords', content: this.baseKeywords},
      { name: 'date', content: moment().format(dateFormat), scheme: dateFormat },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: this.baseTitle },
      { property: 'og:type', content: "website" },
      { charset: 'UTF-8' }
    ]);
    this.titleService.setTitle(this.baseTitle);
  }

  private get baseTitle(): string {
    return 'Titan Winds | Atlanta, GA';
  }

  private get baseDescription(): string {
    return 'Home of the Titan Winds Woodwind Quintet, Atlanta\'s Premeire Windeavor';
  }

  private get baseKeywords(): string {
    return [
      'music', 
      'classical', 
      'ensemble', 
      'chamblee', 
      'atlanta', 
      'ga', 
      'georgia', 
      'woodwind', 
      'quintet', 
      'bassoon', 
      'flute', 
      'horn', 
      'french horn', 
      'oboe', 
      'clarinet'
    ].join(',');
  }

  appOnInit() {

  }

  setTitle(text: string) {
    if (text) {
      this.titleService.setTitle(text);
    }
  }

  setDescription(text: string) {
    if (text) {
      this.metaService.removeTag('name = "description"');
      this.metaService.addTag({
        name: 'description',
        content: text
      });
    }
  }

  setKeywords(keywords: string[], useBaseKeywords: boolean = true) {
    if (keywords && keywords.length) {
      this.metaService.removeTag('name= "keywords"');
      const keywordsToString = keywords.join(',');
      this.metaService.addTag({
        name: 'keywords',
        content: useBaseKeywords ? `${this.baseKeywords},${keywordsToString}` : keywordsToString
      });
    }
  }

}
