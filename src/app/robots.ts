import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.plumblinemk.co.uk/sitemap.xml",
    host: "https://www.plumblinemk.co.uk",
  };
}

// Note: llms.txt is served from /public/llms.txt at https://www.plumblinemk.co.uk/llms.txt
