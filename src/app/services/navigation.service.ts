import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalSitePresence } from '../classes/external-site-presence.class';
import { environment } from 'src/environments/environment';
import { ConfirmationService } from 'primeng/api';

@Injectable({ providedIn:'root' })
export class NavigationService {
  public devSite: ExternalSitePresence = new ExternalSitePresence({
    label: 'Portfolio (Development build)',
    address: 'https://dev.jmuzina.io',
    icon: 'pi pi-wrench',
    confirmNavigation: {
      header:'Open development build?',
      message: 'Are you sure you want to open the development build?<br><br>The development build is a work-in-progress and not as polished as the main build.',
      acceptLabel: 'I want to see the latest version!',
      rejectLabel: 'I\'ll stick with the main site.',
    },
  });

  public prodSite: ExternalSitePresence = new ExternalSitePresence({
    label: 'Main site',
    address: 'https://jmuzina.io',
    icon: 'pi pi-server',
  });

  public externalSites: ExternalSitePresence[] = [
    new ExternalSitePresence({ label: 'GitHub', address: 'https://github.com/jmuzina', icon: 'pi pi-github' }),
    new ExternalSitePresence({ label: 'LinkedIn', address: 'https://www.linkedin.com/in/julie-muzina-7b0603164', icon: 'pi pi-linkedin' }),
  ];

  private getOtherEnvironment(): ExternalSitePresence {
    if (!environment.production) return this.prodSite;
    return this.devSite;
  }

  private addEnvironmentSwitcher() : void {
    const otherEnv = this.getOtherEnvironment();
    if (!otherEnv) throw new Error('Could not detect alternate environment!');

    this.externalSites.unshift(otherEnv);
  }

  public goHome(): void {
    this._router.navigateByUrl('');
  }

  public onClickSocialIcon(site: ExternalSitePresence): boolean {
    return ExternalSitePresence.PresenceNavigate(site, this._cfs);
  }

  constructor(private _router: Router, private _cfs: ConfirmationService) {
    if (environment.development)
      this.addEnvironmentSwitcher();
  }
}
