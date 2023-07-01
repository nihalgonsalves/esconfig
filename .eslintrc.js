// @ts-check

/** @type import('eslint-define-config').ESLintConfig */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    project: './**/tsconfig*.json',
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:import/typescript',
  ],
  rules: require('./eslint-rules-base'),
};
