"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            深圳时必达国际物流
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              首页
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition">
              服务
            </Link>
            <Link href="/countries" className="text-gray-700 hover:text-primary-600 transition">
              国际专线
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition">
              博客
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+86-135-5379-6071"
              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "phone_click", {
                    event_category: "contact",
                    event_label: "header_phone",
                  });
                }
              }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">13553796071</span>
            </a>
            <a
              href="mailto:yellowhao68@gmail.com"
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "email_click", {
                    event_category: "contact",
                    event_label: "header_email",
                  });
                }
              }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
