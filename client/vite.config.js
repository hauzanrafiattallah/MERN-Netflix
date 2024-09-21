import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy untuk endpoint /auth di front-end ke /api/auth di back-end
      "/auth": {
        target: "http://localhost:8800", // Base URL untuk back-end
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, "/api/auth"), // Ganti "/auth" menjadi "/api/auth"
      },
      // Proxy untuk endpoint /movies di front-end ke /api/movies di back-end
      "/movies": {
        target: "http://localhost:8800", // Base URL untuk back-end
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/movies/, "/api/movies"), // Ganti "/movies" menjadi "/api/movies"
      },
      // Proxy untuk endpoint /lists di front-end ke /api/lists di back-end
      "/lists": {
        target: "http://localhost:8800", // Base URL untuk back-end
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lists/, "/api/lists"), // Ganti "/lists" menjadi "/api/lists"
      },
    },
  },
});
