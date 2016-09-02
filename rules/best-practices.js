module.exports = {
  'rules': {
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 2,
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 2,
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 2,
    // http://eslint.org/docs/rules/complexity
    'complexity': [2, 11],
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 2,
    // http://eslint.org/docs/rules/curly
    'curly': [2, 'multi-line'],
    // http://eslint.org/docs/rules/default-case
    'default-case': [2, { 'commentPattern': '^no default$' }],
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [2, { 'allowKeywords': true }],
    // http://eslint.org/docs/rules/dot-location
    'dot-location': 2,
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': [2, 'allow-null'],
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 2,
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 0,
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 2,
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 2,
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 2,
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 2,
    // disallow else after a return in an if
    'no-else-return': 2,
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [2, {
      'allow': [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 2,
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 2,
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 2,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labels for anything other then loops and switches
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [2, {
      'ignore': [],
      'ignoreArrayIndexes': true,
      'enforceConst': true,
      'detectObjects': false,
    }],
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [2, { 'props': true }],
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      2,
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 2,
    // disallow use of void operator
    'no-void': 2,
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [2, 'outside'],
    // require or disallow Yoda conditions
    'yoda': 2
  }
};
