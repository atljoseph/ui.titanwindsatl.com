import { Component, OnInit, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MenuService } from './menu.service';
import { trigger, state, style, transition, animate, } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // encapsulation: ViewEncapsulation.None, // for the "modal" action
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
      state('leave', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class MenuComponent implements OnInit {

  animationState: string;

  constructor(
    public menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.isMenuVisible.subscribe(isVisible => {
      this.animationState = isVisible ? 'enter' : 'leave';
    });
  }

}
