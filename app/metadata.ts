import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Miami Hurricanes vs Ole Miss | 2026 National Championship Tickets & AI Fan Guide',
    description: 'The definitive AI-powered guide for Miami Hurricanes fans heading to the 2026 National Championship at Hard Rock Stadium. Get tickets, travel info, and live predictions.',
    keywords: [
        'Fiesta Bowl 2026 Winner',
        'Miami Hurricanes National Championship Tickets',
        'Ole Miss vs Miami 2026',
        'Hard Rock Stadium Championship Hotels',
        'Miami Hurricanes AI Predictions',
        'College Football Playoff Final 2026'
    ],
    openGraph: {
        title: 'Miami Hurricanes: Road to the 2026 National Championship',
        description: 'AI-simulated insights, tickets, and travel guide for the 2026 Miami championship run.',
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
        "impact-site-verification": "997fbd4e-025b-4aef-86bd-a8391dc97c4a",
    },
}
