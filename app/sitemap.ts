import { MetadataRoute } from "next";
import { getPosts } from "@/lib/mdx";
import { getServices } from "@/lib/mdx";
import { getCountries } from "@/lib/mdx";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const services = getServices();
  const countries = getCountries();

  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/countries`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const countryRoutes = countries.map((country) => ({
    url: `${siteUrl}/countries/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...countryRoutes, ...blogRoutes];
}

