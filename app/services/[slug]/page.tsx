import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import MarkdownContent from "@/components/content/MarkdownContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export async function generateStaticParams() {
  const services = getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return genMeta({
    title: service.frontMatter.title,
    description: service.frontMatter.description,
    path: `/services/${params.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "首页", url: siteUrl },
    { name: "服务", url: `${siteUrl}/services` },
    { name: service.frontMatter.title, url: `${siteUrl}/services/${params.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          name: service.frontMatter.title,
          description: service.frontMatter.description,
          url: `${siteUrl}/services/${params.slug}`,
        })}
      />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <div className="container mx-auto px-4 py-12">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary-600">
            首页
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="text-gray-600 hover:text-primary-600">
            服务
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{service.frontMatter.title}</span>
        </nav>

        <article className="prose max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{service.frontMatter.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.frontMatter.description}</p>

          <div className="prose">
            <MarkdownContent content={service.content} />
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">需要此服务？</h2>
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
