/// <reference types="vitest" />
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
  plugins: [vanillaExtractPlugin({})],
});
