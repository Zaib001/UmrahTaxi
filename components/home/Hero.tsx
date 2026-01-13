'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Sparkles, Star } from 'lucide-react';
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
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px)] bg-[size:100px_100px] animate-grid-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1E3A8A,transparent_70%)] opacity-10"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-white/90">Licensed & Certified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-white/90">4.9/5 Rating</span>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                <span className="text-primary">Elevate</span> Your
                                <br />
                                <span className="relative inline-block">
                                    Spiritual
                                    <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-primary animate-spin-slow" />
                                </span>
                                <br />
                                Journey
                            </h1>

                            <p className="text-xl text-white/60 leading-relaxed">
                                Premium private transportation for Umrah pilgrims.
                                Experience seamless travel between Holy Cities with our
                                luxury fleet and professional service.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                '24/7 Professional Service',
                                'Luxury Fleet 2024',
                                'Door-to-Door Service',
                                'Multilingual Drivers'
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-white/80 group-hover:text-white transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <a
                                href={getQuickWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">Book Now</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link
                                href="/fleet"
                                className="group bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <span>View Our Fleet</span>
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-12">
                            {[
                                { value: '10+', label: 'Years' },
                                { value: '5000+', label: 'Pilgrims' },
                                { value: '100%', label: 'Safety' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Vehicle Showcase */}
                    <div className={`relative h-[600px] transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        {/* Vehicle Slides */}
                        <div className="relative w-full h-full">
                            {[
                                { src: '/vehicles/gmc_yukon.png', name: 'GMC Yukon XL', passengers: '8 Passengers' },
                                { src: '/vehicles/toyota_hiace.png', name: 'Toyota Hiace VIP', passengers: '10 Passengers' },
                                { src: '/vehicles/toyota_granvia.png', name: 'Toyota Granvia', passengers: '6 Passengers' }
                            ].map((vehicle, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ${activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                        }`}
                                >
                                    {/* Vehicle Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={vehicle.src}
                                            alt={vehicle.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority={index === 0}
                                        />
                                    </div>

                                    {/* Vehicle Info */}
                                    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-center transition-all duration-500 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                        }`}>
                                        <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                                        <div className="flex items-center justify-center gap-4">
                                            <span className="text-white/70">Luxury Class</span>
                                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                                            <span className="text-white/70">{vehicle.passengers}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index
                                        ? 'bg-primary w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`View vehicle ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-xs animate-float-slow">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Instant Booking</h4>
                                    <p className="text-sm text-white/70">Confirm your vehicle in less than 5 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-white/50 animate-pulse">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}