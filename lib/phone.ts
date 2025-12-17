/**
 * 处理电话号码点击
 * 在移动设备上使用 tel: 链接，在桌面设备上复制到剪贴板
 */
export function handlePhoneClick(phoneNumber: string, displayNumber?: string) {
  const number = displayNumber || phoneNumber;
  
  // 检测是否为移动设备
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // 移动设备：直接拨打
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // 桌面设备：复制到剪贴板
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    
    // 尝试复制到剪贴板
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cleanNumber).then(() => {
        // 创建临时提示元素
        showCopyNotification(number);
      }).catch(() => {
        // 如果复制失败，显示电话号码
        showCopyNotification(number, true);
      });
    } else {
      // 浏览器不支持 Clipboard API，显示电话号码
      showCopyNotification(number, true);
    }
  }
}

/**
 * 显示复制通知
 */
function showCopyNotification(number: string, showNumberOnly = false) {
  // 移除已存在的通知
  const existing = document.getElementById('phone-copy-notification');
  if (existing) {
    existing.remove();
  }

  // 创建通知元素
  const notification = document.createElement('div');
  notification.id = 'phone-copy-notification';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #0284c7;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    font-size: 14px;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.textContent = showNumberOnly 
    ? `电话号码：${number}` 
    : `电话号码 ${number} 已复制到剪贴板`;
  
  // 添加动画样式（如果还没有）
  if (!document.getElementById('phone-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'phone-notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // 3秒后自动移除
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

/**
 * 获取电话号码的显示格式
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // 移除所有非数字字符（除了+）
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');
  
  // 如果是中国手机号格式 +86-135-5379-6071，格式化为 135-5379-6071
  if (cleaned.startsWith('+86')) {
    const number = cleaned.substring(3);
    if (number.length === 11) {
      return `${number.substring(0, 3)}-${number.substring(3, 7)}-${number.substring(7)}`;
    }
  }
  
  // 默认返回原始格式
  return phoneNumber.replace(/\+86-/g, '');
}

