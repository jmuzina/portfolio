import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { IImage } from 'src/app/interfaces/Image';
import { ExternalSitesService } from 'src/app/services/external-sites.service';
import { InitializerService } from 'src/app/services/initializer.service';
import { ViewControllerService } from 'src/app/services/view-controller.service';

interface PNFErrOpts {
  image: IImage;
  headerMessage: string;
}

@Component({
  selector: 'jm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  public pnf: PNFErrOpts = {
    headerMessage: 'Page not found',
    image: {
      file: {
        address: '../../../../assets/images/page-not-found.jpg',
      },
      alt_text:
        "I'm giving her all she's got, Captain, but that page can't be found!",
    },
  };

  public err: PNFErrOpts = {
    headerMessage: 'Page not found',
    image: {
      file: {
        address: '../../../../assets/images/error.png',
      },
      alt_text: 'This is fine!!',
    },
  };

  constructor(
    public loc: Location,
    public exss: ExternalSitesService,
    public inits: InitializerService,
    public vcs: ViewControllerService,
  ) {}
}
