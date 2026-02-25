import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Asegúrate de que no haya un "base" extraño aquí
  base: '/', 
  build: {
    outDir: 'dist',
  }
})
