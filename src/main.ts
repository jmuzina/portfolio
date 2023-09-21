import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as Sentry from '@sentry/angular-ivy';
import { environment } from './environments/environment';
import Cookies from 'js-cookie';
import { enableProdMode } from '@angular/core';

const matomoOptOutCookie = Cookies.get('mtm_consent_removed');
const mtmConsentRemoved = (matomoOptOutCookie && typeof(matomoOptOutCookie) == 'string') ? new Date(parseInt(matomoOptOutCookie, 10)) : undefined;
const dataTrackingRevoked = mtmConsentRemoved && mtmConsentRemoved.getTime() < new Date().getTime();
const trackDetailedSentryData = !dataTrackingRevoked;

const sentryOpts: Sentry.BrowserOptions = {
  dsn: 'https://54337f937505bc23282de73adeb7d72f@o4505848151212032.ingest.sentry.io/4505848152719360',
  environment: environment.production ? 'Production' : 'Development',
  enabled: true,
  enableTracing: trackDetailedSentryData,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost', /^https:\/\/(dev.)?jmuzina\.io\//],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  autoSessionTracking: trackDetailedSentryData,
  // Performance Monitoring
  tracesSampleRate: 1.0 * ((environment.development || environment.local) ? 0.5 : 1), // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 1.0 * ((environment.development || environment.local) ? 1 : 0.2), // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
};

if (!trackDetailedSentryData) {
  sentryOpts.tracesSampleRate = 0;
  sentryOpts.replaysSessionSampleRate = 0;
  sentryOpts.replaysOnErrorSampleRate = 0;
  sentryOpts.profilesSampleRate = 0;
  console.info('User has opted out of data collection. Sentry replays are disabled.');
} else {
  (sentryOpts.integrations as any[]).push(new Sentry.Replay());
}

enableProdMode();

Sentry.init(sentryOpts);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
