import type { Metadata } from 'next'
import GoogleTagManager from '@/components/GoogleTagManager'
import './globals.css'

export { metadata } from './metadata'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Outfit:wght@400;600;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <GoogleTagManager gtmId={gtmId} />
                {children}
            </body>
        </html>
    )
}
