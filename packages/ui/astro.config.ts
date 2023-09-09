import { defineConfig } from "astro/config";
import { ecsstatic } from "@acab/ecsstatic/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [ecsstatic()],
  },
});
