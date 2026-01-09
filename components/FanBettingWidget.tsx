'use client'

import { useState } from 'react'
import { gameData } from '@/lib/gameData'
import { trackEngagement } from '@/lib/analytics'
import styles from './FanBettingWidget.module.css'

export default function FanBettingWidget() {
    const [selectedPick, setSelectedPick] = useState<'miami' | 'oleMiss' | null>(null)
    const [votes, setVotes] = useState({ miami: 52, oleMiss: 48 })

    const handleVote = (team: 'miami' | 'oleMiss') => {
        if (!selectedPick) {
            setSelectedPick(team)
            trackEngagement('spread_prediction', 'betting_widget', team)

            // Simulate vote update
            setVotes(prev => ({
                miami: team === 'miami' ? prev.miami + 1 : prev.miami,
                oleMiss: team === 'oleMiss' ? prev.oleMiss + 1 : prev.oleMiss,
            }))
        }
    }

    const totalVotes = votes.miami + votes.oleMiss
    const miamiPercentage = Math.round((votes.miami / totalVotes) * 100)
    const oleMissPercentage = Math.round((votes.oleMiss / totalVotes) * 100)

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Fan Predictions & Odds</h2>
                <p className={styles.subtitle}>
                    Join the conversation and make your pick
                </p>

                <div className={styles.widgetGrid}>
                    {/* Spread Prediction Poll */}
                    <div className={styles.pollCard}>
                        <h3 className={styles.cardTitle}>Who Covers the Spread?</h3>
                        <p className={styles.spreadInfo}>{gameData.game.spread}</p>

                        <div className={styles.voteButtons}>
                            <button
                                onClick={() => handleVote('miami')}
                                className={`${styles.voteButton} ${selectedPick === 'miami' ? styles.selected : ''}`}
                                disabled={selectedPick !== null}
                                style={{ borderColor: gameData.teams.miami.color }}
                            >
                                <span className={styles.teamName}>{gameData.teams.miami.shortName}</span>
                                {selectedPick && (
                                    <span className={styles.percentage}>{miamiPercentage}%</span>
                                )}
                            </button>
                            <button
                                onClick={() => handleVote('oleMiss')}
                                className={`${styles.voteButton} ${selectedPick === 'oleMiss' ? styles.selected : ''}`}
                                disabled={selectedPick !== null}
                                style={{ borderColor: gameData.teams.oleMiss.color }}
                            >
                                <span className={styles.teamName}>{gameData.teams.oleMiss.shortName}</span>
                                {selectedPick && (
                                    <span className={styles.percentage}>{oleMissPercentage}%</span>
                                )}
                            </button>
                        </div>

                        {selectedPick && (
                            <div className={styles.voteResults}>
                                <div className={styles.resultBar}>
                                    <div
                                        className={styles.resultFill}
                                        style={{
                                            width: `${miamiPercentage}%`,
                                            background: gameData.teams.miami.color
                                        }}
                                    />
                                </div>
                                <p className={styles.voteCount}>{totalVotes.toLocaleString()} total votes</p>
                            </div>
                        )}
                    </div>

                    {/* Odds Table */}
                    <div className={styles.oddsCard}>
                        <h3 className={styles.cardTitle}>Current Betting Lines</h3>

                        <div className={styles.oddsTable}>
                            <div className={styles.oddsRow}>
                                <span className={styles.oddsLabel}>Moneyline</span>
                                <div className={styles.oddsValues}>
                                    <span>MIA: -140</span>
                                    <span>OM: +120</span>
                                </div>
                            </div>
                            <div className={styles.oddsRow}>
                                <span className={styles.oddsLabel}>Spread</span>
                                <div className={styles.oddsValues}>
                                    <span>MIA: -2.5 (-110)</span>
                                    <span>OM: +2.5 (-110)</span>
                                </div>
                            </div>
                            <div className={styles.oddsRow}>
                                <span className={styles.oddsLabel}>Over/Under</span>
                                <div className={styles.oddsValues}>
                                    <span>O {gameData.game.overUnder} (-110)</span>
                                    <span>U {gameData.game.overUnder} (-110)</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.disclaimer}>
                            <p>⚠️ For entertainment purposes only. Gamble responsibly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
