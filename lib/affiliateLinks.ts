// Affiliate link configuration with tracking parameters

interface AffiliateLink {
    url: string
    subId: string
}

// Centralized affiliate URLs (replace with actual affiliate links)
export const affiliateLinks: Record<string, AffiliateLink> = {
    // Tickets
    'tickets-stubhub': {
        url: `https://www.stubhub.com/fiesta-bowl-tickets/performer/12345/?sid=${process.env.NEXT_PUBLIC_STUBHUB_AFFILIATE_ID}`,
        subId: 'fiesta_hero_tickets',
    },
    'tickets-vivid': {
        url: `https://www.vividseats.com/fiesta-bowl-tickets.html?wsUser=${process.env.NEXT_PUBLIC_VIVID_SEATS_AFFILIATE_ID}`,
        subId: 'fiesta_hero_tickets',
    },

    // Streaming
    'watch-fubo': {
        url: `https://www.fubo.tv/welcome?irad=${process.env.NEXT_PUBLIC_FUBOTV_AFFILIATE_ID}`,
        subId: 'fiesta_live_stream',
    },
    'watch-hulu': {
        url: `https://www.hulu.com/live-tv?cmp=${process.env.NEXT_PUBLIC_HULU_AFFILIATE_ID}`,
        subId: 'fiesta_live_stream',
    },
    'watch-youtube': {
        url: 'https://tv.youtube.com/welcome/',
        subId: 'fiesta_live_stream',
    },
    'watch-sling': {
        url: 'https://www.sling.com/',
        subId: 'fiesta_live_stream',
    },

    // Accommodation
    'vrbo': {
        url: `https://www.vrbo.com/search/keywords:glendale-arizona-united-states-of-america?adultsCount=2&petIncluded=false&ssr=true&affiliateId=${process.env.NEXT_PUBLIC_VRBO_AFFILIATE_ID}`,
        subId: 'fiesta_travel_vrbo',
    },
    'hotels': {
        url: `https://www.hotels.com/search.do?destination=Glendale%2C%20Arizona&affiliateId=${process.env.NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID}`,
        subId: 'fiesta_travel_hotels',
    },
    'expedia': {
        url: 'https://www.expedia.com/Glendale-Hotels.d6054152.Travel-Guide-Hotels',
        subId: 'fiesta_travel_expedia',
    },

    // Parking
    'parking': {
        url: 'https://www.parkwhiz.com/state-farm-stadium-parking/',
        subId: 'fiesta_parking',
    },

    // Betting
    'bet-draftkings': {
        url: `https://sportsbook.draftkings.com/leagues/football/ncaaf?wpsrc=${process.env.NEXT_PUBLIC_DRAFTKINGS_AFFILIATE_ID}`,
        subId: 'fiesta_betting_draftkings',
    },

    // Championship Tickets (CFP National Championship @ Hard Rock Stadium)
    'championship-tickets': {
        url: `https://www.stubhub.com/college-football-playoff-national-championship-tickets/performer/12345/?sid=${process.env.NEXT_PUBLIC_STUBHUB_AFFILIATE_ID}`,
        subId: 'championship_tickets',
    },
    'championship-tickets-vivid': {
        url: `https://www.vividseats.com/college-football-playoff-national-championship-tickets.html?wsUser=${process.env.NEXT_PUBLIC_VIVID_SEATS_AFFILIATE_ID}`,
        subId: 'championship_tickets',
    },

    // Miami Hotels (for Championship Game)
    'miami-hotels': {
        url: `https://www.hotels.com/search.do?destination=Miami%2C%20Florida&affiliateId=${process.env.NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID}`,
        subId: 'championship_miami_hotels',
    },
    'miami-vrbo': {
        url: `https://www.vrbo.com/search/keywords:miami-florida-united-states-of-america?adultsCount=2&petIncluded=false&ssr=true&affiliateId=${process.env.NEXT_PUBLIC_VRBO_AFFILIATE_ID}`,
        subId: 'championship_miami_vrbo',
    },
    'miami-expedia': {
        url: 'https://www.expedia.com/Miami-Hotels.d178286.Travel-Guide-Hotels',
        subId: 'championship_miami_expedia',
    },

    // Merchandise
    'miami-gear': {
        url: 'https://www.fanatics.com/college/miami-hurricanes/o-16+t-45041405+z-9150-3509039443',
        subId: 'fiesta_miami_merch',
    },
    'olemiss-gear': {
        url: 'https://www.fanatics.com/college/ole-miss-rebels/o-27+t-67262838+z-9106-1106314162',
        subId: 'fiesta_olemiss_merch',
    },
}

// Helper function to build affiliate URL with Sub-ID
export function buildAffiliateUrl(slug: string, customSubId?: string): string {
    const link = affiliateLinks[slug]
    if (!link) {
        console.error(`Affiliate link not found for slug: ${slug}`)
        return '#'
    }

    const subId = customSubId || link.subId
    const separator = link.url.includes('?') ? '&' : '?'
    return `${link.url}${separator}subid=${subId}`
}

// Get redirect URL for /go/ routes
export function getRedirectUrl(slug: string, source?: string): string {
    const customSubId = source ? `${affiliateLinks[slug]?.subId}_${source}` : undefined
    return buildAffiliateUrl(slug, customSubId)
}
