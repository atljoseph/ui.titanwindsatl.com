import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { IHeaderModuleService, IHeaderClick } from './header.types';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements IHeaderModuleService {

  isHeaderVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
  menuButtonClicked: Subject<IHeaderClick> = new Subject<IHeaderClick>();
  private menuButtonClickCount: number = 0;

  constructor() { }

  appOnInit(): void { 
    this.isHeaderVisible.subscribe(isVisible => {
      console.log('isHeaderVisible', isVisible);
    });
    this.menuButtonClicked.subscribe(click => {
      console.log('menuButtonClicked', click.current);
    });
  }

  clickMenuButton() {
    this.menuButtonClickCount++;
    this.menuButtonClicked.next({ 
      previous: this.menuButtonClickCount - 1,
      current: this.menuButtonClickCount
    });
  }
}
