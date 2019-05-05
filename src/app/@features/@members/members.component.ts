import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';
import { SeoService } from '../../@core/seo.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.headerService.headerTitle.next('Meet Us');
    this.seoService.setTitle('Titan Winds | Meet Us');
    this.seoService.setDescription('Read about our "story", and a little about each of our members.');
    this.seoService.setKeywords([], true);
  }

  openModal() {
    this.modalService.openMenu();
  }

}
