import { Component } from '@angular/core';
import { ExternalSitesService } from 'src/app/services/external-sites.service';

@Component({
  selector: 'jm-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent {
  constructor(public exss: ExternalSitesService) {}
}
