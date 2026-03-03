import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pavilontechsystems.org";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly" },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" },
    {
      url: `${base}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
    },
    { url: `${base}/terms-of-use`, lastModified: now, changeFrequency: "yearly" },
  ];
}

