// @ts-check

/** @type import('eslint-define-config').EslintConfig */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './**/tsconfig*.json',
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:import/typescript',
  ],
  rules: require('./eslint-rules-base'),
};
