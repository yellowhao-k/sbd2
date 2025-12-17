// MDX 内容渲染器
// 由于 Next.js App Router 的 MDX 支持需要特殊配置，这里提供一个简单的 Markdown 渲染方案
// 实际项目中可以使用 react-markdown 或其他 Markdown 渲染库

export function renderMarkdown(content: string): string {
  // 简单的 Markdown 到 HTML 转换
  // 实际项目中应该使用专业的 Markdown 渲染库
  return content
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    .replace(/^\*(.*)\*/gim, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}

