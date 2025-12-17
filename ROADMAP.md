# 国际物流公司官网 + 内容型博客网站 - 开发路线图

## 项目概述
搭建面向中国出口企业的国际物流公司官网，结合内容型博客提升 Google SEO 排名，主要服务翻墙使用 Google 的中国用户。

## 技术栈
- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: MDX (Markdown + React)
- **SEO**: Next.js Metadata API, JSON-LD Schema, Sitemap, Robots.txt
- **分析**: Google Analytics / 自定义埋点

## MVP 范围

### 页面结构
1. **首页** - 公司介绍、核心服务概览、CTA
2. **服务页** (10个)
   - 国际快递服务
   - 国际空运服务
   - 国际海运服务
   - 国际铁路运输
   - 跨境电商物流
   - FBA 头程服务
   - 海外仓服务
   - 清关服务
   - 保险服务
   - 物流咨询
3. **国家页** (6个)
   - 美国物流专线
   - 欧洲物流专线
   - 加拿大物流专线
   - 澳大利亚物流专线
   - 英国物流专线
   - 中东物流专线
4. **博客系统**
   - 博客列表页
   - 文章详情页 (10篇示例文章)
   - 分类/标签页

### SEO 策略
- **多语言支持**: 中文为主，英文为辅（未来扩展）
- **结构化数据**: Organization, Service, Article, BreadcrumbList
- **内容优化**: 长尾关键词、内部链接、外部引用
- **技术 SEO**: 快速加载、移动端优化、语义化 HTML

### 转化策略
- **主要转化**: 微信二维码（弹层）、电话（一键拨打）
- **次要转化**: 邮件咨询表单
- **全站 CTA**: 固定在页面底部/侧边栏

## 开发阶段

### Phase 1: 项目初始化 ✅
- [x] 创建 ROADMAP.md
- [ ] 初始化 Next.js 项目
- [ ] 配置 TypeScript + Tailwind CSS
- [ ] 设置项目目录结构

### Phase 2: 核心功能开发
- [ ] MDX 内容系统集成
- [ ] 路由系统（App Router）
- [ ] 页面组件骨架
- [ ] 布局组件（Header, Footer, Navigation）

### Phase 3: SEO 基建
- [ ] Metadata API 配置
- [ ] JSON-LD Schema 生成
- [ ] 动态 Sitemap 生成
- [ ] Robots.txt 配置
- [ ] Canonical URL 管理

### Phase 4: 内容与组件
- [ ] CTA 组件（微信/电话/邮件）
- [ ] 服务页模板与内容
- [ ] 国家页模板与内容
- [ ] 博客文章系统
- [ ] 示例内容生成

### Phase 5: 数据分析
- [ ] Google Analytics 集成
- [ ] 自定义埋点（点击、表单提交、电话拨打）
- [ ] 转化追踪

### Phase 6: 优化与测试
- [ ] 性能优化
- [ ] SEO 测试
- [ ] 移动端适配
- [ ] 跨浏览器测试

## 目录结构
```
sbd2/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # 营销页面组
│   │   ├── page.tsx       # 首页
│   │   ├── services/      # 服务页
│   │   ├── countries/     # 国家页
│   │   └── blog/          # 博客
│   ├── api/               # API 路由
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
├── public/               # 静态资源
│   ├── images/           # 图片
│   └── wechat-qr.png     # 微信二维码
└── package.json
```

## 内容策略

### 博客文章主题（示例 10 篇）
1. 中国到美国物流全攻略：时效、价格、清关详解
2. 欧洲物流专线选择指南：DDP vs DDU 详解
3. 跨境电商物流成本优化：10 个实用技巧
4. FBA 头程服务完整指南：从中国到亚马逊仓库
5. 国际海运 vs 空运：如何选择最适合的运输方式
6. 加拿大物流清关流程：避免常见问题
7. 澳大利亚物流专线：时效与价格分析
8. 中东物流市场分析：阿联酋、沙特物流指南
9. 国际物流保险：如何保护您的货物
10. 海外仓服务：提升跨境电商效率的关键

### 关键词策略
- 主关键词：国际物流、跨境物流、国际快递、FBA 头程
- 长尾关键词：中国到美国物流、欧洲专线物流、跨境电商物流服务
- 地域关键词：美国物流专线、欧洲物流专线、加拿大物流

## 下一步行动
1. 初始化 Next.js 项目
2. 配置基础依赖
3. 创建页面骨架
4. 实现 SEO 功能
5. 开发 CTA 组件
6. 生成示例内容


