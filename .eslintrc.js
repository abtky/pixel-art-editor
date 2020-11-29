module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': ['error', { devDependencies: false }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/ <reference'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
