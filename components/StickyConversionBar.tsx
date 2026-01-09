'use client'

import { useState, useEffect } from 'react'
import { getLowestPrice } from '@/lib/ticketPrices'
import { trackAffiliateClick } from '@/lib/analytics'
import styles from './StickyConversionBar.module.css'

export default function StickyConversionBar() {
    const [isVisible, setIsVisible] = useState(false)
    const lowestPrice = getLowestPrice()

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after scrolling 300px
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        trackAffiliateClick('tickets-stubhub', 'tickets', 'sticky_bar')
        window.open('/go/tickets-stubhub', '_blank')
    }

    return (
        <div className={`${styles.stickyBar} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.label}>🎟️ Tickets from</span>
                    <span className={styles.price}>${lowestPrice}</span>
                </div>
                <button onClick={handleClick} className={`btn btn-primary ${styles.ctaButton}`}>
                    Buy Now
                </button>
            </div>
        </div>
    )
}
