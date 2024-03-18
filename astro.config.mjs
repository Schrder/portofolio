import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tomvanderbijll.com",
  scopedStyleStrategy: "class",
  build: {
    target: "safari11"
  }
});
