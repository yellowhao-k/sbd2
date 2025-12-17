import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/seo";
import { Building2, Users, Award, Target } from "lucide-react";
import PhoneLink from "@/components/common/PhoneLink";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export const metadata = genMeta({
  title: "关于我们 | 深圳时必达国际物流",
  description: "深圳时必达国际物流是一家专业的国际物流服务商，致力于为中国出口企业提供高效、可靠的跨境物流解决方案。",
  path: "/about",
  keywords: [
    "深圳物流公司",
    "国际物流公司",
    "跨境物流服务",
    "时必达国际物流",
    "物流公司介绍",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">关于我们</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            深圳时必达国际物流是一家专业的国际物流服务商，致力于为中国出口企业提供高效、可靠的跨境物流解决方案。
          </p>
          <p className="text-gray-600 mb-4">
            我们拥有丰富的国际物流经验和专业的团队，为客户提供从中国到全球主要市场的全方位物流服务，包括国际快递、空运、海运、FBA头程、海外仓、清关等一站式服务。
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">我们的优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building2 className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">专业团队</h3>
            <p className="text-gray-600">
              拥有多年国际物流经验的专业团队，为客户提供专业的咨询和服务
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">全球网络</h3>
            <p className="text-gray-600">
              覆盖全球主要市场的物流网络，确保货物安全快速到达
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">优质服务</h3>
            <p className="text-gray-600">
              提供一站式物流解决方案，简化客户的操作流程
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">客户至上</h3>
            <p className="text-gray-600">
              以客户需求为中心，提供个性化的物流解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
        <p className="text-lg text-gray-700 mb-4">
          致力于成为中国出口企业最值得信赖的国际物流合作伙伴，通过专业的服务和创新的解决方案，帮助客户在全球市场中取得成功。
        </p>
        <p className="text-lg text-gray-700">
          我们始终坚持以客户为中心的服务理念，不断提升服务质量，优化物流流程，为客户创造更大的价值。
        </p>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">与我们合作</h2>
        <p className="text-xl mb-6 text-primary-100">
          如果您有任何物流需求，欢迎随时联系我们
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PhoneLink
            phoneNumber="+86-135-5379-6071"
            displayNumber="135-5379-6071"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            联系 135-5379-6071
          </PhoneLink>
          <a
            href="mailto:yellowhao68@gmail.com"
            className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white"
          >
            发送邮件
          </a>
        </div>
      </section>
      </div>
    </>
  );
}

