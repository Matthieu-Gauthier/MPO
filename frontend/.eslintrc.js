module.exports = {
   env: {
      browser: true,
      commonjs: true,
      es6: true,
      'vue/setup-compiler-macros': true
   },
   extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:vue/essential',
      'plugin:vue/vue3-recommended',
      'plugin:import/recommended',
   ],
   ignorePatterns: [],
   rules: {
      'vue/html-closing-bracket-newline': [
         'error',
         {
            'singleline': 'never',
            'multiline': 'never'
         }
      ],
      'vue/html-indent': [ 'error', 3 ],
      'vue/max-attributes-per-line': [
         'error',
         {
            'multiline': {
               'max': 2
            }
         }
      ],
      'vue/first-attribute-linebreak': [
         'error',
         {
            'singleline': 'ignore',
            'multiline': 'beside'
         }
      ],
      // disable slot vuejs
      'vue/v-slot-style': 'off',
      // vuejs-accessibility
      'vuejs-accessibility/no-onchange': 'off',

      // eslint-plugin-import
      'import/no-self-import': 'error',
      'import/no-deprecated': 'warn',
      'import/extensions': ['warn', 'never'],
      'import/order': ['error', { 'newlines-between': 'always' }],
      'import/newline-after-import': 'error',

      'indent': [ 'error', 3 ],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'max-lines': ['error', {'max': 500, 'skipComments': true, 'skipBlankLines': true }],
      'max-lines-per-function': ['error', {'max': 15, 'skipComments': true, 'skipBlankLines': true }],
      'eqeqeq': 'error',
      'no-var': 'error',
      'no-console': 'error',
      'prefer-const': 'error',
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/html-closing-bracket-spacing': [
         'error',
         {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always',
         },
      ],
      'vue/html-end-tags': ['error'],
      'vue/html-quotes': ['error', 'double'],
      'vue/html-self-closing': ['error'],
      'vue/multiline-html-element-content-newline': [
         'error',
         {
            ignoreWhenEmpty: true,
            allowEmptyLines: false,
         },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-multi-spaces': ['error'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/no-template-shadow': ['error'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/singleline-html-element-content-newline': ['error'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/attributes-order': [
         'error',
         {
            order: [
               'DEFINITION',
               'LIST_RENDERING',
               'CONDITIONALS',
               'RENDER_MODIFIERS',
               'GLOBAL',
               'UNIQUE',
               'TWO_WAY_BINDING',
               'OTHER_DIRECTIVES',
               'OTHER_ATTR',
               'EVENTS',
               'CONTENT',
            ],
         },
      ],
      'vue/this-in-template': ['error', 'never'],
      'vue/valid-v-model': 0,
   },
};
