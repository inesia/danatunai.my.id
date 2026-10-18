// Facebook / Meta Pixel Helper Functions

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, data);
      console.log(`[Meta Pixel] Event tracked: ${eventName}`, data);
    } catch (e) {
      console.warn("[Meta Pixel] Tracking failed:", e);
    }
  }
};

export const trackLead = (productName?: string, loanAmount?: number | string) => {
  trackEvent("Lead", {
    content_name: productName || "Pinjaman BPKB",
    value: typeof loanAmount === "number" ? loanAmount : undefined,
    currency: "IDR",
    status: "submitted",
  });
};

export const trackContact = (channel: string = "WhatsApp") => {
  trackEvent("Contact", {
    channel: channel,
  });
};
