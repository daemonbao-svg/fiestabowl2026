import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import GoogleTagManager from '@/components/GoogleTagManager'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
})

export { metadata } from './metadata'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''

    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                <GoogleTagManager gtmId={gtmId} />
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    )
}
