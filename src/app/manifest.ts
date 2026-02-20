import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Plumbline MK - Plumbing & Heating Engineers",
    short_name: "Plumbline MK",
    description:
      "Gas Safe registered plumbing and heating engineers in Milton Keynes. Boiler installation, repair, servicing & emergency plumbing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B356D",
    theme_color: "#0B356D",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
