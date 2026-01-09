import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

import { getRedirectUrl } from '@/lib/affiliateLinks'
import { trackClick } from '@/lib/db/queries'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source')

    try {
        // Get the affiliate redirect URL
        const redirectUrl = getRedirectUrl(slug, source || undefined)

        if (redirectUrl === '#') {
            return NextResponse.json(
                { error: 'Invalid affiliate link' },
                { status: 404 }
            )
        }

        // Track the click in Supabase (don't wait for it to complete)
        const userAgent = request.headers.get('user-agent') || undefined
        const referrer = request.headers.get('referer') || undefined
        const forwardedFor = request.headers.get('x-forwarded-for')
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : undefined

        // Determine category from slug
        let category = 'other'
        if (slug.includes('ticket')) category = 'tickets'
        else if (slug.includes('watch') || slug.includes('fubo') || slug.includes('hulu') || slug.includes('sling')) category = 'streaming'
        else if (slug.includes('vrbo') || slug.includes('hotel') || slug.includes('expedia')) category = 'accommodation'
        else if (slug.includes('parking')) category = 'parking'
        else if (slug.includes('gear') || slug.includes('miami') || slug.includes('olemiss')) category = 'merchandise'

        // Track asynchronously (fire and forget)
        trackClick({
            slug,
            category,
            source: source || undefined,
            user_agent: userAgent,
            referrer,
            ip_address: ipAddress,
        }).catch(error => {
            console.error('Failed to track click:', error)
        })

        // Redirect to affiliate URL
        return NextResponse.redirect(redirectUrl, 302)
    } catch (error) {
        console.error('Redirect error:', error)
        return NextResponse.json(
            { error: 'Redirect failed' },
            { status: 500 }
        )
    }
}
