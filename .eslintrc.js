module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/prop-types": ["off"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "max-len": ["error", { "code": 120 }]
  },
};
