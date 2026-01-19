'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Navigation, Shield, Sparkles, Star } from 'lucide-react';
import { getQuickWhatsAppLink } from '@/lib/whatsapp';

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 3);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#0A192F] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Umrah Taxi Hero Background"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* Lighter overlays for better image visibility */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/40 via-transparent to-transparent"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-white">Licensed & Certified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-white">4.9/5 Rating</span>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                                <span className="text-primary italic">Premium</span>
                                <br />
                                Umrah Taxi
                                <br />
                                <span className="text-4xl md:text-5xl lg:text-6xl text-white/90">Professional Service</span>
                            </h1>

                            <p className="text-xl text-white font-medium leading-relaxed max-w-xl drop-shadow-md">
                                Experience seamless travel between Holy Cities with our
                                luxury fleet and professional chauffeurs dedicated to your spiritual journey.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href={getQuickWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:scale-[1.05] shadow-2xl shadow-primary/40"
                            >
                                <span className="relative z-10">Book via WhatsApp</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Route Buttons */}
                    <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className=" border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-primary" />
                                Popular Transfers
                            </h2>

                            <div className="grid gap-4">
                                {[
                                    { name: 'Makkah ↔ Madinah', slug: 'makkah-to-madinah', price: '$150' },
                                    { name: 'Jeddah ↔ Makkah', slug: 'jeddah-airport-to-makkah', price: '$50' },
                                    { name: 'Jeddah ↔ Madinah', slug: 'jeddah-airport-to-madinah', price: '$180' },
                                    { name: 'Makkah Ziyarat', slug: 'makkah-ziyarat', price: '$80' }
                                ].map((route, index) => (
                                    <Link
                                        key={index}
                                        href={`/routes/${route.slug}`}
                                        className="group bg-white/5 hover:bg-white/20 border border-white/10 hover:border-primary/50 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 hover:translate-x-2"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                                <Navigation className="w-6 h-6 text-primary group-hover:text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{route.name}</h3>
                                                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Premium Transfer</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-primary">{route.price}</div>
                                            <div className="text-[10px] text-white/40 font-black uppercase tracking-tighter">Instant Book</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/routes"
                                className="mt-8 w-full py-4 rounded-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                View All Routes
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-white/50 animate-pulse font-bold tracking-widest uppercase">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}