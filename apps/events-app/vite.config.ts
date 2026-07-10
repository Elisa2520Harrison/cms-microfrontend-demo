import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'events_app',
      filename: 'remoteEntry.js',
      exposes: {
        './EventsApp': './src/EventsApp.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3002,
  },

  build: {
    target: 'esnext',
  },
});