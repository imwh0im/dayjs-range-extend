module.exports = {
    env: {
        node: true,
        es6: true
    },
    extends: [
        'google',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    'parserOptions': {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
      quotes: ['error', 'single'],
      'sort-imports': 'warn',
      'valid-jsdoc': 'off',
    }
};
