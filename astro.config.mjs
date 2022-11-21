import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://imaginary.rohid.dev",
  markdown: {
    remarkPlugins: [],
  },
  mdx: {
    syntaxHighlight: "prism",
    drafts: true,
  },
  integrations: [tailwind(), sitemap(), mdx()],
});
