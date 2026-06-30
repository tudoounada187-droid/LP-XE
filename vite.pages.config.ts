import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
  plugins: [tsConfigPaths(), tailwindcss(), react()],
});
