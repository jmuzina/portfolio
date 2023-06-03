import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from 'src/app/services/view-controller.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'jm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public env = environment;

  constructor(public vcs: ViewControllerService) {}
}
