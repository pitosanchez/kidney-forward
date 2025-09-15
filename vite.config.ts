import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.NODE_ENV === "development" ? "/" : "/kidney-forward/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: "./index.html",
      output: {
        // Enhanced manual chunk splitting for better caching
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            // Split vendor chunks
            if (id.includes("react")) return "react-vendor";
            if (id.includes("gsap")) return "animations";
            if (id.includes("lucide-react")) return "ui-icons";
            if (id.includes("@anthropic")) return "anthropic";
            // Group remaining vendor code
            return "vendor";
          }
          // Split by route for better code splitting
          if (id.includes("/pages/")) {
            const pageName = id.split("/pages/")[1].split(".")[0];
            return `page-${pageName}`;
          }
        },
        // Asset naming for better caching
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split(".").pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType || "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (extType === "css") {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Enhanced minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Generate source maps only in development
    sourcemap: process.env.NODE_ENV === "development",
    // Report compressed size
    reportCompressedSize: true,
    // CSS code splitting
    cssCodeSplit: true,
    // Asset inlining threshold
    assetsInlineLimit: 4096,
  },
  // Enhanced dependency optimization
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "gsap", "lucide-react"],
    exclude: ["@anthropic-ai/sdk"],
    esbuildOptions: {
      target: "es2020",
    },
  },
  // Enable compression and better caching headers
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    compression: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5175",
        changeOrigin: true,
      },
    },
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  },
  // Preview server configuration
  preview: {
    compression: true,
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  },
});
