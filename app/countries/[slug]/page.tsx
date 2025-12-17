import { notFound } from "next/navigation";
import { getCountryBySlug, getCountries } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import MarkdownContent from "@/components/content/MarkdownContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export async function generateStaticParams() {
  const countries = getCountries();
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const country = getCountryBySlug(params.slug);
  if (!country) return {};

  return genMeta({
    title: country.frontMatter.title,
    description: country.frontMatter.description,
    path: `/countries/${params.slug}`,
  });
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    notFound();
  }

  const breadcrumbs = [
    { name: "首页", url: siteUrl },
    { name: "国际专线", url: `${siteUrl}/countries` },
    { name: country.frontMatter.title, url: `${siteUrl}/countries/${params.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          name: country.frontMatter.title,
          description: country.frontMatter.description,
          url: `${siteUrl}/countries/${params.slug}`,
        })}
      />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <div className="container mx-auto px-4 py-12">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary-600">
            首页
          </Link>
          <span className="mx-2">/</span>
          <Link href="/countries" className="text-gray-600 hover:text-primary-600">
            国际专线
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{country.frontMatter.title}</span>
        </nav>

        <article className="prose max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{country.frontMatter.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{country.frontMatter.description}</p>

          <div className="prose">
            <MarkdownContent content={country.content} />
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">需要此专线服务？</h2>
            <p className="mb-4">联系我们获取专属方案和报价</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+86-135-5379-6071"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                联系 135-5379-6071
              </a>
              <a
                href="mailto:yellowhao68@gmail.com"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition border-2 border-primary-600"
              >
                发送邮件
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

