'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import styles from './AnnouncementBanner.module.css'

export default function AnnouncementBanner() {
    const handleTicketsClick = () => {
        trackAffiliateClick('championship-tickets', 'tickets', 'banner_championship')
        window.open('/go/championship-tickets', '_blank')
    }

    const handleHotelsClick = () => {
        trackAffiliateClick('miami-hotels', 'accommodation', 'banner_miami_hotels')
        window.open('/go/miami-hotels', '_blank')
    }

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.message}>
                    <span className={styles.trophy}>🏆</span>
                    <span className={styles.text}>
                        <strong>Miami is IN!</strong> Book National Championship Tickets & Hotels Now!
                    </span>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={handleTicketsClick}
                        className={`${styles.ctaButton} ${styles.primary}`}
                    >
                        Get Championship Tickets
                    </button>
                    <button
                        onClick={handleHotelsClick}
                        className={`${styles.ctaButton} ${styles.secondary}`}
                    >
                        Book Miami Hotels
                    </button>
                </div>
            </div>
        </div>
    )
}
