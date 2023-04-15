import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RepeatingDotsComponent } from './components/repeating-dots/repeating-dots.component';
import { ColorThemeTogglerComponent } from './components/color-theme-toggler/color-theme-toggler.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    RepeatingDotsComponent,
    ColorThemeTogglerComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
    TooltipModule,
    MenubarModule,
  ],
  exports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    LoadingSpinnerComponent,
    ColorThemeTogglerComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
