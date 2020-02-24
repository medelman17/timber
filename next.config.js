require("dotenv").config();

const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  },
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
  },
  build: {
    env: {
      SENTRY_DSN: process.env.SENTRY_DSN,
      UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
    }
  }
});
