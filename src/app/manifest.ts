import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PureLife — Ультраконцентрированные гели и порошки",
    short_name: "PureLife",
    description: "Формула чистоты нового поколения. До 80 стирок в одной бутылке.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#FAF8F4",
    icons: [
      {
        src: "/purelife-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/purelife-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/purelife-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
