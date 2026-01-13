import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Link from 'next/link';
import { routes } from '@/lib/data';
import { MapPin, Clock, ArrowRight, Navigation } from 'lucide-react';

export default function RoutesPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-20 pb-20 bg-[#0A192F] overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest border border-primary/20">
                            <Navigation className="w-3.5 h-3.5" />
                            <span>Optimized Travel</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            Our <span className="text-primary italic">Popular</span> <br />
                            Pilgrimage Routes
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            Transparent fixed rates for all major journeys between Holy Cities & Airports.
                        </p>
                    </div>
                </div>
            </section>

            {/* Routes Grid */}
            <section className="section-padding bg-gray-50/50 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute -left-20 top-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {routes.map((route, index) => (
                            <Link
                                key={route.id}
                                href={`/routes/${route.slug}`}
                                className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(35,61,77,0.1)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Card Background Pattern (Hover) */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                {/* Route Destinations */}
                                <div className="relative z-10 mb-8 flex items-start justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center border border-accent/10">
                                                <Navigation className="w-4 h-4 text-accent" />
                                            </div>
                                            <span className="text-xl font-bold text-accent tracking-tight">{route.from}</span>
                                        </div>
                                        <div className="ml-4 h-6 border-l-2 border-dashed border-gray-200"></div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                <MapPin className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-xl font-bold text-accent tracking-tight">{route.to}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-display font-black text-primary">
                                            ${route.price}
                                        </div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">Starting From</div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-8"></div>

                                {/* Route Details */}
                                <div className="relative z-10 flex items-center space-x-6 mb-8 text-sm font-bold text-gray-500 uppercase tracking-tighter">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>{route.duration}</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                                    <div className="flex items-center space-x-2">
                                        <Navigation className="w-4 h-4 text-primary" />
                                        <span>{route.distance}</span>
                                    </div>
                                </div>

                                <p className="relative z-10 text-gray-500 text-sm mb-10 leading-relaxed font-medium flex-grow">
                                    {route.description}
                                </p>

                                {/* CTAs */}
                                <div className="relative z-10 flex items-center justify-between group-hover:translate-x-1 transition-transform">
                                    <span className="bg-accent text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/20 transition-all">
                                        View Detail
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary transition-colors">
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}
