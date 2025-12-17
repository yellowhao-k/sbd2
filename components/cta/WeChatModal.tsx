"use client";

import { X } from "lucide-react";
import PhoneLink from "@/components/common/PhoneLink";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="关闭"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">扫码添加微信</h3>
          <p className="text-gray-600 mb-6">添加微信咨询，获取专属物流方案</p>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6 flex justify-center">
            <img
              src="/wx2.jpg"
              alt="微信二维码 - 扫码添加微信咨询物流服务"
              className="w-48 h-48 object-contain rounded"
            />
          </div>
          
          <p className="text-sm text-gray-500">
            或直接联系：<PhoneLink phoneNumber="+86-135-5379-6071" displayNumber="135-5379-6071" className="text-primary-600 hover:underline">135-5379-6071</PhoneLink>
          </p>
        </div>
      </div>
    </div>
  );
}

