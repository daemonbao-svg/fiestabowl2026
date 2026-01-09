'use client'

import { gameData } from '@/lib/gameData'
import { trackAffiliateClick } from '@/lib/analytics'
import styles from './LiveStreamSelector.module.css'

export default function LiveStreamSelector() {
    const handleStreamClick = (slug: string, platform: string) => {
        trackAffiliateClick(slug, 'streaming', `stream_${platform}`)
        window.open(`/go/${slug}`, '_blank')
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>How to Watch the Game</h2>
                <p className={styles.subtitle}>
                    Multiple ways to catch all the action live
                </p>

                <div className={styles.streamGrid}>
                    {/* TV Options */}
                    <div className={styles.streamCategory}>
                        <div className={styles.categoryHeader}>
                            <span className={styles.categoryIcon}>📺</span>
                            <h3>TV Broadcast</h3>
                        </div>
                        <div className={styles.optionsList}>
                            {gameData.streaming.tv.map((option) => (
                                <div key={option.name} className={styles.streamOption}>
                                    <span className={styles.optionName}>{option.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web Streaming */}
                    <div className={styles.streamCategory}>
                        <div className={styles.categoryHeader}>
                            <span className={styles.categoryIcon}>💻</span>
                            <h3>Online Streaming</h3>
                        </div>
                        <div className={styles.optionsList}>
                            {gameData.streaming.web.map((option) => (
                                <div key={option.name} className={styles.streamOption}>
                                    <div className={styles.optionInfo}>
                                        <span className={styles.optionName}>{option.name}</span>
                                        {option.hasTrial && (
                                            <span className="badge badge-success">Free Trial</span>
                                        )}
                                    </div>
                                    {option.affiliateSlug && (
                                        <button
                                            onClick={() => handleStreamClick(option.affiliateSlug!, option.name)}
                                            className="btn btn-primary"
                                        >
                                            Watch Now
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Radio */}
                    <div className={styles.streamCategory}>
                        <div className={styles.categoryHeader}>
                            <span className={styles.categoryIcon}>📻</span>
                            <h3>Radio Broadcast</h3>
                        </div>
                        <div className={styles.optionsList}>
                            {gameData.streaming.radio.map((option) => (
                                <div key={option.name} className={styles.streamOption}>
                                    <span className={styles.optionName}>{option.name}</span>
                                    {option.hasTrial && (
                                        <span className="badge badge-success">Free</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
