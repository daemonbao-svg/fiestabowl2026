import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/go/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web'],
                allow: '/',
            }
        ],
        sitemap: 'https://fiestabowl2026.live/sitemap.xml',
    }
}
