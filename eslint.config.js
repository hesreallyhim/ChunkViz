import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  // Prettier configuration (must be first to take precedence)
  prettier,
  // Global ignores
  {
    ignores: ['build/**', 'node_modules/**'],
  },
  // React configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ESLint recommended rules
      'no-unused-vars': 'warn',
      'no-undef': 'error',

      // React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // Test files might have different rules
  {
    files: ['**/*.test.{js,jsx}', '**/__tests__/**'],
    rules: {
      // Allow test-specific globals
      'no-unused-vars': 'warn',
    },
  },
  // Config files (like vite.config.js, vitest.config.js)
  {
    files: ['**/*.config.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
