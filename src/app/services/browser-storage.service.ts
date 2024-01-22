import { Injectable } from '@angular/core';
import Cookies, { CookieAttributes } from 'js-cookie';
import { environment } from '../../environments/environment';

type StorageKey = 'USER_METRICS_OPTED_IN_AT' | 'COLOR_THEME';

const enum StorageDisposition {
  LOCALSTORAGE,
  COOKIE,
}

type StorageDispositionMap = {
  [k in StorageKey]: StorageDisposition;
};

@Injectable({ providedIn: 'root' })
export class BrowserStorageService {
  private readonly _STORAGE_DISPOSITIONS: StorageDispositionMap = {
    USER_METRICS_OPTED_IN_AT: StorageDisposition.LOCALSTORAGE,
    COLOR_THEME: StorageDisposition.LOCALSTORAGE,
  };

  private readonly _KEY_PREFIX = 'JMUZINA'.trim();

  private readonly _KEY_PREFIX_LOWER = this._KEY_PREFIX.toLowerCase();

  private readonly _COOKIKE_ATTRIBUTES: CookieAttributes = {
    secure: !environment.local,
    sameSite: 'strict',
  };

  get(key: StorageKey): string | null {
    if (!this.validKey(key)) return null;

    const translatedKey = this.transformKeyToPrefixForm(key);

    const rawVal: string | undefined | null = this.usesLocalStorage(key) ? localStorage.getItem(translatedKey) : Cookies.get(translatedKey);

    if (!rawVal?.length) return null;

    return rawVal;
  }

  set(key: StorageKey, value: string | undefined | null): void {
    if (!this.validKey(key) || !this.validKeyValue(value))
      return this.remove(key);


    if (typeof value === 'string') {
      const translatedKey = this.transformKeyToPrefixForm(key);
      if (this.usesLocalStorage(key)) {
        localStorage.setItem(translatedKey, value);
      } else {
        Cookies.set(translatedKey, value, this._COOKIKE_ATTRIBUTES);
      }
    }
  }

  remove(key: StorageKey): void {
    if (!key?.length) return;
    const translatedKey = this.transformKeyToPrefixForm(key);
    // Unexpected key given, remove it from all browser storage sites
    if (!this.validKey(key)) {
      localStorage.removeItem(key);
      localStorage.removeItem(translatedKey);
      Cookies.remove(key);
      Cookies.remove(translatedKey, this._COOKIKE_ATTRIBUTES);
    } else {
      if (this.usesLocalStorage(key)) localStorage.removeItem(translatedKey);
      else Cookies.remove(translatedKey);
    }
  }

  // private storageRetrievalFn(key: StorageKey) {
  //   return this.usesLocalStorage(key) ? localStorage.getItem : Cookies.get;
  // }
  //
  // private storageRemovalFn(key: StorageKey) {
  //   return this.usesLocalStorage(key) ? localStorage.removeItem : Cookies.remove;
  // }

  private usesLocalStorage(key: StorageKey) {
    return this._STORAGE_DISPOSITIONS[key] === StorageDisposition.LOCALSTORAGE;
  }

  private validKeyValue(value: string | undefined | null): boolean {
    return !!value?.length && !value.toLowerCase()?.trim().includes(this._KEY_PREFIX.toLowerCase()?.trim());
  }

  private validKey(key: string): boolean {
    return this.validKeyValue(key) && key in this._STORAGE_DISPOSITIONS;
  }

  private transformKeyToPrefixForm(key: string): string {
    return [this._KEY_PREFIX, key].join('_');
  }

  /**
   * Removes the key prefix from a localstorage key name
   * @param key Key to remove the prefix from
   * @returns `key` with `_KEY_PREFIX` removed from it
   * @private
   */
  private transformKeyFromPrefixedForm(key: string): string {
    return key
      .split('_')
      .filter(token => token?.trim()?.toLowerCase() !== this._KEY_PREFIX_LOWER)
      .join('');
  }
}
