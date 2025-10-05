import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Today We Grind | Coding, Coffee & Developer Lifestyle",
    short_name: "Today We Grind",
    description:
      "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4b5563",
    icons: [
      {
        src: "/terminal-solid-full.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/kiet-profile-1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/kiet-profile-1.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["developer", "blog", "technology", "lifestyle"],
    lang: "en",
    orientation: "portrait",
  };
}
