import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3001,
    proxy:{
      "/api/users":{
        target:"http://localhost:3000/",
        changeOrigin:true,
      }
    }
  }
})
