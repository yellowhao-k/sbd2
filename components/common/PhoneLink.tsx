"use client";

import { handlePhoneClick, formatPhoneNumber } from "@/lib/phone";
import { useState, useEffect } from "react";

interface PhoneLinkProps {
  phoneNumber: string;
  displayNumber?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function PhoneLink({
  phoneNumber,
  displayNumber,
  className = "",
  children,
  onClick,
}: PhoneLinkProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测是否为移动设备
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // 执行自定义 onClick（如果有）
    if (onClick) {
      onClick();
    }
    
    // 处理电话号码点击
    handlePhoneClick(phoneNumber, displayNumber);
  };

  const formattedNumber = displayNumber || formatPhoneNumber(phoneNumber);

  // 如果是移动设备，使用 tel: 链接；否则使用 # 并阻止默认行为
  const href = isMobile ? `tel:${phoneNumber}` : "#";
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={!isMobile ? { cursor: "pointer" } : undefined}
    >
      {children || formattedNumber}
    </a>
  );
}

