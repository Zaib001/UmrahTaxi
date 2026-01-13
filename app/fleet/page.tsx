import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '@/lib/data';
import { Users, Luggage, Check, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Luxury Fleet | Umrah Taxi Service",
    description: "Explore our diverse range of luxury vehicles for Umrah including GMC Yukon, Toyota Hiace VIP, and premium buses for group travel.",
};

export default function FleetPage() {
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
                            <span>Premium Selection</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            Our <span className="text-primary italic">Elite</span> <br />
                            Vehicle Fleet
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            A curated selection of 15+ modern, luxury vehicles tailored for every pilgrimage need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {vehicles.map((vehicle, index) => (
                            <div key={vehicle.id} className="group relative bg-white rounded-[2.5rem] shadow-sm hover:shadow-[0_30px_60px_rgba(35,61,77,0.12)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
                                {/* Vehicle Image Wrapper */}
                                <div className="h-80 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-100 p-12">
                                    <Image
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20 backdrop-blur-md border border-white/10">
                                        {vehicle.type}
                                    </div>
                                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md text-primary px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-primary/20 shadow-sm flex items-center space-x-1.5 animate-pulse">
                                        <Zap className="w-3 h-3" />
                                        <span>Starts $80</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    {/* Vehicle Name */}
                                    <h3 className="text-2xl font-display font-black text-accent mb-3 tracking-tight">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-gray-500 font-medium text-sm mb-6 line-clamp-2">
                                        {vehicle.description}
                                    </p>

                                    {/* Capacity Indicators */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-50 p-4 rounded-2xl flex items-center space-x-3 border border-gray-100/50">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/10">
                                                <Users className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-black text-accent tracking-tighter">{vehicle.passengers}</div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Pax</div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-2xl flex items-center space-x-3 border border-gray-100/50">
                                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/10">
                                                <Luggage className="w-5 h-5 text-accent" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-black text-accent tracking-tighter">{vehicle.luggage}</div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Bags</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8 flex-grow">
                                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 text-gray-600">
                                                <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Book Button */}
                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center justify-center space-x-3 bg-accent text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/20 transition-all"
                                    >
                                        <span>Book This Vehicle</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section-padding bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                            <h3 className="text-2xl font-display font-black text-accent mb-8 flex items-center tracking-tight">
                                <Sparkles className="w-6 h-6 text-primary mr-3" />
                                All Vehicles Include
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Multi-zone Air Conditioning',
                                    'Premium GPS Navigation',
                                    'USB Rapid Charging Ports',
                                    'Luxury Leather Seating',
                                    'Maximum Luggage Space',
                                    'Daily Sanitary Maintenance',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-gray-600 font-semibold text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="group relative bg-[#0A192F] rounded-[2.5rem] p-10 shadow-xl overflow-hidden text-white">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                            <h3 className="text-2xl font-display font-black mb-8 flex items-center tracking-tight">
                                <ShieldCheck className="w-6 h-6 text-primary mr-3" />
                                Safety Standards
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Rigorous Safety Inspections',
                                    'Fire Suppression Systems',
                                    'Complete First Aid Kits',
                                    '3-Point Safety Belts',
                                    '24/7 GPS Fleet Tracking',
                                    'Advanced Stability Control',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-white/70 font-semibold text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}
