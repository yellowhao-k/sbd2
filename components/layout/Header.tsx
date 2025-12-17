"use client";

import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import PhoneLink from "@/components/common/PhoneLink";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            深圳时必达国际物流
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              首页
            </Link>
            <Link href="/services" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              服务
            </Link>
            <Link href="/countries" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              国际专线
            </Link>
            <Link href="/blog" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              博客
            </Link>
            
            <Link href="/about" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-900 font-semibold hover:text-primary-600 transition text-base">
              联系
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <PhoneLink
              phoneNumber="+86-135-5379-6071"
              displayNumber="13553796071"
              className="hidden sm:flex items-center space-x-1 text-primary-600 hover:text-primary-700"
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
              <span>13553796071</span>
            </PhoneLink>
            <a
              href="mailto:yellowhao68@gmail.com"
              className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-primary-600"
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
            <button
              className="md:hidden text-gray-700 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/services"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                服务
              </Link>
              <Link
                href="/countries"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                国际专线
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                博客
              </Link>
              
              <Link
                href="/about"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 font-semibold hover:text-primary-600 transition px-2 py-2 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <PhoneLink
                  phoneNumber="+86-135-5379-6071"
                  displayNumber="13553796071"
                  className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 px-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "phone_click", {
                        event_category: "contact",
                        event_label: "header_phone_mobile",
                      });
                    }
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>13553796071</span>
                </PhoneLink>
                <a
                  href="mailto:yellowhao68@gmail.com"
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "email_click", {
                        event_category: "contact",
                        event_label: "header_email_mobile",
                      });
                    }
                  }}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
