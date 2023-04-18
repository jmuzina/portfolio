import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
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

  constructor(public nvs: NavigationService) {}
}
