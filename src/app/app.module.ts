import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgxMatomoTrackerModule } from '@ngx-matomo/tracker';
import { NgxMatomoRouterModule } from '@ngx-matomo/router';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ConfirmDialogModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    NgxMatomoRouterModule,
    NgxMatomoTrackerModule.forRoot({ trackerUrl: 'https://matomo.jmuzina.io', siteId: environment.matomoSiteID || '', scriptUrl: 'https://matomo.jmuzina.io/matomo_env.js' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
