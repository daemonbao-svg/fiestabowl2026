import HeroSection from '@/components/HeroSection'
import LiveStreamSelector from '@/components/LiveStreamSelector'
import TicketTracker from '@/components/TicketTracker'
import TravelHub from '@/components/TravelHub'
import FanBettingWidget from '@/components/FanBettingWidget'
import StickyConversionBar from '@/components/StickyConversionBar'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TicketTracker />
            <LiveStreamSelector />
            <TravelHub />
            <FanBettingWidget />
            <StickyConversionBar />
        </main>
    )
}
