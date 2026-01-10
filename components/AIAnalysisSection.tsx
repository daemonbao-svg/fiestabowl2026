'use client'

import styles from './AIAnalysisSection.module.css'

export default function AIAnalysisSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={`${styles.card} glass-card`}>
                    <div className={styles.header}>
                        <span className={styles.aiBadge}>AI POWERED</span>
                        <h2>Gemini Simulation Insights</h2>
                    </div>

                    <div className={styles.analysisGrid}>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Win Probability (Finals)</span>
                            <span className={styles.statValue}>58.4%</span>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: '58.4%' }}></div>
                            </div>
                        </div>

                        <div className={styles.predictionBox}>
                            <h3>AI Key Takeaways</h3>
                            <ul>
                                <li>Miami offense trending up after Fiesta Bowl performance</li>
                                <li>Defense allows 12% fewer yards on 3rd downs vs top-10 opponents</li>
                                <li>Historical simulation: Miami wins 584 out of 1000 matchups</li>
                            </ul>
                        </div>
                    </div>

                    <p className={styles.footer}>
                        *Simulations based on aggregate performance data and advanced AI analysis.
                    </p>
                </div>
            </div>
        </section>
    )
}
