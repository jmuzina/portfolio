import { Injectable } from '@angular/core';
import moment from 'moment/moment';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  constructor(private _bss: BrowserStorageService) {}

  get trackerOptInDate(): moment.Moment | undefined {
    const cookieVal = this._bss.get('USER_METRICS_OPTED_IN_AT');

    const optInDate = moment(cookieVal);
    if (!optInDate.isValid()) return;

    return optInDate;
  }

  set trackerOptInDate(date: moment.Moment | undefined | null) {
    this._bss.set('USER_METRICS_OPTED_IN_AT', date?.toISOString());
    window.location.reload();
  }

  isUserOptedIntoTracking(): boolean {
    const optInDate = this.trackerOptInDate;
    if (!optInDate) return false;
    return (
      optInDate.isValid() && optInDate.unix() <= moment(moment.now()).unix()
    );
  }
}
