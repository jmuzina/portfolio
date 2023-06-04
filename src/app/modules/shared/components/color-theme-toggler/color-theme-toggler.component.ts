import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'jm-color-theme-toggler',
  templateUrl: './color-theme-toggler.component.html',
  styleUrls: ['./color-theme-toggler.component.scss'],
})
export class ColorThemeTogglerComponent {
  constructor(public ths: ThemeService) {}
}
