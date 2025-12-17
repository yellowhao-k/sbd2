import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  const defaultKeywords = [
    "国际物流",
    "跨境物流",
    "国际快递",
    "FBA头程",
    "海外仓",
    "清关服务",
    "深圳物流公司",
    "国际空运",
    "国际海运",
  ];

  return {
    title,
    description,
    keywords: keywords || defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "深圳时必达国际物流",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "zh_CN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深圳时必达国际物流",
    alternateName: "时必达国际物流",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "专业的国际物流服务商，提供中国到全球主要市场的跨境物流解决方案",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-135-5379-6071",
      contactType: "customer service",
      email: "yellowhao68@gmail.com",
      areaServed: ["CN", "US", "GB", "CA", "AU", "EU"],
      availableLanguage: ["Chinese", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "深圳",
      addressCountry: "CN",
    },
    sameAs: [
      // 可以在这里添加社交媒体链接
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "深圳时必达国际物流",
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: "+86-135-5379-6071",
    email: "yellowhao68@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "深圳",
      addressRegion: "广东",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5431",
      longitude: "114.0579",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    servesCuisine: false,
    areaServed: {
      "@type": "Country",
      name: ["中国", "美国", "英国", "加拿大", "澳大利亚", "欧洲"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "深圳时必达国际物流",
    url: siteUrl,
    description: "专业的国际物流服务商，提供中国到全球主要市场的跨境物流解决方案",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "深圳时必达国际物流",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "深圳时必达国际物流",
      url: siteUrl,
      telephone: "+86-135-5379-6071",
    },
    areaServed: {
      "@type": "Country",
      name: ["中国", "美国", "英国", "加拿大", "澳大利亚", "欧洲", "中东"],
    },
    url,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "CNY",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${siteUrl}/og-image.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author || "深圳时必达国际物流",
    },
    publisher: {
      "@type": "Organization",
      name: "深圳时必达国际物流",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

