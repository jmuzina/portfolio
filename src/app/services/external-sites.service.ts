import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalSitePresence } from '../classes/ExternalSitePresence';
import { environment } from 'src/environments/environment';
import { ConfirmationService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ExternalSitesService {
  devSite: ExternalSitePresence = new ExternalSitePresence({
    label: 'Portfolio (Development build)',
    address: 'https://dev.jmuzina.io',
    icon: 'pi pi-wrench',
    alt: 'Link to development portfolio site',
    confirmNavigation: {
      header: 'Open development build?',
      message:
        'Are you sure you want to open the development build?<br><br>The development build is a work-in-progress and not as polished as the main build.',
      acceptLabel: 'I want to see the latest version!',
      rejectLabel: "I'll stick with the main site.",
    },
  });

  prodSite: ExternalSitePresence = new ExternalSitePresence({
    label: 'Main site',
    address: 'https://jmuzina.io',
    icon: 'pi pi-server',
    alt: 'Link to production portfolio site',
  });

  externalSites: ExternalSitePresence[] = [
    // new ExternalSitePresence({
    //   label: 'GitHub',
    //   address: 'https://github.com/jmuzina',
    //   icon: 'pi pi-github',
    //   alt: "Link to Julie's GitHub profile",
    //   openInNewTab: true,
    // }),
    // new ExternalSitePresence({
    //   label: 'LinkedIn',
    //   address: 'https://www.linkedin.com/in/jmuzina',
    //   icon: 'pi pi-linkedin',
    //   alt: "Link to Julie's LinkedIn profile",
    //   openInNewTab: true,
    // }),
  ];

  constructor(
    private _router: Router,
    private _cfs: ConfirmationService,
  ) {
    if (environment.development) this.addEnvironmentSwitcher();
  }

  goHome(): void {
    this._router.navigateByUrl('');
  }

  onClickSocialIcon(site: ExternalSitePresence): boolean {
    return ExternalSitePresence.PresenceNavigate(site, this._cfs);
  }

  private getOtherEnvironment(): ExternalSitePresence {
    if (!environment.production) return this.prodSite;
    return this.devSite;
  }

  private addEnvironmentSwitcher(): void {
    const otherEnv = this.getOtherEnvironment();
    if (!otherEnv) throw new Error('Could not detect alternate environment!');

    this.externalSites.unshift(otherEnv);
  }
}
