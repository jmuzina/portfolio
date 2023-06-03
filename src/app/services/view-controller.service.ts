import { Injectable } from '@angular/core';
import {
  ExternalLinkNavigationItem,
  NavigationItem,
  RouterNavigationItem,
} from '../classes/NavItem';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ViewControllerService {
  public static menuItems: MenuItem[] = [];

  public static router: Router;

  public static navItems: NavigationItem[] = [
    new RouterNavigationItem({
      key: 'home',
      label: environment.appTitle,
      routerLink: '/home',
      icon: 'pi pi-home',
    }),
    new NavigationItem({
      key: 'apps',
      label: 'Apps',
      icon: 'item-right-side fa fa-light fa-circle-nodes',
      children: [
        new ExternalLinkNavigationItem({
          key: 'gpxvis',
          label: 'GPX Visualizer',
          icon: 'fa fa-light fa-bicycle',
          tooltip: 'View and save visualizations of your Strava exercises',
          href: 'https://gpxvis.com',
        }),
      ],
    }),
    /*     new RouterNavigationItem({
      key: 'resume',
      label: 'Resume',
      icon: 'pi pi-file',
      routerLink: '/resume',
      tooltip: 'Coming soon...',
      shouldDisable: () => false,
    }), */
    new RouterNavigationItem({
      key: 'coming-soon',
      label: 'Portfolio is still under construction. More to come soon...',
      icon: 'pi pi-cog',
      shouldDisable: () => true,
      routerLink: '/coming-soon',
    }),
  ];

  public static updateItems(): void {
    ViewControllerService.menuItems = ViewControllerService.navItems.map(
      (navItem: NavigationItem) => navItem.toMenuItem()
    );
  }

  public static selectItem(itemToSelect: NavigationItem): void {
    itemToSelect.updateDisabled();
    if (itemToSelect.disabled) return;
    ViewControllerService.navItems
      .filter((item) => item.key !== itemToSelect.key)
      .forEach((item) => {
        item.active = false;
      });
    itemToSelect.active = true;
    ViewControllerService.updateItems();
  }

  constructor(public routerRef: Router) {
    ViewControllerService.router = routerRef;
    ViewControllerService.updateItems();
  }
}
