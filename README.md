# 国际物流公司官网 + 内容型博客网站

基于 Next.js 14+ (App Router) 构建的国际物流公司官网和内容型博客网站，专注于 Google SEO 优化。

## 项目特点

- ✅ Next.js 14+ App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX 内容系统
- ✅ 完整的 SEO 基建（Metadata、Schema、Sitemap、Robots）
- ✅ 全站 CTA 组件（微信、电话、邮件）
- ✅ 基础埋点系统

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
sbd2/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # 营销页面组
│   ├── services/          # 服务页
│   ├── countries/         # 国家页
│   ├── blog/              # 博客
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── cta/              # CTA 组件
│   ├── layout/           # 布局组件
│   └── seo/              # SEO 组件
├── content/               # MDX 内容
│   ├── services/         # 服务页内容
│   ├── countries/        # 国家页内容
│   └── blog/             # 博客文章
├── lib/                   # 工具函数
│   ├── mdx.ts            # MDX 处理
│   ├── seo.ts            # SEO 工具
│   └── analytics.ts      # 埋点
└── public/               # 静态资源
```

## 内容管理

### 添加服务页

在 `content/services/` 目录下创建 `.mdx` 文件：

```mdx
---
title: 服务名称
description: 服务描述
slug: service-slug
---

# 服务内容
```

### 添加国家页

在 `content/countries/` 目录下创建 `.mdx` 文件：

```mdx
---
title: 国家名称
description: 国家描述
slug: country-slug
---

# 国家内容
```

### 添加博客文章

在 `content/blog/` 目录下创建 `.mdx` 文件：

```mdx
---
title: 文章标题
description: 文章描述
date: 2024-01-01
author: 作者
category: 分类
tags:
  - 标签1
  - 标签2
---

# 文章内容
```

## SEO 配置

### 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_SITE_URL=https://www.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 更新网站信息

在以下文件中更新网站信息：
- `app/layout.tsx` - 网站元数据
- `lib/seo.ts` - SEO 配置
- `components/layout/Header.tsx` - 联系方式
- `components/layout/Footer.tsx` - 公司信息

## CTA 组件

全站浮动 CTA 组件提供：
- 电话拨打
- 微信二维码弹层
- 邮件发送

在 `components/cta/CTAFloat.tsx` 中配置联系方式。

## 埋点系统

基础埋点系统支持：
- 页面浏览追踪
- CTA 点击追踪
- 表单提交追踪

在 `lib/analytics.ts` 中配置 Google Analytics ID。

## 注意事项

1. **微信二维码**：需要替换 `components/cta/WeChatModal.tsx` 中的二维码图片
2. **联系方式**：更新所有页面中的电话和邮箱
3. **网站 URL**：更新环境变量中的网站 URL
4. **Google Analytics**：配置 GA ID 以启用埋点

## 开发路线图

详见 [ROADMAP.md](./ROADMAP.md)

## 许可证

MIT

