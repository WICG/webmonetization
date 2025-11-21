import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['**/*.mdx', '**/dist/**', '**/node_modules/**', '**/.astro/**'],
  },
  {
    files: ['**/*.{js,mjs,ts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    files: ['**/specification/**/*.js'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/public/**/*.js'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },
  ...eslintPluginAstro.configs.recommended,
  prettierConfig,
]
