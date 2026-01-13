import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { Shield, Users, Award, Clock, Target, Heart, Zap, Navigation, MapPin, Check } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Umrah Taxi Service",
    description: "Learn more about Umrah Taxi Service, our mission to provide the best transportation for pilgrims, and our commitment to safety and quality.",
};

export default function AboutPage() {
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
                            <Zap className="w-3.5 h-3.5" />
                            <span>Established 2014</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            The <span className="text-primary italic">Trusted</span> Name <br />
                            in Umrah Travel
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            Your elite partner for reliable and luxury transportation services for pilgrims in the Holy Cities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-accent mb-8 tracking-tight">
                                Who <span className="text-gradient">We Are</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 leading-relaxed font-medium text-lg">
                                <p>
                                    UmrahTaxi is a premier transportation service dedicated to excellence, specifically serving pilgrims visiting the holy cities of Makkah and Madinah. With over a decade of specialized experience, we set the benchmark for luxury pilgrim travel.
                                </p>
                                <p>
                                    Our mission is to provide an uninterrupted spiritual experience. While you focus on your prayers, we handle every logistical detail with precision and care.
                                </p>
                                <div className="flex items-center space-x-4 pt-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-accent font-black text-sm uppercase tracking-widest">Ministry of Transport Licensed</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Users, label: '10K+', sub: 'Pilgrims Served', color: 'primary' },
                                { icon: Navigation, label: '500K+', sub: 'KM Traveled', color: 'secondary' },
                                { icon: Award, label: '10+', sub: 'Years Excellence', color: 'highlight' },
                                { icon: Clock, label: '24/7', sub: 'Live Support', color: 'primary' },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_15px_40px_rgba(35,61,77,0.08)] transition-all duration-500 text-center relative overflow-hidden">
                                        <div className="absolute -right-5 -bottom-5 w-16 h-16 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <Icon className={`w-10 h-10 text-${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                                            <div className="text-3xl font-display font-black text-accent mb-1">{item.label}</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{item.sub}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-accent mb-6 tracking-tight">
                            Our Core <span className="text-gradient">Values</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Safety Protocol',
                                description: 'We maintain the highest safety standards with fully vetted drivers and real-time GPS tracking for every journey.',
                            },
                            {
                                icon: Heart,
                                title: 'Pilgrim Care',
                                description: 'Every traveler is a Guest of Allah. We treat your journey with the sacred respect and devotion it deserves.',
                            },
                            {
                                icon: Award,
                                title: 'Elite Standards',
                                description: 'From Makkah to Madinah, we deliver a seamless, premium experience that exceeds traditional expectations.',
                            },
                        ].map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="group relative bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-[0_20px_50px_rgba(35,61,77,0.1)] transition-all duration-500 border border-gray-100 overflow-hidden text-center">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed font-medium">{value.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Driver & Vehicle Standards */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-20 tracking-tight">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-accent">
                            Professional <span className="text-gradient">Standards</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="group relative bg-[#0A192F] rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl">
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125"></div>
                            <h3 className="text-3xl font-display font-black mb-8 flex items-center">
                                <Users className="w-8 h-8 text-primary mr-4" />
                                Our Captains
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    '100% Background Verified & Vetted',
                                    'Expert knowledge of Holy Sites',
                                    'Fluent in Arabic, English & Urdu',
                                    'Specialized training in Pilgrim care',
                                    'Clean, professional uniform policy',
                                    'Safe driving certification'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-4">
                                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="group relative bg-[#215E61] rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl">
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125"></div>
                            <h3 className="text-3xl font-display font-black mb-8 flex items-center">
                                <Navigation className="w-8 h-8 text-primary mr-4" />
                                Our Fleet
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Luxury GMC & VIP Vehicles',
                                    'Sanitized before every booking',
                                    'Ice-cold multi-zone AC systems',
                                    'Complimentary high-speed WiFi',
                                    'Daily maintenance inspections',
                                    'Generous luggage capacity'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-4">
                                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white/80 font-medium">{item}</span>
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
