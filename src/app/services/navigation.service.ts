import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn:'root' })
export class NavigationService {
  public goHome(): void {
    this._router.navigateByUrl('');
  }


  constructor(private _router: Router) {}
}
