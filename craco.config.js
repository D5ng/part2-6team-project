const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
        jsConfigPath: './jsconfig.paths.json',
      },
    },
  ],
};
