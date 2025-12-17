# 合作公司轮播使用说明

## 📁 添加合作公司图片的位置

合作公司的logo图片需要放在以下目录：

```
public/partners/
```

## 📝 如何添加新的合作公司

### 方法1：直接添加图片文件

1. 将合作公司的logo图片保存到 `public/partners/` 目录下
2. 图片命名格式：`partner1.png`, `partner2.png`, `partner3.png` 等
3. 支持的图片格式：`.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`

### 方法2：修改配置文件

编辑 `components/home/PartnersCarousel.tsx` 文件，找到 `partners` 数组：

```typescript
const partners = [
  { name: "合作伙伴1", logo: "/partners/partner1.png" },
  { name: "合作伙伴2", logo: "/partners/partner2.png" },
  { name: "合作伙伴3", logo: "/partners/partner3.png" },
  { name: "合作伙伴4", logo: "/partners/partner4.png" },
  { name: "合作伙伴5", logo: "/partners/partner5.png" },
  // 添加更多合作伙伴
  { name: "合作伙伴6", logo: "/partners/partner6.png" },
];
```

## 🎨 图片要求

- **推荐尺寸**：200x200px 或更大（正方形）
- **文件大小**：建议小于 200KB
- **背景**：建议使用透明背景（PNG格式）或白色背景
- **格式**：PNG（推荐）、JPG、WebP、SVG

## 🔧 自定义设置

在 `PartnersCarousel.tsx` 中可以调整以下设置：

- `itemsToShow`: 一次显示的合作伙伴数量（默认：5）
- 轮播速度：修改 `3000`（毫秒）来调整滑动间隔时间
- 动画效果：修改 `duration-1000` 来调整滑动动画速度

## 📍 轮播位置

轮播组件显示在首页的以下位置：
- 在国际专线部分之后
- 在CTA（行动号召）部分之前

## 💡 提示

- 如果图片加载失败，会自动显示占位符文本
- 图片默认是灰度效果，鼠标悬停时恢复彩色
- 轮播会自动循环播放，每3秒向左滑动一次

