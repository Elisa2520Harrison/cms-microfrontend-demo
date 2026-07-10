import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'admin_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminApp': './src/AdminApp.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3003,
  },

  build: {
    target: 'esnext',
  },
});