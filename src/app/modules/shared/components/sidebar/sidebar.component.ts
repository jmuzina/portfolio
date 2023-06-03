import { Component } from '@angular/core';
import { ViewControllerService } from 'src/app/services/view-controller.service';

@Component({
  selector: 'jm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public vcs: ViewControllerService) {}
}
