import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: '/api/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: '/api/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
                disallow: '/api/',
            },
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
                disallow: '/api/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Perplexity-AI',
                allow: '/',
                disallow: '/api/',
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            }
        ],
        sitemap: 'https://fiestabowl2026.live/sitemap.xml',
    }
}
