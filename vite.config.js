import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If you're using absolute imports from 'src'
      '@': path.resolve(__dirname, './src'),
      'src': path.resolve(__dirname, './src')
    },
  },
  // Output to the same 'build' directory that CRA used
  build: {
    outDir: 'build',
  }
});