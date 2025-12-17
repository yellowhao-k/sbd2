// import Link from "next/link";
// import { generateMetadata as genMeta } from "@/lib/seo";
// import { Package, Plane, Ship, Train, Globe, TrendingUp } from "lucide-react";

// export const metadata = genMeta({
//   title: "热门链接 | 深圳时必达国际物流",
//   description: "查看我们推荐的热门服务和国际专线，包括FBA头程、国际快递、国际空运、美国专线、欧洲专线等热门物流服务。",
//   path: "/hot-links",
//   keywords: [
//     "热门物流服务",
//     "FBA头程",
//     "国际快递",
//     "国际空运",
//     "美国专线",
//     "欧洲专线",
//   ],
// });

// export default function HotLinksPage() {
//   // 热门服务
//   const hotServices = [
//     {
//       name: "FBA头程",
//       description: "专业的FBA头程物流服务，快速送达亚马逊仓库",
//       href: "/services/fba-forwarding",
//       icon: Package,
//       badge: "最热门",
//     },
//     {
//       name: "国际快递",
//       description: "快速、可靠的国际快递服务，覆盖全球主要市场",
//       href: "/services/international-express",
//       icon: Package,
//     },
//     {
//       name: "国际空运",
//       description: "高效的空运物流解决方案，适合紧急货物",
//       href: "/services/air-freight",
//       icon: Plane,
//     },
//     {
//       name: "国际海运",
//       description: "经济实惠的海运服务，适合大批量货物",
//       href: "/services/sea-freight",
//       icon: Ship,
//     },
//     {
//       name: "国际铁路",
//       description: "中欧班列等铁路运输，性价比高",
//       href: "/services/railway-freight",
//       icon: Train,
//     },
//     {
//       name: "清关服务",
//       description: "专业的清关服务，确保货物顺利通关",
//       href: "/services/customs-clearance",
//       icon: Package,
//     },
//   ];

//   // 热门专线
//   const hotCountries = [
//     {
//       name: "美国专线",
//       description: "中国到美国的专业物流专线，快速可靠",
//       href: "/countries/usa",
//       icon: Globe,
//       badge: "最热门",
//     },
//     {
//       name: "欧洲专线",
//       description: "覆盖欧洲主要国家的物流专线服务",
//       href: "/countries/europe",
//       icon: Globe,
//     },
//     {
//       name: "加拿大专线",
//       description: "中国到加拿大的专业物流解决方案",
//       href: "/countries/canada",
//       icon: Globe,
//     },
//     {
//       name: "澳大利亚专线",
//       description: "快速直达澳大利亚的物流专线",
//       href: "/countries/australia",
//       icon: Globe,
//     },
//     {
//       name: "英国专线",
//       description: "中国到英国的专属物流通道",
//       href: "/countries/uk",
//       icon: Globe,
//     },
//     {
//       name: "中东专线",
//       description: "覆盖中东主要市场的物流服务",
//       href: "/countries/middle-east",
//       icon: Globe,
//     },
//   ];

//   // 热门博客文章（可以根据实际情况添加）
//   const hotBlogs = [
//     {
//       name: "中国到美国物流指南",
//       description: "详细介绍中国到美国的物流流程和注意事项",
//       href: "/blog/china-to-usa-logistics-guide",
//     },
//     {
//       name: "FBA头程完整指南",
//       description: "FBA头程物流的完整操作指南和常见问题",
//       href: "/blog/fba-forwarding-complete-guide",
//     },
//     {
//       name: "海运vs空运对比",
//       description: "帮助您选择最适合的运输方式",
//       href: "/blog/sea-freight-vs-air-freight",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Hero Section */}
//       <section className="mb-12 text-center">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <TrendingUp className="w-8 h-8 text-primary-600" />
//           <h1 className="text-4xl font-bold text-gray-900">热门链接</h1>
//         </div>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           为您精选最受欢迎的服务和专线，快速找到您需要的物流解决方案
//         </p>
//       </section>

//       {/* 热门服务 */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
//           <Package className="w-8 h-8 text-primary-600" />
//           热门服务
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hotServices.map((service) => {
//             const Icon = service.icon;
//             return (
//               <Link
//                 key={service.href}
//                 href={service.href}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-200 relative group"
//               >
//                 {service.badge && (
//                   <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                     {service.badge}
//                   </span>
//                 )}
//                 <Icon className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{service.description}</p>
//                 <span className="text-primary-600 font-semibold text-sm group-hover:underline">
//                   了解更多 →
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* 热门专线 */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
//           <Globe className="w-8 h-8 text-primary-600" />
//           热门专线
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hotCountries.map((country) => {
//             const Icon = country.icon;
//             return (
//               <Link
//                 key={country.href}
//                 href={country.href}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-200 relative group"
//               >
//                 {country.badge && (
//                   <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                     {country.badge}
//                   </span>
//                 )}
//                 <Icon className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{country.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{country.description}</p>
//                 <span className="text-primary-600 font-semibold text-sm group-hover:underline">
//                   了解更多 →
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* 热门博客 */}
//       {hotBlogs.length > 0 && (
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
//             <TrendingUp className="w-8 h-8 text-primary-600" />
//             热门文章
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {hotBlogs.map((blog) => (
//               <Link
//                 key={blog.href}
//                 href={blog.href}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-200 group"
//               >
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition">
//                   {blog.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
//                 <span className="text-primary-600 font-semibold text-sm group-hover:underline">
//                   阅读全文 →
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section className="bg-primary-600 text-white rounded-lg p-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">需要更多帮助？</h2>
//         <p className="text-xl mb-6 text-primary-100">
//           我们的专业团队随时为您提供物流咨询服务
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <PhoneLink
//             phoneNumber="+86-135-5379-6071"
//             displayNumber="135-5379-6071"
//             className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
//           >
//             联系 135-5379-6071
//           </PhoneLink>
//           <a
//             href="mailto:yellowhao68@gmail.com"
//             className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition border-2 border-white"
//           >
//             发送邮件
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

