const { CracoAliasPlugin } = require('react-app-alias');
const SassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: SassResourcesLoader,
      options: {
        resources: './src/shared/styles/global.scss',
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: '.',
        tsconfig: './tsconfig.json',
      },
    },
  ],
};
