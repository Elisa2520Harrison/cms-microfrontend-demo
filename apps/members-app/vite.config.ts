import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'members_app',
      filename: 'remoteEntry.js',
      exposes: {
        './MembersApp': './src/MembersApp.tsx',
      }, 
      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3001,
  },

  build: {
    target: 'esnext',
  },
});