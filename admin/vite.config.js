import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true
      },
      includeAssets: ['./public/logo512.png', './public/logo192.png', './public/favicon.ico', './public/robots.txt'],
      manifest: {
        "short_name": "Medi Career",
        "name": "Medi Career",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64",
            "type": "image/x-icon"
          },
          {
            "src": "logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "logo180.png",
            "type": "image/png",
            "sizes": "180x180"
          },
          {
            "src": "logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      }
    })
  ]
})
