module.exports = {
  'env': {
    'node': true
  },
  'plugins': [
    'import'
  ],
  'rules': {
    // enforce return after a callback
    'callback-return': 2,
    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 0,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 2,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [2, false],
    // disallow use of new operator with the require function
    'no-new-require': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow process.exit()
    'no-process-exit': 2,
    // restrict usage of specified node modules
    'no-restricted-modules': 2,
    // disallow use of synchronous methods (off by default)
    'no-sync': 2,
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [2, { 'commonjs': true }]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};
