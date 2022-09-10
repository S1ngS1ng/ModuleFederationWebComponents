const { withModuleFederation } = require('@nrwl/angular/module-federation');
const moduleFederationConfig = require('./module-federation.config');

module.exports = withModuleFederation({ ...moduleFederationConfig })
  .then(fromModuleFederation => (config, context) => {
    config = fromModuleFederation(config, context);

    return {
      ...config,
      module: {
        strictExportPresence: true,
        rules: [
          {
            test: /\.html$/,
            use: [{ loader: 'raw-loader' }],
          },
          // Load js files through Babel
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['angularjs-annotate'],
            },
          },
        ],
      },
    };
  });
