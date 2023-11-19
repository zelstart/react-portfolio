import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  root: './',
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: 'react-portfolio/index.html', 
    },
  },
};
