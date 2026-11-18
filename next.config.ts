import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Emit blog/index.html etc. so GitHub Pages serves /blog/ and /blog/<slug>/
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
