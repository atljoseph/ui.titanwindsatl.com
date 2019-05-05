import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'titanwindsatl.com';

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.headerTitleHtml.next('Titan Winds');
  }

  openModal() {
    this.modalService.openMenu();
  }

}
