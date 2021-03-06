module.exports = {
  "env": {
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],

    // override default options for rules from base configurations
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
    "ignoreComments": false
  }
};