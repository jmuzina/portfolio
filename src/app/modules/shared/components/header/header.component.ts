import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from 'src/app/services/view-controller.service';

@Component({
  selector: 'jm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get items() {
    return ViewControllerService.menuItems;
  }

  ngOnInit(): void {
    ViewControllerService.updateItems();
  }

  constructor(public vcs: ViewControllerService) {}
}
