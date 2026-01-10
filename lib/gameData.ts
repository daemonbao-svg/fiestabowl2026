// Game data for 2026 Fiesta Bowl
export const gameData = {
    teams: {
        miami: {
            name: 'Miami Hurricanes',
            shortName: 'Miami',
            logo: '/images/miami-logo.png',
            color: '#F47321',
            record: '10-2',
        },
        oleMiss: {
            name: 'Ole Miss Rebels',
            shortName: 'Ole Miss',
            logo: '/images/olemiss-logo.png',
            color: '#CE1126',
            record: '9-3',
        },
    },
    game: {
        title: '2026 Fiesta Bowl',
        venue: 'State Farm Stadium',
        location: 'Glendale, AZ',
        kickoffTime: '2026-01-09T19:00:00-07:00', // 7:00 PM MST
        spread: 'Miami -2.5',
        overUnder: '54.5',
        isComplete: true,
        winner: 'miami',
        finalScore: {
            miami: 31,
            oleMiss: 24,
        },
    },
    venue: {
        name: 'State Farm Stadium',
        address: '1 Cardinals Dr, Glendale, AZ 85305',
        coordinates: {
            lat: 33.5276,
            lng: -112.2626,
        },
    },
    streaming: {
        tv: [
            { name: 'ESPN', hasTrial: false },
            { name: 'ABC', hasTrial: false },
        ],
        web: [
            { name: 'FuboTV', hasTrial: true, affiliateSlug: 'watch-fubo' },
            { name: 'Hulu + Live TV', hasTrial: true, affiliateSlug: 'watch-hulu' },
            { name: 'YouTube TV', hasTrial: true, affiliateSlug: 'watch-youtube' },
            { name: 'Sling TV', hasTrial: true, affiliateSlug: 'watch-sling' },
        ],
        radio: [
            { name: 'ESPN Radio', hasTrial: false },
            { name: 'TuneIn', hasTrial: true },
        ],
    },
}

// Live score data (placeholder for dynamic updates)
export interface LiveScore {
    quarter: string
    timeRemaining: string
    miamiScore: number
    oleMissScore: number
    possession: 'miami' | 'oleMiss' | null
    lastUpdate: string
}

export const getInitialScore = (): LiveScore => ({
    quarter: 'Pregame',
    timeRemaining: '',
    miamiScore: 0,
    oleMissScore: 0,
    possession: null,
    lastUpdate: new Date().toISOString(),
})
