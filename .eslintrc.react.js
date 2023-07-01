// @ts-check

/** @type import('eslint-define-config').ESLintConfig */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react'],
  parserOptions: {
    project: './**/tsconfig*.json',
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    ...require('./eslint-rules-base'),
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/react-in-jsx-scope': 'off',
    // Not a problem with TypeScript
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
};
