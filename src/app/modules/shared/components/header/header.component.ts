import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'jm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public items: MenuItem[] = [
    { label:'Home', routerLink:'/', icon: 'pi pi-home' },
  ];
}
