'use client'

import styles from './BlogCTA.module.css'

export default function BlogCTA() {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.ctaCard}>
                    <div className={styles.ctaContent}>
                        <span className={styles.badge}>📰 Latest News</span>
                        <h2 className={styles.title}>
                            Want Expert Analysis & Breaking News?
                        </h2>
                        <p className={styles.description}>
                            Visit <strong>Miami Championship Quest 2026</strong> for in-depth game analysis,
                            transfer portal updates, player interviews, and real-time championship news.
                        </p>
                        <a
                            href="https://www.miamivsolemiss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Read Latest Analysis
                            <span className={styles.arrow}>→</span>
                        </a>
                    </div>
                    <div className={styles.ctaVisual}>
                        <div className={styles.pulseCircle}></div>
                        <span className={styles.icon}>🏆</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
