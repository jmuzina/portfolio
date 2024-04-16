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
  static menuItems: MenuItem[] = [];

  static router: Router;

  static navItems: NavigationItem[] = [
    new RouterNavigationItem({
      key: 'home',
      label: environment.appTitle,
      routerLink: '/home',
      icon: 'pi pi-home',
    }),
    // new NavigationItem({
    //   key: 'apps',
    //   label: 'Apps',
    //   icon: 'item-right-side fa fa-light fa-circle-nodes',
    //   children: [
    //     new ExternalLinkNavigationItem({
    //       key: 'gpxvis',
    //       label: 'GPX Visualizer',
    //       icon: 'fa fa-light fa-bicycle',
    //       tooltip: 'View and save visualizations of your Strava exercises',
    //       href: 'https://gpxvis.com',
    //     }),
    //   ],
    // }),
    new ExternalLinkNavigationItem({
      key: 'linkedin',
      label: 'LinkedIn',
      icon: 'pi pi-linkedin',
      href: 'https://linkedin.com/in/jmuzina',
    }),
    new ExternalLinkNavigationItem({
      key: 'github',
      label: 'Github',
      icon: 'pi pi-github',
      href: 'https://github.com/jmuzina',
    }),
    new ExternalLinkNavigationItem({
      key: 'resume',
      label: 'Resume',
      icon: 'pi pi-file',
      href: `${environment.appUrl}/assets/muzina_julie_resume.pdf`,
      openInNewTab: true,
      tooltip: 'Resume',
      shouldDisable: () => false,
    }),
  ];

  constructor(public routerRef: Router) {
    ViewControllerService.router = routerRef;
    ViewControllerService.updateItems();
  }

  static updateItems(): void {
    ViewControllerService.menuItems = ViewControllerService.navItems.map(
      (navItem: NavigationItem) => navItem.toMenuItem(),
    );
  }

  static selectItem(itemToSelect: NavigationItem): void {
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

  refresh(): void {
    window.location.reload();
  }
}
