import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ColorTheme } from 'src/app/classes/color-theme.class';

const COLOR_THEME_COOKIE_KEY = 'jmuzina-portfolio-color-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public lightTheme: ColorTheme =  { code: 'lara-light-purple', label: 'Light Purple', icon: 'pi pi-sun' };

  public darkTheme: ColorTheme = { code: 'lara-dark-purple', label: 'Dark Purple', icon: 'pi pi-moon' };

  public get themes(): ColorTheme[] { return [this.lightTheme, this.darkTheme];}

  private _activeTheme!: ColorTheme;

  public get activeTheme(): ColorTheme { return this._activeTheme; }

  private set activeTheme(theme: ColorTheme) {
    if (this._activeTheme && theme && this._activeTheme.code === theme.code) return;

    const link = this.themeLink;
    if (!link) throw new Error('Could not find theme link DOM node!');

    link.href = `${theme.code}.css`;

    localStorage.setItem(COLOR_THEME_COOKIE_KEY, theme.code);
    this._activeTheme = theme;
  }

  private get themeLink(): HTMLLinkElement {
    return this.document.getElementById('app-theme') as HTMLLinkElement;
  }

  public get darkMode(): boolean { return this._activeTheme && this._activeTheme.code === this.darkTheme.code;}

  public toggleLightDark() : void {
    if (!this._activeTheme) throw new Error('No theme was found while trying to toggle themes.');

    if (this.darkMode) this.activeTheme = this.lightTheme;
    else this.activeTheme = this.darkTheme;
  }


  private loadInitialColorTheme(): void {
    if (this._activeTheme) throw new Error('Cannot load color theme from cookie after it has already been loaded.');

    const cookieVal = localStorage.getItem(COLOR_THEME_COOKIE_KEY);

    // Dark theme is default, as it should be :)
    const themeToSet: ColorTheme = this.themes.find((theme: ColorTheme) => theme.code === cookieVal) || this.darkTheme;

    if (!themeToSet) throw new Error('Could not find a color theme to use.');

    this.activeTheme = themeToSet;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadInitialColorTheme();
  }
}
