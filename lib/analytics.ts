// Google Analytics 和自定义埋点工具

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }
}

export function trackContactFormSubmit(type: "phone" | "email" | "wechat") {
  trackEvent("contact", "form_submit", type);
}

export function trackCTAClick(type: "phone" | "email" | "wechat", location: string) {
  trackEvent("cta", `${type}_click`, location);
}

export function trackBlogView(slug: string, title: string) {
  trackEvent("blog", "view", slug);
}

export function trackServiceView(slug: string, title: string) {
  trackEvent("service", "view", slug);
}

export function trackCountryView(slug: string, title: string) {
  trackEvent("country", "view", slug);
}

