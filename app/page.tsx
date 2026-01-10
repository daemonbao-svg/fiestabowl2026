import AnnouncementBanner from '@/components/AnnouncementBanner'
import HeroSection from '@/components/HeroSection'
import LiveStreamSelector from '@/components/LiveStreamSelector'
import TicketTracker from '@/components/TicketTracker'
import TravelHub from '@/components/TravelHub'
import FanBettingWidget from '@/components/FanBettingWidget'
import StickyConversionBar from '@/components/StickyConversionBar'
import SchemaOrg from '@/components/SchemaOrg'
import AIAnalysisSection from '@/components/AIAnalysisSection'
import FAQ from '@/components/FAQ'

export default function Home() {
    return (
        <main>
            <SchemaOrg />
            <AnnouncementBanner />
            <HeroSection />
            <AIAnalysisSection />
            <TicketTracker />
            <LiveStreamSelector />
            <TravelHub />
            <FanBettingWidget />
            <FAQ />
            <StickyConversionBar />
        </main>
    )
}
