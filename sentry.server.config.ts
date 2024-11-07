// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://237dc5eea6011426e90a5f25d8f39f70@o4508259527360512.ingest.us.sentry.io/4508259540926464",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
