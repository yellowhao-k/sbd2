import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import PhoneLink from "@/components/common/PhoneLink";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export const metadata = genMeta({
  title: "联系我们 | 深圳时必达国际物流",
  description: "联系我们获取专业的国际物流服务咨询和报价。电话：135-5379-6071，邮箱：yellowhao68@gmail.com",
  path: "/contact",
  keywords: [
    "物流公司联系方式",
    "国际物流咨询",
    "深圳物流公司电话",
    "物流服务报价",
    "时必达物流联系方式",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />
      <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">联系我们</h1>
        <p className="text-xl text-gray-600">
          我们随时为您提供专业的物流咨询和服务
        </p>
      </section>

      {/* Contact Methods */}
      <section className="mb-16">
        <ContactCards />
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">在线咨询</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            请填写以下信息，我们会尽快与您联系
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="bg-primary-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">立即联系我们</h2>
        <p className="text-xl mb-6 text-primary-100">
          我们的专业团队随时为您提供物流咨询服务
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

