import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Faz o Vite escutar em todas as interfaces de rede
    port: 5173,        // A porta que você deseja usar
  },
})  