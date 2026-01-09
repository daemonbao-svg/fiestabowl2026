import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '2026 Fiesta Bowl: Miami vs Ole Miss Tickets & Fan Guide',
    description: 'Get 2026 Fiesta Bowl tickets (Miami vs Ole Miss), watch the live stream, and find rentals near State Farm Stadium in this ultimate fan guide and travel hub.',
    keywords: ['Fiesta Bowl 2026', 'Miami vs Ole Miss', 'Fiesta Bowl tickets', 'watch Fiesta Bowl live', 'State Farm Stadium parking', 'Vrbo Glendale AZ'],
    openGraph: {
        title: '2026 Fiesta Bowl: Miami vs Ole Miss',
        description: 'Get tickets, travel info, and live stream options for the 2026 Fiesta Bowl.',
        type: 'website',
        locale: 'en_US',
        url: 'https://fiestabowl2026.live',
        siteName: 'Fiesta Bowl 2026 Guide',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Miami Hurricanes vs Ole Miss Rebels - Fiesta Bowl 2026',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Fiesta Bowl: Miami vs Ole Miss',
        description: 'Tickets, travel, and watch options for the big game.',
        images: ['/images/og-image.jpg'],
    },
    metadataBase: new URL('https://fiestabowl2026.live'),
    alternates: {
        canonical: '/',
    },
    verification: {
        google: '在这里输入您的 Google Search Console 验证代码',
    },
    other: {
        "impact-site-verification": "7854510",
    },
}
