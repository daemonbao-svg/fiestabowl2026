'use client'

import { useEffect, useRef, useState } from 'react'
import { gameData } from '@/lib/gameData'
import styles from './VenueMap.module.css'
import Script from 'next/script'

declare global {
    interface Window {
        google: any
        initMap: () => void
    }
}

export default function VenueMap() {
    const mapRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // In a real app, this would be process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    // For now, we can gracefully fallback if it's missing
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    useEffect(() => {
        if (!apiKey) {
            // Just simulate loading for a moment then show specific UI
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 500)
            return () => clearTimeout(timer)
        }

        // Initialize map function
        window.initMap = () => {
            if (mapRef.current && window.google) {
                try {
                    const stadium = gameData.venue.coordinates

                    const map = new window.google.maps.Map(mapRef.current, {
                        center: stadium,
                        zoom: 14,
                        mapId: 'FIESTA_BOWL_MAP',
                        mapTypeId: 'roadmap',
                        disableDefaultUI: false,
                        // Dark mode-ish styles
                        styles: [
                            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                            { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
                            { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
                            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
                            { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
                            { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
                            { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
                            { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
                            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
                            { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
                            { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
                            { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
                            { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
                            { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
                        ]
                    })

                    // Stadium Marker
                    new window.google.maps.Marker({
                        position: stadium,
                        map: map,
                        title: gameData.venue.name,
                        animation: window.google.maps.Animation.DROP,
                    })

                    // Simulated nearby markers
                    // Parking
                    new window.google.maps.Marker({
                        position: { lat: stadium.lat + 0.003, lng: stadium.lng + 0.003 },
                        map: map,
                        title: 'General Parking',
                        icon: {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            scale: 8,
                            fillColor: '#4285F4',
                            fillOpacity: 1,
                            strokeWeight: 2,
                            strokeColor: '#FFFFFF',
                        }
                    })

                    setIsLoading(false)
                } catch (err) {
                    console.error('Error initializing map:', err)
                    setError('Failed to load map')
                    setIsLoading(false)
                }
            }
        }

        // If generic script already loaded
        if (window.google && window.google.maps) {
            window.initMap()
        }

        return () => {
            window.initMap = () => { }
        }
    }, [apiKey])

    if (!apiKey) {
        return (
            <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                    <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🗺️</p>
                    <p>Interactive Map</p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
                        (Configure GOOGLE_MAPS_API_KEY in .env.local to enable)
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#F47321' }}>
                        📍 {gameData.venue.name}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.mapContainer}>
            {isLoading && (
                <div className={styles.mapPlaceholder}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Loading State Farm Stadium...</p>
                </div>
            )}

            {error ? (
                <div className={styles.mapPlaceholder}>
                    <p>⚠️</p>
                    <p className={styles.errorText}>{error}</p>
                </div>
            ) : (
                <div ref={mapRef} className={styles.mapFrame} />
            )}

            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
                strategy="afterInteractive"
                onLoad={() => console.log('Google Maps script loaded')}
                onError={() => {
                    setError('Failed to load Google Maps script')
                    setIsLoading(false)
                }}
            />
        </div>
    )
}
