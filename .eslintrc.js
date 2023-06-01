module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['next', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-empty': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          [`^(${require('module').builtinModules.join('|')})(/|$)`, '^react', '^gatsby', '^@?\\w'],
          ['^components(/.*|$)', '^containers(/.*|$)', '^templates(/.*|$)'],
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
          ['^types(/.*|$)', 'models(.*|$)'],
          ['^styles(/.*|$)'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  ignorePatterns: ['build/*'],
};
