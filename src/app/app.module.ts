import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { Router } from '@angular/router';
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
import * as Sentry from '@sentry/angular-ivy';

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
  providers: [{
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  }, {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
