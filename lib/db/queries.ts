import { supabase, supabaseAdmin, AffiliateClick, PageView, TicketPrice } from '../supabase'

/**
 * Track an affiliate link click
 */
export async function trackClick(data: Omit<AffiliateClick, 'id' | 'created_at'>) {
    try {
        const { data: result, error } = await supabase
            .from('affiliate_clicks')
            .insert([data])
            .select()
            .single()

        if (error) {
            console.error('Error tracking click:', error)
            return { success: false, error }
        }

        return { success: true, data: result }
    } catch (error) {
        console.error('Exception tracking click:', error)
        return { success: false, error }
    }
}

/**
 * Get click statistics for a specific slug
 */
export async function getClickStats(slug?: string) {
    try {
        let query = supabase
            .from('affiliate_click_stats')
            .select('*')

        if (slug) {
            query = query.eq('slug', slug)
        }

        const { data, error } = await query

        if (error) {
            console.error('Error fetching click stats:', error)
            return { success: false, error }
        }

        return { success: true, data }
    } catch (error) {
        console.error('Exception fetching click stats:', error)
        return { success: false, error }
    }
}

/**
 * Get daily click trends
 */
export async function getDailyTrends(days: number = 7) {
    try {
        const { data, error } = await supabase
            .from('daily_click_trends')
            .select('*')
            .limit(days * 10) // Approximate, as we have multiple categories per day

        if (error) {
            console.error('Error fetching daily trends:', error)
            return { success: false, error }
        }

        return { success: true, data }
    } catch (error) {
        console.error('Exception fetching daily trends:', error)
        return { success: false, error }
    }
}

/**
 * Track a page view
 */
export async function trackPageView(data: Omit<PageView, 'id' | 'created_at'>) {
    try {
        const { data: result, error } = await supabase
            .from('page_views')
            .insert([data])
            .select()
            .single()

        if (error) {
            console.error('Error tracking page view:', error)
            return { success: false, error }
        }

        return { success: true, data: result }
    } catch (error) {
        console.error('Exception tracking page view:', error)
        return { success: false, error }
    }
}

/**
 * Update ticket prices (requires service role key)
 */
export async function updateTicketPrices(prices: Omit<TicketPrice, 'id' | 'updated_at'>[]) {
    try {
        const admin = supabaseAdmin()

        const { data, error } = await admin
            .from('ticket_prices')
            .insert(prices)
            .select()

        if (error) {
            console.error('Error updating ticket prices:', error)
            return { success: false, error }
        }

        return { success: true, data }
    } catch (error) {
        console.error('Exception updating ticket prices:', error)
        return { success: false, error }
    }
}

/**
 * Get the most recent ticket prices
 */
export async function getRecentPrices() {
    try {
        const { data, error } = await supabase
            .from('ticket_prices')
            .select('*')
            .order('updated_at', { ascending: false })
            .limit(10)

        if (error) {
            console.error('Error fetching ticket prices:', error)
            return { success: false, error }
        }

        // Group by platform and get the most recent price for each
        const latestPrices = data.reduce((acc: any[], price: any) => {
            if (!acc.find(p => p.platform === price.platform)) {
                acc.push(price)
            }
            return acc
        }, [])

        return { success: true, data: latestPrices }
    } catch (error) {
        console.error('Exception fetching ticket prices:', error)
        return { success: false, error }
    }
}

/**
 * Get total clicks count
 */
export async function getTotalClicks() {
    try {
        const { count, error } = await supabase
            .from('affiliate_clicks')
            .select('*', { count: 'exact', head: true })

        if (error) {
            console.error('Error fetching total clicks:', error)
            return { success: false, error }
        }

        return { success: true, count }
    } catch (error) {
        console.error('Exception fetching total clicks:', error)
        return { success: false, error }
    }
}

/**
 * Get clicks by category
 */
export async function getClicksByCategory() {
    try {
        const { data, error } = await supabase
            .from('affiliate_clicks')
            .select('category')

        if (error) {
            console.error('Error fetching clicks by category:', error)
            return { success: false, error }
        }

        // Count clicks per category
        const categoryCounts = data.reduce((acc: Record<string, number>, item: any) => {
            acc[item.category] = (acc[item.category] || 0) + 1
            return acc
        }, {})

        return { success: true, data: categoryCounts }
    } catch (error) {
        console.error('Exception fetching clicks by category:', error)
        return { success: false, error }
    }
}
