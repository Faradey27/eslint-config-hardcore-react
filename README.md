# eslint-config-hardcore-react

> This package provides React+JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-plugin-fp eslint-config-hardcore-react eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "hardcore-react"` to your .eslintrc
3. If you want, you can override some rules, example
```
  {
    "extends": "hardcore-react",
    "parser": "babel-eslint",
    "rules": {
      "linebreak-style": [0, "unix"],
    },
    "globals": {
      "describe": true,
      "it": true,
      "path": true,
      "ga": true
    }
  }
```

## Based on airbnb config
[airbnb](https://github.com/airbnb/javascript)
