// @ts-check

/** @type import('eslint-define-config').ESLintConfig */
module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'react'],
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
