module.exports = {
  'env': {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'generators': false,
      'objectLiteralDuplicateProperties': false
    }
  },
  'plugins': [
    'import'
  ],
  'rules': {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': 2,
    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // require trailing commas in multiline object literals
    'comma-dangle': [2, 'always-multiline'],
    // verify super() callings in constructors
    'constructor-super': 2,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 2,
    // disallow modifying variables of class declarations
    'no-class-assign': 2,
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [2, {
      'allowParens': true,
    }],
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 2,
    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 2,
    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 2,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 2,
    // require let or const instead of var
    'no-var': 2,
    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 2,
    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 2,
    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [2, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [2, {
      'allowNamedFunctions': false,
      'allowUnboundThis': true,
    }],
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 2,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 2,
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ["error", {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 2,
    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [2, 'after'],
    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 2,
    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 0,
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [2, 'never'],
    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 2,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 2,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, { 'devDependencies': false }],
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [2, { 'commonjs': true }],
    // do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 2,
    // disallow require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': 2,
    // disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 2,
    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    'import/imports-first': [2, 'absolute-first'],
    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 2,
    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 2,
    // disallow namespace imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 2,
    // warn on accessing default export property names that are also named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 1,
    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 1,
    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [0, {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};