import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  optimizeDeps: {
    exclude: ["@shoelace-style/shoelace"] // having an issue with using sl-popup unless I exclude it. Try removing this another time and see if it loads?
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})
