"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import PhoneLink from "@/components/common/PhoneLink";

export default function ContactCards() {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "phone_click", {
        event_category: "contact",
        event_label: "contact_page_phone",
      });
    }
  };

  const handleEmailClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "email_click", {
        event_category: "contact",
        event_label: "contact_page_email",
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <PhoneLink
          phoneNumber="+86-135-5379-6071"
          displayNumber="135-5379-6071"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center cursor-pointer"
          onClick={handlePhoneClick}
        >
          <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">电话咨询</h3>
          <p className="text-gray-600 mb-2">135-5379-6071</p>
          <p className="text-sm text-primary-600">点击拨打</p>
        </PhoneLink>

        <a
          href="mailto:yellowhao68@gmail.com"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
          onClick={handleEmailClick}
        >
          <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">邮件联系</h3>
          <p className="text-gray-600 mb-2">yellowhao68@gmail.com</p>
          <p className="text-sm text-primary-600">发送邮件</p>
        </a>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">公司地址</h3>
          <p className="text-gray-600">深圳市</p>
          <p className="text-gray-600">中国</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">服务时间</h3>
          <p className="text-gray-600">周一至周五</p>
          <p className="text-gray-600">9:00 - 18:00</p>
        </div>
      </div>

      {/* WeChat QR Code Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <MessageCircle className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-semibold">微信咨询</h3>
            </div>
            <p className="text-gray-600 mb-2">扫码添加微信，获取专属物流方案</p>
            <p className="text-gray-600">专业客服在线为您解答</p>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-primary-100">
              <Image
                src="/wx2.jpg"
                alt="微信二维码"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

