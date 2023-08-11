import { Component } from '@angular/core';
import { ExternalSitesService } from 'src/app/services/external-sites.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'jm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  dev = !environment.production;

  devDisclaimerOpen = false;

  trackingPopupOpen = false;

  attributionVisible = false;

  shouldShowWIPDisclaimer = false;

  constructor(public exss: ExternalSitesService) {}
}
