// Ticket price data structure

export interface TicketPrice {
    platform: 'StubHub' | 'Vivid Seats' | 'Ticketmaster'
    section: string
    price: number
    quantity: number
    affiliateSlug: string
}

// Mock ticket data (replace with API integration)
export const ticketPrices: TicketPrice[] = [
    {
        platform: 'StubHub',
        section: 'Upper Level',
        price: 240,
        quantity: 156,
        affiliateSlug: 'tickets-stubhub',
    },
    {
        platform: 'StubHub',
        section: 'Lower Level',
        price: 485,
        quantity: 89,
        affiliateSlug: 'tickets-stubhub',
    },
    {
        platform: 'Vivid Seats',
        section: 'Upper Level',
        price: 235,
        quantity: 142,
        affiliateSlug: 'tickets-vivid',
    },
    {
        platform: 'Vivid Seats',
        section: 'Lower Level',
        price: 475,
        quantity: 67,
        affiliateSlug: 'tickets-vivid',
    },
]

// Get lowest ticket price
export function getLowestPrice(): number {
    return Math.min(...ticketPrices.map(t => t.price))
}

// Get price trend indicator
export function getPriceTrend(): 'dropping' | 'rising' | 'stable' {
    // Mock implementation - in production, compare with historical data
    const random = Math.random()
    if (random < 0.3) return 'dropping'
    if (random < 0.6) return 'stable'
    return 'rising'
}

// Get availability status
export function getAvailabilityStatus(): 'high' | 'medium' | 'low' {
    const totalQuantity = ticketPrices.reduce((sum, t) => sum + t.quantity, 0)
    if (totalQuantity > 300) return 'high'
    if (totalQuantity > 150) return 'medium'
    return 'low'
}
