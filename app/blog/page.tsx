import Link from "next/link";
import { getPosts } from "@/lib/mdx";
import { generateMetadata as genMeta } from "@/lib/seo";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale/zh-CN";

export const metadata = genMeta({
  title: "物流博客 | 国际物流知识与指南",
  description: "获取最新的国际物流知识、行业动态和实用指南，帮助您更好地了解跨境物流。",
  path: "/blog",
});

// 一页显示多少篇文章，如需调整只改这里
const PAGE_SIZE = 6;

interface BlogPageProps {
  searchParams?: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getPosts();

  const totalPosts = posts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));

  const currentPageRaw = searchParams?.page ?? "1";
  const currentPageNum = Number.isNaN(Number(currentPageRaw))
    ? 1
    : Math.max(1, Math.min(totalPages, parseInt(currentPageRaw, 10)));

  const startIndex = (currentPageNum - 1) * PAGE_SIZE;
  const paginatedPosts = posts.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">物流博客</h1>
      <p className="text-xl text-gray-600 mb-12">
        获取最新的国际物流知识、行业动态和实用指南
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>
                {format(new Date(post.date), "yyyy年MM月dd日", { locale: zhCN })}
              </span>
              {post.category && (
                <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">
                  {post.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 分页 */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {/* 上一页 */}
          <Link
            href={currentPageNum > 1 ? `/blog?page=${currentPageNum - 1}` : "/blog"}
            aria-disabled={currentPageNum === 1}
            className={`px-3 py-1 rounded border text-sm ${
              currentPageNum === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            上一页
          </Link>

          {/* 中间页码按钮（简单实现：全部展示，文章不多） */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPageNum;

            return (
              <Link
                key={page}
                href={page === 1 ? "/blog" : `/blog?page=${page}`}
                className={`px-3 py-1 rounded border text-sm ${
                  isActive
                    ? "bg-primary-600 text-white border-primary-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            );
          })}

          {/* 下一页 */}
          <Link
            href={
              currentPageNum < totalPages
                ? `/blog?page=${currentPageNum + 1}`
                : currentPageNum === 1
                ? "/blog"
                : `/blog?page=${totalPages}`
            }
            aria-disabled={currentPageNum === totalPages}
            className={`px-3 py-1 rounded border text-sm ${
              currentPageNum === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            下一页
          </Link>
        </div>
      )}
    </div>
  );
}

