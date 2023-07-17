// @ts-check

/** @type import('eslint-define-config').ESLintConfig */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react'],
  parserOptions: {
    project: './**/tsconfig*.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
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
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/no-array-index-key': 'error',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
  },
};
