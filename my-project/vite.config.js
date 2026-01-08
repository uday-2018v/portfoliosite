import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    build: {
    outDir: 'dist'   // Ensure build folder name
  },
    server: {
    host: '0.0.0.0',  // important! Render ko detect karne ke liye
    port: process.env.PORT || 5173
  }

})
