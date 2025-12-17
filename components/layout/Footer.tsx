import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-sm">
              专业的国际物流服务商，致力于为中国出口企业提供高效、可靠的跨境物流解决方案。
            </p>
            <img
  src="/wx2.jpg"
  width="140"
  className="mt-5 ml-12"
  alt="微信二维码"
/>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">核心服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/international-express" className="hover:text-white">
                  国际快递
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="hover:text-white">
                  国际空运
                </Link>
              </li>
              <li>
                <Link href="/services/sea-freight" className="hover:text-white">
                  国际海运
                </Link>
              </li>
              <li>
                <Link href="/services/fba-forwarding" className="hover:text-white">
                  FBA 头程
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">国际专线</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/countries/usa" className="hover:text-white">
                  美国专线
                </Link>
              </li>
              <li>
                <Link href="/countries/europe" className="hover:text-white">
                  欧洲专线
                </Link>
              </li>
              <li>
                <Link href="/countries/canada" className="hover:text-white">
                  加拿大专线
                </Link>
              </li>
              <li>
                <Link href="/countries/australia" className="hover:text-white">
                  澳大利亚专线
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>电话：135-5379-6071</li>
              <li>邮箱：yellowhao68@gmail.com</li>
              <li>地址：中国深圳市</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} 深圳时必达国际物流. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}

