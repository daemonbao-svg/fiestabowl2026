import { NextRequest, NextResponse } from 'next/server'
import { trackClick, trackPageView } from '@/lib/db/queries'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { type, ...data } = body

        // Validate required fields
        if (!type) {
            return NextResponse.json(
                { error: 'Event type is required' },
                { status: 400 }
            )
        }

        // Get request metadata
        const userAgent = request.headers.get('user-agent') || undefined
        const referrer = request.headers.get('referer') || undefined
        const forwardedFor = request.headers.get('x-forwarded-for')
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : undefined

        let result

        switch (type) {
            case 'click':
                if (!data.slug || !data.category) {
                    return NextResponse.json(
                        { error: 'Slug and category are required for click events' },
                        { status: 400 }
                    )
                }
                result = await trackClick({
                    slug: data.slug,
                    category: data.category,
                    source: data.source,
                    user_agent: userAgent,
                    referrer,
                    ip_address: ipAddress,
                })
                break

            case 'pageview':
                if (!data.page_url) {
                    return NextResponse.json(
                        { error: 'Page URL is required for pageview events' },
                        { status: 400 }
                    )
                }
                result = await trackPageView({
                    page_url: data.page_url,
                    user_agent: userAgent,
                    referrer,
                    session_id: data.session_id,
                })
                break

            default:
                return NextResponse.json(
                    { error: 'Invalid event type' },
                    { status: 400 }
                )
        }

        if (!result.success) {
            return NextResponse.json(
                { error: 'Failed to track event', details: result.error },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            data: result.data,
        })
    } catch (error) {
        console.error('Track API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
