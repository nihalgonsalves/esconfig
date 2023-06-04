// @ts-check

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
  'no-unsafe-optional-chaining': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
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
  // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/3104
  '@typescript-eslint/dot-notation': 'off',
};
