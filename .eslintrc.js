module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/default-param-last': 'off',
    "@typescript-eslint/no-shadow": "off",
    'react/require-default-props': 'off',
    "no-shadow": "off",
    'import/no-extraneous-dependencies' : 'off',
    "spaced-comment": 'off',
    'react/function-component-definition': [2, {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'}],
    "react/jsx-props-no-spreading": 'off'
  },
};

