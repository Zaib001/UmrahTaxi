import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { routes, vehicles } from '@/lib/data';
import { notFound } from 'next/navigation';
import { MapPin, Clock, DollarSign, ArrowRight, Shield, Check, Navigation, Car } from 'lucide-react';
import { getQuickWhatsAppLink } from '@/lib/whatsapp';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const route = routes.find(r => r.slug === params.slug);
    if (!route) return {};

    return {
        title: `${route.name} Transport`,
        description: `Book your private transfer for ${route.name}. Comfortable ${route.duration} journey, ${route.distance}. Fixed price: ${route.price} SAR.`,
        openGraph: {
            title: `${route.name} - Umrah Taxi Service`,
            description: `Professional taxi service from ${route.from} to ${route.to}. Reliable pilgrimage transport.`,
        }
    };
}

export default function RouteDetailPage({ params }: Props) {
    const route = routes.find((r) => r.slug === params.slug);

    if (!route) {
        notFound();
    }

    return (
        <main>
            <Navbar />

            <section className="pt-16 pb-16 bg-gradient-to-br from-accent via-secondary to-accent-dark text-white">
                <div className="container-custom px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <div className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-bold mb-4">Route Details</div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{route.name}</h1>
                            <div className="flex items-center space-x-6 text-white/80">
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" /> {route.distance}</div>
                                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-primary" /> {route.duration}</div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
                            <div className="text-sm text-white/60 mb-1">Starting From</div>
                            <div className="text-5xl font-display font-bold text-primary mb-4">${route.price}</div>
                            <a href={getQuickWhatsAppLink(route.name)} target="_blank" className="btn-primary w-full">Book This Route</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-accent mb-4">Ride in <span className="text-gradient">Comfort</span></h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{route.description}. Our professional drivers will ensure you reach your destination safely and on time. We specialize in inter-city transfers specifically tailored for pilgrims and families.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Safe Journey', desc: 'Licensed & Vetted Drivers', icon: Shield },
                                    { title: 'Fixed Rates', desc: 'No Hidden Charges', icon: DollarSign },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="card p-6 bg-gray-50 flex items-start space-x-4">
                                            <div className="bg-white p-3 rounded-full shadow-sm"><Icon className="w-6 h-6 text-primary" /></div>
                                            <div>
                                                <h4 className="font-bold text-accent">{item.title}</h4>
                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-bold text-accent">What to expect on this route:</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Door-to-door pickup and drop-off',
                                        'Optional stops for refreshments and prayer',
                                        'Help with luggage at both ends',
                                        'Smooth drive on the high-speed Expressway',
                                        'Air-conditioned comfort throughout'
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-center space-x-3 text-gray-600">
                                            <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                            </div>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Content - Vehicle Options */}
                        <div>
                            <h3 className="text-2xl font-display font-black text-accent mb-8 tracking-tight">
                                Choose Your <span className="text-gradient">Vehicle</span>
                            </h3>
                            <div className="space-y-4">
                                {vehicles.map((v) => (
                                    <div key={v.id} className="group relative bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-[0_15px_40px_rgba(35,61,77,0.08)] transition-all duration-500 border border-gray-100 overflow-hidden">
                                        {/* Card Hover Effect */}
                                        <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                        <div className="flex items-center space-x-5 relative z-10">
                                            <div className="w-20 h-20 bg-accent/5 rounded-2xl flex items-center justify-center border border-accent/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                                                <Car className="w-10 h-10 text-accent group-hover:text-primary transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-accent tracking-tight">{v.name}</h4>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest bg-gray-50 px-2 py-0.5 rounded-md">{v.type}</span>
                                                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/5 px-2 py-0.5 rounded-md">Up to {v.passengers} Pax</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center sm:text-right relative z-10">
                                            <div className="text-3xl font-display font-black text-primary mb-3">
                                                ${Math.round(route.price * v.priceMultiplier)}
                                            </div>
                                            <Link href="/booking" className="inline-flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/20 transition-all">
                                                <span>Select</span>
                                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}
