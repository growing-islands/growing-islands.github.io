module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import-name': 'off',
    align: 'off',
    'no-submodule-imports': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'off',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 0,
    'no-restricted-globals': 'off',
    'react/no-array-index-key': 'off',
    // jsxを1行で記述しなくてもよくする
    'react/jsx-one-expression-per-line': 'off',
    // next/linkのchildのaタグの空hrefを許容する
    'jsx-a11y/anchor-is-valid': 'off',
    // import { default as React } from 'react'を必要としないようにする
    'react/react-in-jsx-scope': 'off',
  },
}
