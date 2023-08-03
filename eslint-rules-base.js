// @ts-check
/* eslint-env node */

/** @type import('eslint-define-config').Rules */
module.exports = {
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
  'import/order': [
    'error',
    {
      pathGroups: [
        {
          pattern: '@nihalgonsalves/**',
          group: 'internal',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      groups: [
        'builtin',
        'external',
        'internal',
        'unknown',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
      alphabetize: { order: 'asc' },
    },
  ],
  'func-style': ['error', 'expression'],
  'arrow-body-style': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
    },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'never',
    },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    { allowNullableBoolean: true, allowNullableString: true },
  ],
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};
