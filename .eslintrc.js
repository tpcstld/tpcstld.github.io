module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': ['error', {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
      },
      pathGroups: [
        {
          pattern: '*.css',
          group: 'index',
          patternOptions: {
            matchBase: true,
          },
          position: 'before',
        },
        {
          pattern: '*.svg',
          group: 'index',
          patternOptions: {
            matchBase: true,
          },
        },
        {
          pattern: '*.pdf',
          group: 'index',
          patternOptions: {
            matchBase: true,
          },
        },
      ],
    }],
  },
};
