# eslint-config

This package provides JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config eslint-plugin-import eslint`
2. add `"extends": "eslint-config"` to your .eslintrc
