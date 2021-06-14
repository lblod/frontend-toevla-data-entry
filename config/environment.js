'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'frontend-toevla-data-entry',
    environment,
    rootURL: '/',
    locationType: 'auto',
    changeTracker: { trackHasMany: true, auto: true },
    authorizationKind: "on", // for now, anything except for none means we'll do authorization
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      showLinksToManual: false,
      silenceTransferFailureErrors: true
    },
    torii: {
      disableRedirectInitializer: true,
      providers: {
        'acmidm-oauth2': {
          apiKey: '4a28155a-802e-469b-87df-3b2b84f82a9e',
          baseUrl: 'https://authenticatie-ti.vlaanderen.be/op/v1/auth',
          scope: 'openid profile vo abb_toegankelijkvlaanderen',
          redirectUri: 'https://qa.toegankelijk.vlaanderen.be/authorization/callback'// ,
          // logoutUrl: 'https://authenticatie-ti.vlaanderen.be/op/v1/logout'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.authorizationKind = "none";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature

    // set in Dockerfile environment variable
    ENV.authorizationKind = '{{AUTHORIZATION_KIND}}';
  }

  return ENV;
};
