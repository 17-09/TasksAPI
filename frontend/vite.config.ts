import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-relay', { eagerEsModules: true }]]
      }
    })
  ],
  server: { host: true, port: 5173 }
});