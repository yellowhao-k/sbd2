import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAFloat from "@/components/cta/CTAFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "国际物流服务 | 专业跨境物流解决方案",
    template: "%s | 国际物流服务",
  },
  description: "专业的国际物流服务商，提供中国到美国、欧洲、加拿大、澳大利亚等国家的快递、空运、海运服务，FBA头程、海外仓、清关一站式服务。",
  keywords: ["国际物流", "跨境物流", "国际快递", "FBA头程", "海外仓", "清关服务"],
  authors: [{ name: "国际物流公司" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.example.com",
    siteName: "国际物流服务",
    title: "国际物流服务 | 专业跨境物流解决方案",
    description: "专业的国际物流服务商，提供中国到全球的物流解决方案",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CTAFloat />
      </body>
    </html>
  );
}

