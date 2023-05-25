import { ConditionalClassList } from '../classes/conditional-class-list.class';
import { NavigationItem } from '../classes/nav-item.class';

export type NavigationItemOpts = {
  key: string;
  label: string;
  withPadding?: boolean;
  children?: NavigationItem[];
  disabled?: boolean;
  active?: boolean;
  styleClass?: ConditionalClassList;
  style?: string;
  tooltip?: string;
  icon?: string;
  shouldDisable?: () => boolean;
};

export type RouterNavigationItemOpts = NavigationItemOpts & {
  routerLink: string;
};

export type CommandNavigationItemOpts = NavigationItemOpts & {
  activationFn: () => void;
};

export type ExternalLinkNavigationItemOpts = NavigationItemOpts & {
  href: string;
  openInNewTab?: boolean;
};
