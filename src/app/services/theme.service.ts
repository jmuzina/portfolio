import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GenericService } from './generic.service';
import { IColorTheme } from '../interfaces/ColorTheme';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService extends GenericService {
  lightTheme: IColorTheme = {
    code: 'light-purple',
    supportingCode: 'primeng-lara-light-purple',
    label: 'Light Purple',
    icon: 'pi pi-sun',
  };

  darkTheme: IColorTheme = {
    code: 'dark-purple',
    supportingCode: 'primeng-lara-dark-purple',
    label: 'Dark Purple',
    icon: 'pi pi-moon',
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _bss: BrowserStorageService,
  ) {
    super();
  }

  get themes(): IColorTheme[] {
    return [this.lightTheme, this.darkTheme];
  }

  private _activeTheme!: IColorTheme;

  get activeTheme(): IColorTheme {
    return this._activeTheme;
  }

  private set activeTheme(theme: IColorTheme) {
    if (this._activeTheme && theme && this._activeTheme.code === theme.code)
      return;

    const body = this.document.body;
    body.className = `${theme.code}-theme`;

    const supportingLink = this.themeLink('app-theme-supporting');
    if (!supportingLink) throw new Error('Could not find theme link DOM node!');

    supportingLink.href = `${theme.supportingCode}.css`;

    this._bss.set('COLOR_THEME', theme.code);
    this._activeTheme = theme;
  }

  get darkMode(): boolean {
    return this._activeTheme && this._activeTheme.code === this.darkTheme.code;
  }

  toggleLightDark(): void {
    if (!this._activeTheme)
      throw new Error('No theme was found while trying to toggle themes.');

    if (this.darkMode) this.activeTheme = this.lightTheme;
    else this.activeTheme = this.darkTheme;
  }

  override initialize(): Promise<any> {
    this.loadInitialColorTheme();
    return super.initialize();
  }

  private themeLink(id = 'app-theme-secondary'): HTMLLinkElement {
    return this.document.getElementById(id) as HTMLLinkElement;
  }

  private loadInitialColorTheme(): void {
    if (this._activeTheme)
      throw new Error(
        'Cannot load color theme from cookie after it has already been loaded.',
      );

    const cookieVal = this._bss.get('COLOR_THEME');

    const themeToSet: IColorTheme =
      this.themes.find((theme: IColorTheme) => theme.code === cookieVal) ||
      this.lightTheme;

    if (!themeToSet) throw new Error('Could not find a color theme to use.');

    this.activeTheme = themeToSet;
  }
}
