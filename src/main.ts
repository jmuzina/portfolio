import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as Sentry from '@sentry/angular-ivy';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

// Unfortunately this has to be run before Angular has started, so we can't inject the BrowserStorageService.
const trackingOptInDateRaw = localStorage.getItem(
  'JMUZINA_USER_METRICS_OPTED_IN_AT',
);
const consentGrantedAt =
  trackingOptInDateRaw && typeof trackingOptInDateRaw == 'string'
    ? new Date(trackingOptInDateRaw)
    : undefined;

const dataTrackingConsented =
  consentGrantedAt && consentGrantedAt.getTime() <= new Date().getTime();

const sentryOpts: Sentry.BrowserOptions = {
  dsn: 'https://54337f937505bc23282de73adeb7d72f@o4505848151212032.ingest.sentry.io/4505848152719360',
  environment: environment.production ? 'Production' : 'Development',
  enabled: true,
  enableTracing: dataTrackingConsented,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost', /^https:\/\/(dev.)?jmuzina\.io\//],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  autoSessionTracking: dataTrackingConsented,
  // Performance Monitoring
  tracesSampleRate:
    1.0 * (environment.development || environment.local ? 0.5 : 1), // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate:
    1.0 * (environment.development || environment.local ? 1 : 0.2), // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
};

if (!dataTrackingConsented) {
  sentryOpts.tracesSampleRate = 0;
  sentryOpts.replaysSessionSampleRate = 0;
  sentryOpts.replaysOnErrorSampleRate = 0;
  sentryOpts.profilesSampleRate = 0;
  console.info(
    'User not opted into data collection. Sentry replays are disabled.',
  );
} else {
  (sentryOpts.integrations as any[]).push(new Sentry.Replay());
  console.info(
    `User opted into data collection at ${consentGrantedAt?.toISOString()}. Sentry replays are enabled.`,
  );
}

if (environment.production) enableProdMode();

Sentry.init(sentryOpts);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
