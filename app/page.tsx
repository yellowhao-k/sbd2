import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
import { ArrowRight, Package, Plane, Ship, Train, Globe } from "lucide-react";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import PhoneLink from "@/components/common/PhoneLink";

export const metadata = genMeta({
  title: "国际物流服务 | 专业跨境物流解决方案",
  description: "专业的国际物流服务商，提供中国到美国、欧洲、加拿大、澳大利亚等国家的快递、空运、海运服务，FBA头程、海外仓、清关一站式服务。",
  path: "/",
  keywords: [
    "国际物流",
    "跨境物流",
    "国际快递",
    "FBA头程",
    "海外仓",
    "清关服务",
    "深圳物流公司",
    "国际空运",
    "国际海运",
    "中国到美国物流",
    "中国到欧洲物流",
  ],
});

export default function HomePage() {
  const services = [
    {
      name: "国际快递",
      description: "快速、可靠的国际快递服务",
      icon: Package,
      href: "/services/international-express",
    },
    {
      name: "国际空运",
      description: "高效的空运物流解决方案",
      icon: Plane,
      href: "/services/air-freight",
    },
    {
      name: "国际海运",
      description: "经济实惠的海运服务",
      icon: Ship,
      href: "/services/sea-freight",
    },
    {
      name: "国际铁路",
      description: "中欧班列等铁路运输",
      icon: Train,
      href: "/services/railway-freight",
    },
  ];

  const countries = [
    { name: "美国专线", href: "/countries/usa" },
    { name: "欧洲专线", href: "/countries/europe" },
    { name: "加拿大专线", href: "/countries/canada" },
    { name: "澳大利亚专线", href: "/countries/australia" },
    { name: "英国专线", href: "/countries/uk" },
    { name: "中东专线", href: "/countries/middle-east" },
  ];

  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateWebSiteSchema()} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              专业的国际物流服务
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              为中国出口企业及个人卖家提供高效、可靠的跨境物流解决方案，覆盖全球主要市场
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
              >
                查看服务
              </Link>
              <PhoneLink
                phoneNumber="+86-135-5379-6071"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white"
              >
                立即咨询
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-primary-600 flex items-center">
                    了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">国际专线</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center border-2 border-gray-200 hover:border-primary-500"
              >
                <Globe className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold">{country.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <PartnersCarousel />

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要物流服务？</h2>
          <p className="text-xl mb-8 text-primary-100">
            联系我们获取专属物流方案和报价
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PhoneLink
              phoneNumber="+86-135-5379-6071"
              displayNumber="135-5379-6071"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              联系 135-5379-6071
            </PhoneLink>
            <Link
              href="/blog"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white"
            >
              查看物流指南
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

