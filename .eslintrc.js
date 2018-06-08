module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [0],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  },
};
