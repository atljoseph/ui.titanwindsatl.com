import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.headerTitleHtml.next('Contact Us');
  }

  openModal() {
    this.modalService.openMenu();
  }

}
