module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'func-names': ['error', 'never'],
    'max-len': ['error', 120],
    'operator-linebreak': ['error', 'before']
  }
}
