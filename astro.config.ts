import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    {
      name: "astro-routing-bug",
      hooks: {
        "astro:config:setup": async ({ injectRoute }) => {
          injectRoute({
            entrypoint: path.join(process.cwd(), "src/pages/blog/[post].astro"),
            pattern: "/es/blog/[post]",
          });
          injectRoute({
            entrypoint: path.join(process.cwd(), "src/pages/blog/[post].astro"),
            pattern: "/fr/blog/[post]",
          });
        },
      },
    },
  ],
});
