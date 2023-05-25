import { Component } from '@angular/core';
import { ViewControllerService } from 'src/app/services/view-controller.service';

@Component({
  selector: 'jm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public get items() {
    return ViewControllerService.menuItems;
  }

  constructor(public vcs: ViewControllerService) {}
}
