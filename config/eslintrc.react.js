const path = require('path');

module.exports = {
  plugins: ['react-hooks', 'relay', 'jest-dom'],
  extends: ['airbnb', 'react-app', path.resolve(__dirname, 'eslintrc.base.js')],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-console': 'error',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/generated-flow-types': 'off',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
  },
};
