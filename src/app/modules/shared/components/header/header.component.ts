import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'jm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public items: MenuItem[] = [
    { label:environment.appTitle, routerLink:'/', icon: 'pi pi-home' },
  ];
}
