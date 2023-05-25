import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalSitesService } from 'src/app/services/external-sites.service';

@Component({
  selector: 'jm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(public loc: Location, public exss: ExternalSitesService) {}
}
