import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';
import { SeoService } from '../../@core/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.headerService.headerTitle.next('Contact Us');
    this.seoService.setTitle('Titan Winds | Contact Us');
    this.seoService.setDescription('Contact us for performance information. Email, Phone, or Contact Form.');
    this.seoService.setKeywords([], true);
  }

  openModal() {
    this.modalService.openMenu();
  }

}
