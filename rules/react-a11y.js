module.exports = {
  'plugins': [
    'jsx-a11y',
    'react'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
  },
  'rules': {
    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': 2,

    // Enforce all aria-* props are valid.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 0,

    // Enforce ARIA state and property values are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 2,

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 2,

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 2,

    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 2,

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 2,

    // Prevent use of `accessKey`
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 2,

    // require onBlur instead of onChange
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    'jsx-a11y/no-onchange': 0,

    // Enforce that elements with onClick handlers must be focusable.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-focus.md
    'jsx-a11y/onclick-has-focus': 0,

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 1,

    // Enforce that elements with explicit or implicit roles defined contain
    // only aria-* properties supported by that role.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 1,

    // Enforce tabIndex value is not greater than zero.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 1,
  },
};
