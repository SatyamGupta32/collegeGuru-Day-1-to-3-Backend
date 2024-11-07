import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js}'],  // Only target JavaScript files (you can adjust this as needed)
    languageOptions: {
      ecmaVersion: 2020,  // Use ECMAScript 2020
      globals: globals.node,  // Use Node.js globals
      parserOptions: {
        ecmaVersion: 'latest',  // Latest ECMAScript version
        sourceType: 'module',  // Allow ES module syntax
      },
    },
    rules: {
      ...js.configs.recommended.rules,  // Use ESLint's recommended rules for JavaScript
      'no-console': 'warn',  // Warn on console usage (you can adjust or remove this)
      'no-unused-vars': 'warn',  // Warn on unused variables
    },
  },
]
