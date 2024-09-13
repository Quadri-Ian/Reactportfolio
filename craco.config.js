// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore missing source map warnings for mediapipe
      webpackConfig.ignoreWarnings = [
        (warning) =>
          warning.message.includes('Failed to parse source map') &&
          warning.module.resource.includes('@mediapipe'),
      ];
      return webpackConfig;
    },
  },
};
