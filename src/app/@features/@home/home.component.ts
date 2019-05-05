import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';
import { SeoService } from '../../@core/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'titanwindsatl.com';

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.headerService.headerTitle.next('Titan Winds');
    this.seoService.setTitle('Titan Winds | Home');
    this.seoService.setDescription('Home of the Titan Winds Woodwind Quintet, Atlanta\'s Premeire Windeavor');
    this.seoService.setKeywords([], true);
  }

  openModal() {
    this.modalService.openMenu();
  }

}
