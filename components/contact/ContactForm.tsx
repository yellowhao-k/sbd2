"use client";

export default function ContactForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            姓名 *
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="请输入您的姓名"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            联系电话 *
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="请输入您的联系电话"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="请输入您的邮箱"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            咨询内容 *
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="请描述您的物流需求..."
          />
        </div>
        <button
          className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          onClick={() => {
            alert("表单提交功能需要后端支持。请直接拨打电话或发送邮件联系我们。");
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "form_submit", {
                event_category: "contact",
                event_label: "contact_form",
              });
            }
          }}
        >
          提交咨询
        </button>
      </div>
    </div>
  );
}

