import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../@modal/modal.service';
import { HeaderService } from '../../@header/header.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.headerTitleHtml.next('Meet Us');
  }

  openModal() {
    this.modalService.openMenu();
  }

}
