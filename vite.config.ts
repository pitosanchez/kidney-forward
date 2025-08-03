import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.NODE_ENV === "development" ? "/" : "/kidney-forward/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
