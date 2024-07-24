module.exports = {
  env: {
      node: true,
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
  ],
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      // Your custom rules
  },
};
