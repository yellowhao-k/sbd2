"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 合作公司配置 - 在这里添加或修改合作公司
// 图片应该放在 public/partners/ 目录下
const partners = [
  { name: "合作伙伴1", logo: "/partners/partner1.jpg" },
  { name: "合作伙伴2", logo: "/partners/partner2.jpg" },
  { name: "合作伙伴3", logo: "/partners/partner3.jpg" },
  { name: "合作伙伴4", logo: "/partners/partner4.jpg" },
  { name: "合作伙伴5", logo: "/partners/partner5.jpg" },
  { name: "合作伙伴6", logo: "/partners/partner6.jpg" },
  { name: "合作伙伴7", logo: "/partners/partner7.jpg" },
  { name: "合作伙伴8", logo: "/partners/partner8.jpg" },
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; // 一次显示5个

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // 每次向左移动一个位置
        const nextIndex = prevIndex + 1;
        // 当到达末尾时，重置到开始位置（实现无缝循环）
        if (nextIndex > partners.length - itemsToShow) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // 每3秒滑动一次

    return () => clearInterval(interval);
  }, []);

  // 计算当前显示的合作伙伴（如果数量不足5个，则循环显示）
  const getVisiblePartners = () => {
    const visible: typeof partners = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  const visiblePartners = getVisiblePartners();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          合作伙伴
        </h2>
        <div className="relative overflow-hidden">
          {/* 轮播容器 - 使用transform实现滑动效果 */}
          <div className="flex items-center justify-center gap-6 md:gap-8 transition-transform duration-1000 ease-in-out">
            {visiblePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${currentIndex}-${index}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full transition-all duration-300"
                  onError={(e) => {
                    // 如果图片加载失败，显示占位符
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".placeholder")) {
                      const placeholder = document.createElement("div");
                      placeholder.className =
                        "placeholder text-gray-400 text-xs text-center w-full";
                      placeholder.textContent = partner.name;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* 指示器 */}
          {partners.length > itemsToShow && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: partners.length - itemsToShow + 1 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary-600 w-6"
                        : "bg-gray-300 w-2"
                    }`}
                    aria-label={`跳转到第${index + 1}组合作伙伴`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

