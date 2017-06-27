module.exports = {
  'plugins': [
    'fp'
  ],
  'rules': {
    "fp/no-delete": 2,
    "fp/no-let": 2,
    "fp/no-mutating-assign": 2,
    "fp/no-mutation": ["error", {"allowThis": true, "commonjs": true, "exceptions": [{"property": "propTypes"}]}]
  }
};
