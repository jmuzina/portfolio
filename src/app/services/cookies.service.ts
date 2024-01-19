import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';
import moment from 'moment';
import { environment } from '../../environments/environment';

export type StorageKey = 'JMUZINA_USER_METRICS_DISABLED_AT';

@Injectable({ providedIn: 'root' })
export class CookiesService {
  readonly STORAGE_KEY_AND_TYPE: { [k in StorageKey]: boolean } = {
    JMUZINA_USER_METRICS_DISABLED_AT: true,
  };

  get trackerOptOut(): moment.Moment | undefined {
    const cookieVal = this.get('JMUZINA_USER_METRICS_DISABLED_AT', true);
    if (!cookieVal?.length) return;

    const optOutDate = moment(cookieVal);
    if (!optOutDate.isValid()) return;

    return optOutDate;
  }

  set trackerOptOut(date: moment.Moment | undefined | null) {
    this.set('JMUZINA_USER_METRICS_DISABLED_AT', date?.toISOString(), true);
    window.location.reload();
  }

  isUserOptedOutOfTracking(): boolean {
    const optOutDate = this.trackerOptOut;
    if (!optOutDate) return false;
    return (
      optOutDate.isValid() && optOutDate.unix() <= moment(moment.now()).unix()
    );
  }

  get(key: StorageKey, useLocalStorage = false): string | undefined | null {
    if (!this.validKey(key)) return;

    if (useLocalStorage) return localStorage.getItem(key);

    return Cookies.get(key);
  }

  set(
    key: StorageKey,
    value: string | undefined | null,
    useLocalStorage = false,
  ): void {
    if (!this.validKey(key) || !this.validKeyValue(value))
      return this.remove(key, useLocalStorage);

    if (typeof value === 'string') {
      if (useLocalStorage) {
        localStorage.setItem(key, value);
      } else {
        Cookies.set(key, value, {
          secure: !environment.local,
          sameSite: 'strict',
        });
      }
    }
  }

  remove(key: StorageKey, useLocalStorage = false): void {
    if (!key) return;
    if (useLocalStorage) localStorage.removeItem(key);
    else Cookies.remove(key);
  }

  private validKeyValue(value: string | undefined | null): boolean {
    return !!value?.length;
  }

  private validKey(key: string): boolean {
    return this.validKeyValue(key) && key in this.STORAGE_KEY_AND_TYPE;
  }
}
