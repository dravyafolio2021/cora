export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://heycora-ai-cora-dashboard.vercel.app";

// Set NEXT_PUBLIC_CORA_APP_URL to the real onboarding page before launch.
// The local fallback keeps every CTA usable while the destination is pending.
export const GET_STARTED_URL = process.env.NEXT_PUBLIC_CORA_APP_URL ?? "/#trial";

// A Beehiiv subscribe URL or a Cora newsletter URL can be connected later
// without changing individual pages.
export const NEWSLETTER_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? "";
