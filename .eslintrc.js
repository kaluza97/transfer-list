module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:jsx-a11y/strict', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off'
  },
  overrides: [{
    files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.spec.tsx']
  }]
};