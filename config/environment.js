/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dashboard',
    environment: environment,
    firebase: 'https://avalonstar.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "'self' atv.dev *.avalonstar.tv ws://socket.avalonstar.tv localhost:5000 ws://localhost:5000",
      'img-src': "'self' avalonstar-tv.s3.amazonaws.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *.pusher.com",
      'style-src': "'self' 'unsafe-inline'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.API_HOST = 'http://atv.dev';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://avalonstar.tv'
  }

  // Environment variables.
  ENV.API_BASE = 'http://avalonstar.tv/api';

  return ENV;
};
