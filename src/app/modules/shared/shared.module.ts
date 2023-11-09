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
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatomoOptOutComponent } from './components/matomo-opt-out/matomo-opt-out.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AttributionComponent } from './components/attribution/attribution.component';
import { TableModule } from 'primeng/table';
import { MaintenanceMessageComponent } from './components/maintenance-message/maintenance-message.component';
import { HumanizedDurationPipe } from './pipes/moment/humanized-duration.pipe';
import { MomentToDatePipe } from './pipes/moment/date-conversion.pipe';
import { PluralPipe } from './pipes/plural.pipe';
@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    RepeatingDotsComponent,
    ColorThemeTogglerComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    PageNotFoundComponent,
    MatomoOptOutComponent,
    AttributionComponent,
    MaintenanceMessageComponent,
    HumanizedDurationPipe,
    MomentToDatePipe,
    PluralPipe,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
    SelectButtonModule,
    TooltipModule,
    MenubarModule,
    TableModule,
    DialogModule,
  ],
  exports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatomoOptOutComponent,
    ToastModule,
    TooltipModule,
    LoadingSpinnerComponent,
    ColorThemeTogglerComponent,
    AttributionComponent,
    PageNotFoundComponent,
    HeaderComponent,
    MaintenanceMessageComponent,
    FooterComponent,
    HumanizedDurationPipe,
    MomentToDatePipe,
    PluralPipe,
  ],
})
export class SharedModule {}
