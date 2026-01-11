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
import BlogCTA from '@/components/BlogCTA'
import RelatedResources from '@/components/RelatedResources'

export default function Home() {
    return (
        <main>
            <SchemaOrg />
            <AnnouncementBanner />
            <HeroSection />
            <AIAnalysisSection />
            <BlogCTA />
            <TicketTracker />
            <LiveStreamSelector />
            <TravelHub />
            <FanBettingWidget />
            <FAQ />
            <RelatedResources />
            <StickyConversionBar />
        </main>
    )
}
