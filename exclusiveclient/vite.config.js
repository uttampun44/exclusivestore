import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isProduction = process.env.NODE_ENV == "production";

const url =  isProduction ? 'https://exclusivestore-backend.onrender.com/' : 'http://localhost:8080';


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  "server":{
    host: '0.0.0.0',
    port: '3000',
    proxy: {
      '/api': {
        target: url,
        changeOrigin: true,
      },
    }
  },
})
