'use client'

import { getLowestPrice, getPriceTrend, getAvailabilityStatus } from '@/lib/ticketPrices'
import { trackAffiliateClick } from '@/lib/analytics'
import styles from './TicketTracker.module.css'

export default function TicketTracker() {
    const lowestPrice = getLowestPrice()
    const priceTrend = getPriceTrend()
    const availability = getAvailabilityStatus()

    const handleTicketClick = (platform: string) => {
        const slug = platform === 'StubHub' ? 'tickets-stubhub' : 'tickets-vivid'
        trackAffiliateClick(slug, 'tickets', `tracker_${platform}`)
        window.open(`/go/${slug}`, '_blank')
    }

    const getTrendBadge = () => {
        if (priceTrend === 'dropping') {
            return <span className="badge badge-success">Price Dropping 📉</span>
        } else if (priceTrend === 'rising') {
            return <span className="badge badge-warning">Selling Fast 🔥</span>
        }
        return null
    }

    const getAvailabilityBadge = () => {
        if (availability === 'low') {
            return <span className="badge badge-danger">Limited Availability</span>
        } else if (availability === 'medium') {
            return <span className="badge badge-warning">Moderate Availability</span>
        }
        return <span className="badge badge-success">Good Availability</span>
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Live Ticket Prices</h2>
                <p className={styles.subtitle}>
                    <span className={styles.liveIndicator}>
                        <span className={styles.dot}></span>
                        Live
                    </span>
                    Real-time pricing from top ticket marketplaces
                </p>

                <div className={styles.priceCard}>
                    <div className={styles.priceHeader}>
                        <div className={styles.priceInfo}>
                            <span className={styles.priceLabel}>Starting From</span>
                            <span className={styles.price}>${lowestPrice}</span>
                            <span className={styles.priceNote}>per ticket</span>
                        </div>
                        <div className={styles.badges}>
                            {getTrendBadge()}
                            {getAvailabilityBadge()}
                        </div>
                    </div>

                    <div className={styles.ctaButtons}>
                        <button
                            onClick={() => handleTicketClick('StubHub')}
                            className="btn btn-primary btn-large glow"
                        >
                            <span>Check StubHub Availability</span>
                            <span className={styles.arrow}>→</span>
                        </button>
                        <button
                            onClick={() => handleTicketClick('Vivid Seats')}
                            className="btn btn-secondary btn-large"
                        >
                            <span>Check Vivid Seats</span>
                            <span className={styles.arrow}>→</span>
                        </button>
                    </div>

                    <div className={styles.disclaimer}>
                        <p>💡 Prices updated 2 mins ago. Act fast for the best deals!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
