import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      className="prose prose-lg md:prose-xl max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700"
      components={{
        // 文中不再需要超大的 H1，统一用次级标题样式即可
        h1: ({ node, ...props }) => (
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 mt-6" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-5 leading-relaxed text-base sm:text-[17px]" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="mb-4 ml-6 list-disc" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="mb-4 ml-6 list-decimal" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="mb-2" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-primary-600 hover:text-primary-700 underline" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

