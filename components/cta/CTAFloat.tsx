"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function CTAFloat() {
  const [hovered, setHovered] = useState<null | "phone" | "email" | "wechat">(null);

  const track = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", label, {
        event_category: "cta",
        event_label: `float_${label}`,
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* 电话 */}
      {/* <div
        className="relative"
        onMouseEnter={() => setHovered("phone")}
        onMouseLeave={() => setHovered(null)}
      >
        <a
          href="tel:+86-135-5379-6071"
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all transform hover:scale-110"
          aria-label="拨打电话"
          onMouseEnter={() => track("phone_hover")}
        >
          <Phone className="w-6 h-6" />
        </a>
        {hovered === "phone" && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            电话：135-5379-6071
          </div>
        )}
      </div> */}

      {/* 微信 */}
      <div
        className="relative "
        onMouseEnter={() => setHovered("wechat")}
        onMouseLeave={() => setHovered(null)}
      >
        <button
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
          aria-label="微信咨询"
          onMouseEnter={() => track("wechat_hover")}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        {hovered === "wechat" && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 text-sm p-3 rounded-lg shadow-xl border border-slate-100 w-52 -mt-20">
            <div className="text-center font-medium mb-2">扫码添加微信</div>
            <div className="w-full flex justify-center">
              <img
                src="/wx2.jpg"
                alt="微信二维码"
                className="w-36 h-36 object-contain rounded "
              />
            </div>
          </div>
        )}
      </div>

      {/* 邮件 */}
      <div
        className="relative "
        onMouseEnter={() => setHovered("email")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* <a
          href="mailto:yellowhao68@gmail.com"
          className="bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all transform hover:scale-110"
          aria-label="发送邮件"
          onMouseEnter={() => track("email_hover")}
        >
          <Mail className="w-6 h-6" />
        </a>
        {hovered === "email" && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            邮箱：yellowhao68@gmail.com
          </div>
        )} */}
      </div>
    </div>
  );
}

