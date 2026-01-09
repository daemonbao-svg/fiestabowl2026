// Google Tag Manager and Analytics tracking

declare global {
    interface Window {
        dataLayer: any[]
        gtag: (...args: any[]) => void
    }
}

/**
 * Send event to server-side tracking API
 */
async function trackToServer(type: string, data: any) {
    try {
        await fetch('/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type,
                ...data,
            }),
        })
    } catch (error) {
        console.error('Failed to send tracking event:', error)
    }
}

// Track affiliate link clicks
export function trackAffiliateClick(
    slug: string,
    category: 'tickets' | 'streaming' | 'accommodation' | 'parking' | 'merchandise',
    label?: string
) {
    // 1. Client-side GTM tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'affiliate_click',
            affiliate_slug: slug,
            category: category,
            label: label || slug,
            timestamp: new Date().toISOString(),
        })
    }

    // 2. Server-side Supabase tracking (fire and forget)
    trackToServer('click', {
        slug,
        category,
        source: label || 'client_click',
    })
}

// Track page views
export function trackPageView(url: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'page_view',
            page_url: url,
            timestamp: new Date().toISOString(),
        })
    }

    // Server-side tracking
    trackToServer('pageview', {
        page_url: url,
        session_id: typeof crypto !== 'undefined' ? crypto.randomUUID() : undefined, // Simple session ID for now
    })
}

// Track custom events
export function trackEvent(
    eventName: string,
    eventParams?: Record<string, any>
) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...eventParams,
            timestamp: new Date().toISOString(),
        })
    }

    // Optional: could track generic events to server if schema supports it
}

// Track conversion (when user clicks through to affiliate)
export function trackConversion(
    slug: string,
    value?: number
) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'conversion',
            affiliate_slug: slug,
            value: value,
            timestamp: new Date().toISOString(),
        })
    }
}

// Track user engagement
export function trackEngagement(
    action: string,
    category: string,
    label?: string
) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'user_engagement',
            action: action,
            category: category,
            label: label,
            timestamp: new Date().toISOString(),
        })
    }
}
