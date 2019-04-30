import { Component, OnInit } from '@angular/core';
import { ModalService} from '../../@modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'titanwindsatl.com';

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.openMenu();
  }

}
