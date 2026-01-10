'use client'

import { useState, useEffect } from 'react'
import { getLowestPrice } from '@/lib/ticketPrices'
import { trackAffiliateClick } from '@/lib/analytics'
import styles from './StickyConversionBar.module.css'

export default function StickyConversionBar() {
    const [isMobile, setIsMobile] = useState(false)
    const lowestPrice = getLowestPrice()

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleClick = () => {
        trackAffiliateClick('tickets-stubhub', 'tickets', 'sticky_bar')
        window.open('/go/tickets-stubhub', '_blank')
    }

    // Always show on mobile, hide on desktop
    if (!isMobile) return null

    return (
        <div className={styles.stickyBar}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.label}>🏆 Championship Gear</span>
                    <span className={styles.price}>from ${lowestPrice}</span>
                </div>
                <button onClick={handleClick} className={`btn btn-primary ${styles.ctaButton}`}>
                    Get Tickets
                </button>
            </div>
        </div>
    )
}
