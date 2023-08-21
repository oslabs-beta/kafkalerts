const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [postcssImport(), postcssPresetEnv({ stage: 1 })],
};
