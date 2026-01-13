import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Link from 'next/link';
import { routes, vehicles } from '@/lib/data';
import { Check, ShieldCheck, Zap, Sparkles, Navigation, ArrowRight, Info } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Transparent Pricing | Umrah Taxi Service",
    description: "View our fixed rates for transfers between Makkah, Madinah, and Jeddah. No hidden charges for your Umrah journey.",
};

export default function PricingPage() {
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
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Transparent Pricing</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            Fixed <span className="text-primary italic">Luxury</span> <br />
                            Rates, No Surprises
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            Elite transportation from Makkah and Madinah with all-inclusive transparent pricing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(35,61,77,0.1)] border border-gray-100 overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-[#0A192F] p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                    <div>
                                        <h2 className="text-3xl font-display font-black text-white mb-2 tracking-tight">Vehicle Rate Matrix</h2>
                                        <p className="text-white/60 font-medium">Fixed journeys prices in USD (including all fees)</p>
                                    </div>
                                    <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                                        <Zap className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-black text-white uppercase tracking-widest">Starting $80</span>
                                    </div>
                                </div>
                            </div>

                            {/* Matrix Body */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="px-8 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em] bg-gray-50/50">Route Journey</th>
                                            {vehicles.slice(0, 6).map((vehicle) => (
                                                <th key={vehicle.id} className="px-6 py-6 text-[10px] font-black text-accent uppercase tracking-[0.2em] text-center border-l border-gray-100">
                                                    {vehicle.name}
                                                    <div className="text-[8px] font-bold text-primary mt-1">{vehicle.passengers} Pax</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {routes.map((route) => (
                                            <tr key={route.id} className="group hover:bg-gray-50/50 transition-colors">
                                                <td className="px-8 py-6 bg-gray-50/30">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                        <span className="text-sm font-black text-accent tracking-tight">{route.name}</span>
                                                    </div>
                                                </td>
                                                {vehicles.slice(0, 6).map((vehicle) => (
                                                    <td key={vehicle.id} className="px-6 py-6 text-center border-l border-gray-100">
                                                        <span className="text-lg font-display font-black text-accent group-hover:text-primary transition-colors">
                                                            ${Math.round(route.price * vehicle.priceMultiplier)}
                                                        </span>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Table Footer */}
                            <div className="p-8 bg-gray-50 border-t border-gray-100">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                                    <div className="flex items-start space-x-3 max-w-sm">
                                        <span className="text-primary mt-0.5">
                                            <Info className="w-5 h-5" />
                                        </span>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                                            Prices are for one-way journeys. High demand periods may affect rates. For precise group quotes, please use our booking tool.
                                        </p>
                                    </div>
                                    <Link href="/booking" className="inline-flex items-center space-x-3 bg-accent text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:bg-primary transition-all duration-300">
                                        <span>Instant Booking</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Guarantee */}
            <section className="section-padding bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="container-custom">
                    <div className="text-center mb-20 tracking-tight">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-accent">
                            Our <span className="text-gradient">Guarantee</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Zero Hidden Costs', desc: 'No parking fees, tolls, or taxes added later. What you see is exactly what you pay.' },
                            { title: 'High-Demand Protection', desc: 'Book in advance to lock in your rate. We honor all confirmed booking prices.' },
                            { title: 'Meet & Greet', desc: 'Complimentary professional driver greeting with name signage at airport arrivals.' },
                            { title: 'Elite Fleet', desc: 'Only modern, low-mileage vehicles are used for every single journey.' },
                            { title: 'Cancellation Protection', desc: 'Free cancellation up to 24 hours before your scheduled pickup time.' },
                            { title: '24/7 Live Concierge', desc: 'Direct WhatsApp line for immediate assistance with your booking anytime.' },
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(35,61,77,0.08)] transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-display font-black text-accent mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}
