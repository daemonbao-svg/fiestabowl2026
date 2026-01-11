'use client'

import styles from './RelatedResources.module.css'

const resources = [
    {
        title: "Miami Championship Quest 2026",
        url: "https://www.miamivsolemiss.com/",
        description: "Deep-dive analysis and breaking news on Miami's championship run",
        category: "News & Analysis",
        authority: true
    },
    {
        title: "ESPN College Football",
        url: "https://www.espn.com/college-football/",
        description: "Official ESPN coverage and live updates",
        category: "Major Sports Network",
        authority: true
    },
    {
        title: "CFP National Championship",
        url: "https://collegefootballplayoff.com/",
        description: "Official CFP website - playoff information and schedule",
        category: "League Website",
        authority: true
    }
]

export default function RelatedResources() {
    return (
        <section className={styles.resourcesSection}>
            <div className="container">
                <h2 className={styles.title}>🔗 Helpful Resources</h2>
                <p className={styles.subtitle}>
                    External links to championship coverage and information
                </p>
                <div className={styles.resourceGrid}>
                    {resources.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className={styles.resourceCard}
                        >
                            <span className={styles.category}>{resource.category}</span>
                            <h3 className={styles.resourceTitle}>{resource.title}</h3>
                            <p className={styles.description}>{resource.description}</p>
                            <span className={styles.linkIcon}>→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
