'use client'

import { gameData } from '@/lib/gameData'
import { trackAffiliateClick } from '@/lib/analytics'
import VenueMap from './VenueMap'
import styles from './TravelHub.module.css'

export default function TravelHub() {
    const handleAccommodationClick = (slug: string, type: string) => {
        trackAffiliateClick(slug, 'accommodation', `travel_${type}`)
        window.open(`/go/${slug}`, '_blank')
    }

    const handleParkingClick = () => {
        trackAffiliateClick('parking', 'parking', 'travel_parking')
        window.open('/go/parking', '_blank')
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Travel & Accommodation</h2>
                <p className={styles.subtitle}>
                    Fiesta Bowl victory secured! Now book for the National Championship in Miami
                </p>

                {/* Championship Hotels Callout */}
                <div className={`${styles.championshipCallout} glass-card`}>
                    <div className={styles.calloutHeader}>
                        <span className={styles.calloutIcon}>🏆</span>
                        <h3>Miami Hosts the Championship!</h3>
                    </div>
                    <p className={styles.calloutText}>
                        Book your Miami hotels now for the CFP National Championship at Hard Rock Stadium
                    </p>
                    <div className={styles.calloutButtons}>
                        <button
                            onClick={() => handleAccommodationClick('miami-hotels', 'championship_hotels')}
                            className="btn btn-primary"
                        >
                            🏨 Miami Hotels
                        </button>
                        <button
                            onClick={() => handleAccommodationClick('miami-vrbo', 'championship_vrbo')}
                            className="btn btn-secondary"
                        >
                            🏠 Miami Vacation Rentals
                        </button>
                    </div>
                </div>

                <div className={styles.travelGrid}>
                    {/* Accommodation */}
                    <div className={styles.travelCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardIcon}>🏨</span>
                            <h3>Where to Stay</h3>
                        </div>
                        <p className={styles.cardDescription}>
                            Find the perfect place near {gameData.venue.name} in Glendale, AZ
                        </p>
                        <div className={styles.optionsList}>
                            <button
                                onClick={() => handleAccommodationClick('vrbo', 'vrbo')}
                                className={`${styles.optionButton} glass-card`}
                            >
                                <div className={styles.optionInfo}>
                                    <span className={styles.optionName}>Vrbo Rentals</span>
                                    <span className={styles.optionDesc}>Entire homes & apartments</span>
                                </div>
                                <span className={styles.optionArrow}>→</span>
                            </button>
                            <button
                                onClick={() => handleAccommodationClick('hotels', 'hotels')}
                                className={`${styles.optionButton} glass-card`}
                            >
                                <div className={styles.optionInfo}>
                                    <span className={styles.optionName}>Hotels.com</span>
                                    <span className={styles.optionDesc}>Top-rated hotels nearby</span>
                                </div>
                                <span className={styles.optionArrow}>→</span>
                            </button>
                            <button
                                onClick={() => handleAccommodationClick('expedia', 'expedia')}
                                className={`${styles.optionButton} glass-card`}
                            >
                                <div className={styles.optionInfo}>
                                    <span className={styles.optionName}>Expedia</span>
                                    <span className={styles.optionDesc}>Hotels + car rental bundles</span>
                                </div>
                                <span className={styles.optionArrow}>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Venue Info */}
                    <div className={styles.travelCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardIcon}>📍</span>
                            <h3>Venue Information</h3>
                        </div>
                        <div className={styles.venueInfo}>
                            <div className={styles.venueDetail}>
                                <strong>{gameData.venue.name}</strong>
                                <p>{gameData.venue.address}</p>
                            </div>
                            <VenueMap />
                            <button
                                onClick={handleParkingClick}
                                className="btn btn-primary"
                            >
                                🅿️ Find Parking
                            </button>
                        </div>
                    </div>

                    {/* Fan Essentials */}
                    <div className={styles.travelCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardIcon}>⭐</span>
                            <h3>Fan Essentials</h3>
                        </div>
                        <div className={styles.essentialsList}>
                            <div className={styles.essentialItem}>
                                <span className={styles.essentialIcon}>🍔</span>
                                <div>
                                    <strong>Tailgating Spots</strong>
                                    <p>Lots open 4 hours before kickoff</p>
                                </div>
                            </div>
                            <div className={styles.essentialItem}>
                                <span className={styles.essentialIcon}>🍺</span>
                                <div>
                                    <strong>Fan Bars</strong>
                                    <p>Westgate Entertainment District</p>
                                </div>
                            </div>
                            <div className={styles.essentialItem}>
                                <span className={styles.essentialIcon}>🎽</span>
                                <div>
                                    <strong>Team Gear</strong>
                                    <p>Official merchandise available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
