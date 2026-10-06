import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://purelife-care.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ru: `${baseUrl}/?lang=ru`,
          uz: `${baseUrl}/?lang=uz`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
  ];
}
