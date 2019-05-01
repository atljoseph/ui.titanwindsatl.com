import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuButton') menuButton: ElementRef;

  constructor(
    public headerService: HeaderService
  ) { }

  ngOnInit() { }

}
