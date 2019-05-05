import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { IHeaderClick } from './header.types';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerTitleHtml: BehaviorSubject<string> = new BehaviorSubject('');
  isHeaderVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
  menuButtonClicked: Subject<IHeaderClick> = new Subject<IHeaderClick>();
  private menuButtonClickCount: number = 0;

  constructor(
  ) { 
   
  }

  clickMenuButton() {
    this.menuButtonClickCount++;
    this.menuButtonClicked.next({ 
      previous: this.menuButtonClickCount - 1,
      current: this.menuButtonClickCount
    });
  }
}
