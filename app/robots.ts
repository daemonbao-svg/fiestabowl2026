import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/', '/go/'], // Don't index API or Redirect routes
        },
        sitemap: 'https://fiestabowl2026.live/sitemap.xml',
    }
}
