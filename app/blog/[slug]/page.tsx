import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale/zh-CN";
import { Calendar, User, Tag as TagIcon } from "lucide-react";
import MarkdownContent from "@/components/content/MarkdownContent";
import PhoneLink from "@/components/common/PhoneLink";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return genMeta({
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    path: `/blog/${params.slug}`,
    image: post.frontMatter.image,
    type: "article",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // 推荐文章（排除当前文章，随机取 3 篇）
  const allPosts = getPosts().filter((p) => p.slug !== params.slug);
  const recommendedPosts = allPosts
    .slice() // 复制一份避免修改原数组
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const breadcrumbs = [
    { name: "首页", url: siteUrl },
    { name: "博客", url: `${siteUrl}/blog` },
    { name: post.frontMatter.title, url: `${siteUrl}/blog/${params.slug}` },
  ];

  // 去掉正文内容中的第一个 H1 标题（通常与页面主标题重复）
  // 先去掉开头空白，再移除第一行以 `# ` 开头的标题
  const rawContent = post.content.replace(/^\s+/, "");
  const contentWithoutTitle = rawContent
    .replace(/^# .*\r?\n?/, "") // 删除第一行 H1
    .replace(/^\s+/, ""); // 再次清理多余空行

  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: post.frontMatter.title,
          description: post.frontMatter.description,
          url: `${siteUrl}/blog/${params.slug}`,
          datePublished: post.frontMatter.date,
          author: post.frontMatter.author,
          image: post.frontMatter.image,
        })}
      />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <div className="container mx-auto px-4 py-10">
        <article className="max-w-6xl mx-auto">
          {/* 面包屑 */}
          <nav className="mb-4 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-primary-600">
              首页
            </Link>
            <span className="mx-1.5">/</span>
            <Link href="/blog" className="hover:text-primary-600">
              博客
            </Link>
          </nav>

          {/* 文章主体卡片 */}
          <div className="rounded-3xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-100 px-6 sm:px-10 lg:px-16 py-8 sm:py-10 backdrop-blur-sm">
            {/* 标题 + 基本信息 */}
            <header className="mb-8">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 mb-5" />
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                {post.frontMatter.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
                <div className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.frontMatter.date}>
                    {format(new Date(post.frontMatter.date), "yyyy年MM月dd日", {
                      locale: zhCN,
                    })}
                  </time>
                </div>

                {post.frontMatter.author && (
                  <div className="inline-flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.frontMatter.author}</span>
                  </div>
                )}

                {post.frontMatter.category && (
                  <div className="inline-flex items-center gap-1.5 text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                    <TagIcon className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">
                      {post.frontMatter.category}
                    </span>
                  </div>
                )}
              </div>

              {post.frontMatter.description && (
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {post.frontMatter.description}
                </p>
              )}
            </header>

            {/* 分割线 */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

            {/* 正文内容 */}
            <div className="prose prose-xl max-w-none prose-headings:scroll-mt-24">
              <MarkdownContent content={contentWithoutTitle} />
            </div>

            {/* 标签 */}
            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <section className="mt-10 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-semibold tracking-wide text-slate-500 mb-3">
                  标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.frontMatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* 推荐阅读 */}
            {recommendedPosts.length > 0 && (
              <section className="mt-10 pt-6 border-t border-slate-100">
                <h2 className="text-sm sm:text-base font-semibold text-slate-800 mb-4">
                  推荐阅读
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {recommendedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 hover:border-primary-200 hover:bg-primary-50/40 transition-colors"
                    >
                      <div className="text-[11px] text-slate-500 mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {format(new Date(item.date), "yyyy年MM月dd日", {
                            locale: zhCN,
                          })}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-primary-700 line-clamp-2 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 文末 CTA */}
            <section className="mt-10 mb-2">
              <div className="rounded-2xl bg-slate-900 text-white px-5 py-6 sm:px-7 sm:py-7">
                <h2 className="text-lg sm:text-2xl font-semibold mb-3">
                  想要为这类货物设计最优物流方案？
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-100/90 mb-5 leading-relaxed max-w-2xl">
                  把您的发货城市、目的国家、货物类型（产品类目/是否带电/是否带磁）
                  和预估重量发给我们，帮您快速评估时效、渠道和整体费用区间。
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <PhoneLink
                    phoneNumber="+86-135-5379-6071"
                    displayNumber="135-5379-6071"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-xs sm:text-sm md:text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition"
                  >
                    联系 135-5379-6071 咨询
                  </PhoneLink>
                <a
                  href="mailto:yellowhao68@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-500/60 px-5 py-2.5 text-xs sm:text-sm md:text-base font-semibold text-slate-50 hover:bg-slate-800 transition"
                >
                  发送邮件获取方案
                </a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}

