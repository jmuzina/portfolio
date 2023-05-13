import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'jm-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})

export class SocialIconsComponent {

  constructor(private _cfs: ConfirmationService, public nvs: NavigationService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.nvs.externalSites);
  }
}
