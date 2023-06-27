import { MenuItem } from 'primeng/api';
import { ConditionalClassList } from './ConditionalClassList';
import {
  CommandNavigationItemOpts,
  ExternalLinkNavigationItemOpts,
  NavigationItemOpts,
  RouterNavigationItemOpts,
} from '../types/nav-item.type';
import { ViewControllerService } from '../services/view-controller.service';
import { assignEntriesToObject } from '../util/ctor';

export class NavigationItem {
  public key!: string;

  public label!: string;

  public withPadding = false;

  public children: NavigationItem[] = [];

  public disabled = false;

  public active = false;

  public styleClass: ConditionalClassList = new ConditionalClassList();

  public style = {};

  public tooltip?: string;

  public icon?: string;

  public shouldDisable: () => boolean = () => false;

  public updateDisabled() {
    this.disabled = this.shouldDisable();
    if (this.disabled) {
      this.active = false;
    }
    this.children.forEach((child) => child.updateDisabled());
  }

  public activate(): void {
    if (this.children?.length) return;
    ViewControllerService.selectItem(this);
  }

  public toMenuItem(): MenuItem {
    this.updateDisabled();
    const result: MenuItem = {
      label: this.label,
      id: this.key,
      tooltip: this.tooltip,
      command: () => this.activate(),
      icon: this.icon,
      disabled: this.disabled,
      styleClass: this.styleClass.classesAsString(),
      style: this.style,
    };

    if (this.children?.length) {
      result.items = this.children.map((child) => child.toMenuItem());
    }

    return result;
  }

  constructor(opts: NavigationItemOpts) {
    assignEntriesToObject(this, opts);
    this.updateDisabled();
  }
}

export class RouterNavigationItem extends NavigationItem {
  public routerLink!: string;

  public override activate(): void {
    super.activate();
    ViewControllerService.router.navigateByUrl(this.routerLink);
  }

  public override toMenuItem(): MenuItem {
    const item = super.toMenuItem();

    item.routerLink = this.routerLink;

    return item;
  }

  constructor(opts: RouterNavigationItemOpts) {
    super(opts);
    assignEntriesToObject(this, opts);
  }
}

export class CommandNavigationItem extends NavigationItem {
  public activationFn!: () => void;

  public override activate(): void {
    if (!this.activationFn)
      throw new Error(
        `Attempted to activate command navigation item ${this.key} without a configured activationFn.`,
      );
    this.activationFn();
    super.activate();
  }

  constructor(opts: CommandNavigationItemOpts) {
    super(opts);
    assignEntriesToObject(this, opts);
  }
}

export class ExternalLinkNavigationItem extends NavigationItem {
  public href!: string;

  public openInNewTab = false;

  public override activate(): void {
    window.open(this.href, this.openInNewTab ? '_blank' : undefined);
  }

  constructor(opts: ExternalLinkNavigationItemOpts) {
    super(opts);
    assignEntriesToObject(this, opts);
  }
}
