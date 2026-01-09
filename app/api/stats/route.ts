import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

import {
    getClickStats,
    getDailyTrends,
    getTotalClicks,
    getClicksByCategory,
    getRecentPrices
} from '@/lib/db/queries'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') || 'overview'
        const slug = searchParams.get('slug') || undefined

        let result

        switch (type) {
            case 'overview':
                // Get overall statistics
                const [totalClicks, clicksByCategory, recentPrices] = await Promise.all([
                    getTotalClicks(),
                    getClicksByCategory(),
                    getRecentPrices(),
                ])

                return NextResponse.json({
                    success: true,
                    data: {
                        totalClicks: totalClicks.count || 0,
                        clicksByCategory: clicksByCategory.data || {},
                        recentPrices: recentPrices.data || [],
                    },
                })

            case 'clicks':
                // Get click statistics
                result = await getClickStats(slug)
                break

            case 'trends':
                // Get daily trends
                const days = parseInt(searchParams.get('days') || '7')
                result = await getDailyTrends(days)
                break

            case 'prices':
                // Get recent ticket prices
                result = await getRecentPrices()
                break

            default:
                return NextResponse.json(
                    { error: 'Invalid stats type' },
                    { status: 400 }
                )
        }

        if (!result.success) {
            return NextResponse.json(
                { error: 'Failed to fetch stats', details: result.error },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            data: result.data,
        })
    } catch (error) {
        console.error('Stats API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
