import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    https: false,
    host: true,
    strictPort: true,
    port: 4173,
  },
  plugins: [sveltekit()],
});
