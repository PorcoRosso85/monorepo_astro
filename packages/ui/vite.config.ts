/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.vitest": false,
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});
