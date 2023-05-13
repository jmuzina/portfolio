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
    {
      label: 'Apps',
      icon: 'item-right-side fa fa-light fa-circle-nodes',
      items: [
        { label: 'GPX Visualizer', icon: 'fa fa-light fa-bicycle', tooltip: 'View and save visualizations of your Strava exercises', command:() => window.open('https://gpxvis.com', '_blank') },
      ],
    },
    {
      label: 'Portfolio is still under construction. More to come soon...',
      icon: 'pi pi-cog',
      disabled: true,
    },
  ];
}
