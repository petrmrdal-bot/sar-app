type EventName = 'page_view' | 'waitlist_signup' | 'cta_click';

type EventProperties = Record<string, string | number | boolean | undefined>;

const isDev = process.env.NODE_ENV === 'development';

export function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

function getPlatform(): string {
  if (typeof window === 'undefined') return 'ssr';
  return /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

export function track(event: EventName, properties?: EventProperties) {
  const payload = {
    event,
    properties: {
      ...properties,
      platform: getPlatform(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
    },
  };

  if (isDev) {
    console.log('[track]', payload);
  }

  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}
