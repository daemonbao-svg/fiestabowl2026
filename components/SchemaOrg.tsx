import { gameData } from '@/lib/gameData'

export default function SchemaOrg() {
    const eventJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        'name': `${gameData.game.title}: ${gameData.teams.miami.name} vs ${gameData.teams.oleMiss.name}`,
        'description': `Official fan guide for the 2026 Fiesta Bowl featuring ${gameData.teams.miami.name} and ${gameData.teams.oleMiss.name}.`,
        'startDate': gameData.game.kickoffTime,
        'location': {
            '@type': 'Place',
            'name': gameData.game.venue,
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': gameData.venue.address.split(',')[0],
                'addressLocality': 'Glendale',
                'addressRegion': 'AZ',
                'postalCode': '85305',
                'addressCountry': 'US'
            }
        },
        'competitor': [
            {
                '@type': 'SportsTeam',
                'name': gameData.teams.miami.name,
                'logo': `https://fiestabowl2026.live${gameData.teams.miami.logo}`
            },
            {
                '@type': 'SportsTeam',
                'name': gameData.teams.oleMiss.name,
                'logo': `https://fiestabowl2026.live${gameData.teams.oleMiss.name}`
            }
        ],
        'offers': {
            '@type': 'Offer',
            'url': 'https://fiestabowl2026.live',
            'availability': 'https://schema.org/InStock',
            'price': '235',
            'priceCurrency': 'USD'
        }
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'How can I buy tickets for the National Championship 2026 in Miami?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Tickets for the 2026 National Championship at Hard Rock Stadium can be purchased through our verified ticket partners like StubHub and Vivid Seats.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Where is the CFP National Championship 2026 located?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The 2026 College Football Playoff National Championship will be held at Hard Rock Stadium in Miami Gardens, Florida.'
                }
            }
        ]
    }

    const orgJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Fiesta Bowl 2026 Fan Guide',
        'url': 'https://fiestabowl2026.live',
        'logo': 'https://fiestabowl2026.live/images/logo.png',
        'sameAs': [
            'https://twitter.com/fiestabowl',
            'https://www.facebook.com/fiestabowl'
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
            />
        </>
    )
}
