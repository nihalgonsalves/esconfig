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
  'func-style': ['error', 'expression'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'never',
    },
  ],
};
