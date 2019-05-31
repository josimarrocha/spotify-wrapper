module.exports = {
  env: {
    //   node: true,
    browser: true
    //   es6: true,
  },
  extends: 'airbnb-base',
  rules: {
    "linebreak-style": 0,
    'no-use-before-define': ["error", { "variables": false }]
  },
  globals: {
    "describe": "writable",
    "it": "writable",
    "beforeEach": "writable",
    "afterEach": "writable",
    "context": "writable"
  }

};
