import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GenericService } from './generic.service';

const SIDEBAR_COLLAPSE_KEY = 'jmuzina-portfolio-sidebar-collapsed';

@Injectable({ providedIn: 'root' })
export class ViewControllerService extends GenericService {
  public menuItems: MenuItem[] = [
    {
      label: environment.appTitle,
      routerLink: '/home',
      icon: 'pi pi-home',
    },
    {
      label: 'Apps',
      icon: 'item-right-side fa fa-light fa-circle-nodes',
      items: [
        {
          label: 'GPX Visualizer',
          icon: 'fa fa-light fa-bicycle',
          tooltip: 'View and save visualizations of your Strava exercises',
          command: () => {
            window.open('https://gpxvis.com');
          },
        },
      ],
    },
  ];

  private _sidebarCollapsed = true;

  public get sidebarCollapsed(): boolean {
    return this._sidebarCollapsed;
  }

  public set sidebarCollapsed(state: boolean) {
    this._sidebarCollapsed = state;
    localStorage.setItem(
      SIDEBAR_COLLAPSE_KEY,
      JSON.stringify(this._sidebarCollapsed)
    );
  }

  public refresh(): void {
    window.location.reload();
  }

  public sidebarInitialize(): void {
    const storedValue = localStorage.getItem(SIDEBAR_COLLAPSE_KEY);
    if (!storedValue?.length) return;

    let initiallyCollapsed = false;

    switch (storedValue) {
      case 'false':
        initiallyCollapsed = false;
        break;
      case 'true':
      default:
        initiallyCollapsed = true;
        break;
    }

    this.sidebarCollapsed = initiallyCollapsed;
  }

  public override initialize(): Promise<any> {
    this.sidebarInitialize();
    return super.initialize();
  }

  constructor(public router: Router) {
    super();
  }
}
