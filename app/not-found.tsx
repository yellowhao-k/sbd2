import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">页面未找到</h2>
      <p className="text-gray-600 mb-8">抱歉，您访问的页面不存在。</p>
      <Link
        href="/"
        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition inline-block"
      >
        返回首页
      </Link>
    </div>
  );
}

