import { Component } from '@angular/core';
import { ExternalSitePresence } from 'src/app/classes/external-site-presence.class';

@Component({
  selector: 'jm-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})

export class SocialIconsComponent {
  public sites: ExternalSitePresence[] = [
    new ExternalSitePresence({ label: 'Portfolio (Development build)', address: 'https://dev.jmuzina.io', icon: 'pi pi-cog' }),
    new ExternalSitePresence({ label: 'GitHub', address: 'https://github.com/jmuzina', icon: 'pi pi-github' }),
    new ExternalSitePresence({ label: 'LinkedIn', address: 'https://www.linkedin.com/in/joe-muzina-7b0603164', icon: 'pi pi-linkedin' }),
  ];
}
