import { Component } from '@angular/core';
import { ExternalSitesService } from 'src/app/services/external-sites.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'jm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public dev = !environment.production;

  public devDisclaimerOpen = false;

  public trackingPopupOpen = false;

  public attributionVisible = false;

  public shouldShowWIPDisclaimer = true;

  constructor(public exss: ExternalSitesService) {}
}
