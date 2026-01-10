'use client'

import styles from './FAQ.module.css'

const faqs = [
    {
        question: "How can I buy tickets for the National Championship 2026 in Miami?",
        answer: "Tickets for the 2026 National Championship at Hard Rock Stadium can be purchased through our verified ticket partners like StubHub and Vivid Seats. We provide direct links to the best available inventory for the Miami championship game."
    },
    {
        question: "Where is the CFP National Championship 2026 located?",
        answer: "The 2026 College Football Playoff National Championship will be held at Hard Rock Stadium in Miami Gardens, Florida, following Miami's victory in the Fiesta Bowl."
    },
    {
        question: "What are the best hotels near Hard Rock Stadium for the championship?",
        answer: "Top-rated hotels near Hard Rock Stadium include the JW Marriott Miami Turnberry Resort & Spa, Stadium Hotel, and various vacation rentals in Miami Gardens. We recommend booking early as availability decreases rapidly for championship events."
    },
    {
        question: "How do I watch the National Championship live stream?",
        answer: "The game will be broadcast live on ESPN. Fans can also watch the live stream through streaming services like FuboTV, Hulu + Live TV, and YouTube TV, many of which offer free trials for new users."
    }
]

export default function FAQ() {
    return (
        <section className={styles.faqSection}>
            <div className="container">
                <h2 className={styles.title}>AI Fan Assistance & FAQ</h2>
                <div className={styles.faqGrid}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <h3 className={styles.question}>{faq.question}</h3>
                            <p className={styles.answer}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
