import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type PreviewServer, type ViteDevServer } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import tailwindcss from '@tailwindcss/vite'

// Match directory-index routing on static hosts in both local Vite servers.
function serveCvDirectory(server: ViteDevServer | PreviewServer) {
  server.middlewares.use((req, _res, next) => {
    if (req.url === '/cv' || req.url?.startsWith('/cv?')) {
      req.url = req.url.replace('/cv', '/cv/index.html');
    }
    next();
  });
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    inspectAttr(), react(), tailwindcss(),
    {
      name: 'cv-directory-route',
      configureServer: serveCvDirectory,
      configurePreviewServer: serveCvDirectory,
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        cv: path.resolve(__dirname, 'cv/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
