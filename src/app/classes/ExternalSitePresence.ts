import { ConfirmationService } from 'primeng/api';

export interface IConfirmNavigation {
  header?: string;
  message: string;
  acceptLabel?: string;
  rejectLabel?: string;
  acceptButtonStyleClass?: string;
  rejectButtonStyleClass?: string;
}

export class ExternalSitePresence {
  label!: string;

  address!: string;

  icon?: string;

  styleClass?: string;

  confirmNavigation?: IConfirmNavigation;

  public open() {
    window.open(this.address);
    return false;
  }

  public static PresenceNavigate(presence: ExternalSitePresence, cs: ConfirmationService) : boolean {
    if (presence.confirmNavigation) {
      cs.confirm({
        header: presence.confirmNavigation.header,
        message: presence.confirmNavigation.message,
        acceptLabel: presence.confirmNavigation.acceptLabel || `Yes, open ${presence.label}`,
        rejectLabel: presence.confirmNavigation.rejectLabel || 'No',
        acceptButtonStyleClass: presence.confirmNavigation.acceptButtonStyleClass || 'p-button-warning',
        rejectButtonStyleClass: presence.confirmNavigation.rejectButtonStyleClass || 'p-button-secondary',
        accept: () => presence.open(),
      });
      return false;
    }

    return true;
  }

  constructor(public options: Partial<ExternalSitePresence>) {
    Object.assign(this, options);
  }
}
