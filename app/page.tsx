import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Hero from '@/components/home/Hero';
import QuickBooking from '@/components/home/QuickBooking';
import HowItWorks from '@/components/home/HowItWorks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PopularRoutes from '@/components/home/PopularRoutes';
import VehicleFleet from '@/components/home/VehicleFleet';
import Reviews from '@/components/home/Reviews';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <QuickBooking />
            <HowItWorks />
            <WhyChooseUs />
            <PopularRoutes />
            <VehicleFleet />
            <Reviews />
            <StickyButtons />
            <Footer />
        </main>
    );
}
