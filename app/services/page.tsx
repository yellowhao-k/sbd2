import Link from "next/link";
import { getServices } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "物流服务 | 国际物流服务",
  description: "提供国际快递、空运、海运、FBA头程、海外仓等全方位物流服务，满足不同客户需求。",
  path: "/services",
});

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">物流服务</h1>
      <p className="text-xl text-gray-600 mb-12">
        我们提供全方位的国际物流服务，满足您的各种运输需求
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <span className="text-primary-600 font-semibold">了解更多 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

