import { MetadataRoute } from "next";
import { getPosts } from "@/lib/mdx";
import { getServices } from "@/lib/mdx";
import { getCountries } from "@/lib/mdx";
import fs from "fs";
import path from "path";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
const contentDirectory = path.join(process.cwd(), "content");

function getFileModificationDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const services = getServices();
  const countries = getCountries();

  // 获取首页修改日期（使用package.json或next.config的修改日期作为参考）
  const rootFiles = [
    path.join(process.cwd(), "app", "page.tsx"),
    path.join(process.cwd(), "package.json"),
  ];
  const homeLastModified = rootFiles
    .map((f) => {
      try {
        return fs.statSync(f).mtime;
      } catch {
        return null;
      }
    })
    .filter((d): d is Date => d !== null)
    .sort((a, b) => b.getTime() - a.getTime())[0] || new Date();

  const routes = [
    {
      url: siteUrl,
      lastModified: homeLastModified,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: getFileModificationDate(
        path.join(process.cwd(), "app", "services", "page.tsx")
      ),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/countries`,
      lastModified: getFileModificationDate(
        path.join(process.cwd(), "app", "countries", "page.tsx")
      ),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: getFileModificationDate(
        path.join(process.cwd(), "app", "blog", "page.tsx")
      ),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: getFileModificationDate(
        path.join(process.cwd(), "app", "about", "page.tsx")
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: getFileModificationDate(
        path.join(process.cwd(), "app", "contact", "page.tsx")
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    
  ];

  const serviceRoutes = services.map((service) => {
    const filePath = path.join(
      contentDirectory,
      "services",
      `${service.slug}.mdx`
    );
    return {
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: getFileModificationDate(filePath),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const countryRoutes = countries.map((country) => {
    const filePath = path.join(
      contentDirectory,
      "countries",
      `${country.slug}.mdx`
    );
    return {
      url: `${siteUrl}/countries/${country.slug}`,
      lastModified: getFileModificationDate(filePath),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const blogRoutes = posts.map((post) => {
    const filePath = path.join(contentDirectory, "blog", `${post.slug}.mdx`);
    const fileDate = getFileModificationDate(filePath);
    const postDate = new Date(post.date);
    // 使用文件修改日期和文章日期的较新者
    const lastModified = fileDate > postDate ? fileDate : postDate;
    return {
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...routes, ...serviceRoutes, ...countryRoutes, ...blogRoutes];
}

