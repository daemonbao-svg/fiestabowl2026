'use client'

import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { gameData } from '@/lib/gameData'
import { buildAffiliateUrl } from '@/lib/affiliateLinks'
import { trackAffiliateClick } from '@/lib/analytics'
import styles from './HeroSection.module.css'

export default function HeroSection() {
    const [timeUntilKickoff, setTimeUntilKickoff] = useState<string>('')
    const kickoffDate = new Date(gameData.game.kickoffTime)

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date()
            if (now < kickoffDate) {
                setTimeUntilKickoff(formatDistanceToNow(kickoffDate, { addSuffix: true }))
            } else {
                setTimeUntilKickoff('Game in progress!')
            }
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 60000) // Update every minute

        return () => clearInterval(interval)
    }, [kickoffDate])

    const handleCTAClick = (slug: string, category: 'tickets' | 'streaming' | 'accommodation') => {
        trackAffiliateClick(slug, category, 'hero_cta')
        window.open(`/go/${slug}`, '_blank')
    }

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    {/* Left Side: Game Info */}
                    <div className={styles.gameInfo}>
                        <h1 className={styles.title}>{gameData.game.title}</h1>

                        <div className={styles.teams}>
                            <div className={styles.team}>
                                <img
                                    src={gameData.teams.miami.logo}
                                    alt={gameData.teams.miami.name}
                                    className={styles.teamLogo}
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23F47321" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E'
                                    }}
                                />
                                <div className={styles.teamInfo}>
                                    <h2>{gameData.teams.miami.shortName}</h2>
                                    <p>{gameData.teams.miami.record}</p>
                                </div>
                            </div>

                            <div className={styles.vs}>VS</div>

                            <div className={styles.team}>
                                <img
                                    src={gameData.teams.oleMiss.logo}
                                    alt={gameData.teams.oleMiss.name}
                                    className={styles.teamLogo}
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23CE1126" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-weight="bold"%3EOM%3C/text%3E%3C/svg%3E'
                                    }}
                                />
                                <div className={styles.teamInfo}>
                                    <h2>{gameData.teams.oleMiss.shortName}</h2>
                                    <p>{gameData.teams.oleMiss.record}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.gameDetails}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📍</span>
                                <span>{gameData.game.venue} • {gameData.game.location}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>⏰</span>
                                <span>{timeUntilKickoff}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📊</span>
                                <span>Spread: {gameData.game.spread} • O/U: {gameData.game.overUnder}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: CTA Buttons */}
                    <div className={styles.ctaContainer}>
                        <h3 className={styles.ctaTitle}>Quick Actions</h3>

                        <button
                            onClick={() => handleCTAClick('tickets-stubhub', 'tickets')}
                            className={`btn btn-primary btn-large ${styles.ctaButton} pulse glow`}
                        >
                            <span className={styles.ctaIcon}>🎟️</span>
                            <div className={styles.ctaText}>
                                <span className={styles.ctaLabel}>Get Last Minute Tickets</span>
                                <span className={styles.ctaSubtext}>Starting from $240</span>
                            </div>
                        </button>

                        <button
                            onClick={() => handleCTAClick('watch-fubo', 'streaming')}
                            className={`btn btn-secondary btn-large ${styles.ctaButton}`}
                        >
                            <span className={styles.ctaIcon}>📺</span>
                            <div className={styles.ctaText}>
                                <span className={styles.ctaLabel}>Watch Live on FuboTV</span>
                                <span className={styles.ctaSubtext}>Free trial available</span>
                            </div>
                        </button>

                        <button
                            onClick={() => handleCTAClick('vrbo', 'accommodation')}
                            className={`btn btn-outline btn-large ${styles.ctaButton}`}
                        >
                            <span className={styles.ctaIcon}>🏨</span>
                            <div className={styles.ctaText}>
                                <span className={styles.ctaLabel}>Find Hotels & Vrbo</span>
                                <span className={styles.ctaSubtext}>Near State Farm Stadium</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
