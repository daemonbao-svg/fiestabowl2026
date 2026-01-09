import { gameData } from '@/lib/gameData'

export default function SchemaOrg() {
    const jsonLd = {
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

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
