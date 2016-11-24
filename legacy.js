module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/legacy',
    './rules/node',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {
    "describe": true,
    "it": true,
    "path": true,
    "ga": true
  },
  rules: {}
};
