import Link from "next/link";
import { getCountries } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "国家专线 | 国际物流服务",
  description: "提供美国、欧洲、加拿大、澳大利亚、英国、中东等国际专线物流服务，专业、快速、可靠。",
  path: "/countries",
});

export default function CountriesPage() {
  const countries = getCountries();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">国际专线</h1>
      <p className="text-xl text-gray-600 mb-12">
        我们提供覆盖全球主要市场的专业物流专线服务
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/countries/${country.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{country.title}</h2>
            <p className="text-gray-600 mb-4">{country.description}</p>
            <span className="text-primary-600 font-semibold">了解更多 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

