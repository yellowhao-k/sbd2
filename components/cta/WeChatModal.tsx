"use client";

import { X } from "lucide-react";

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
            <div className="w-48 h-48 bg-gray-300 flex items-center justify-center text-gray-500">
              {/* 这里放置微信二维码图片 */}
              <p className="text-xs mt-2"><img src="/wx2.jpg"></img></p>
              
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            或直接联系：<a href="tel:+86-135-5379-6071" className="text-primary-600 hover:underline">135-5379-6071</a>
          </p>
        </div>
      </div>
    </div>
  );
}

