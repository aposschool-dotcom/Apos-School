// Meta Pixel helper. Safe to call even when the pixel is not installed yet.
export const trackLead = (contentName: string) => {
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'Lead', { content_name: contentName });
    }
  } catch {
    /* never block the WhatsApp link */
  }
};
