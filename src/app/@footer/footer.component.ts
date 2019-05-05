import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() showVersionInfo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get versionInfo(): string {
    return `Version ${environment.version}`;
  }

}
