import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import ts from 'typescript-eslint'

const config = ts.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  {
    extends: [js.configs.recommended, ...ts.configs.recommended, ...vue.configs['flat/recommended']],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        parser: ts.parser,
      },
      sourceType: 'module',
    },
    rules: {
      // Custom rules
    },
  },
  perfectionist.configs['recommended-natural'],
  prettier,
)

export default config
