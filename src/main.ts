import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import { enableProdMode } from '@angular/core';
// import * as Sentry from "@sentry/angular" // for Angular 10/11 instead
import * as Sentry from '@sentry/angular-ivy';

Sentry.init({
  dsn: 'https://54337f937505bc23282de73adeb7d72f@o4505848151212032.ingest.sentry.io/4505848152719360',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/(dev.)?jmuzina\.io\//],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
