'use strict';

const browsers = [
  'last 4 Chrome versions',
  'last 4 Firefox versions',
  'last 2 Safari versions'
];

const isCI = Boolean(process.env.CI);
const isProduction = process.env.EMBER_ENV === 'production';

module.exports = {
  browsers,
};
