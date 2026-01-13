'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Navigation, Zap } from 'lucide-react';
import { routes } from '@/lib/data';

export default function PopularRoutes() {
    // Show only first 6 routes
    const popularRoutes = routes.slice(0, 6);

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -right-20 top-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-8 font-black text-[10px] uppercase tracking-[0.2em] border border-primary/20 shadow-sm">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Best Sellers Bookings</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-black text-accent mb-8 tracking-tighter leading-tight">
                        Popular <span className="text-gradient">Routes</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        Experience spiritual peace with our most requested transfers, meticulously timed for your convenience.
                    </p>
                </div>

                {/* Routes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {popularRoutes.map((route, index) => (
                        <Link
                            key={route.id}
                            href={`/routes/${route.slug}`}
                            className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-[0_40px_80px_rgba(35,61,77,0.1)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Decorative Blob (Hover) */}
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>

                            {/* Route Destinations */}
                            <div className="relative z-10 mb-10 flex items-start justify-between gap-4">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/10 group-hover:scale-110 transition-transform">
                                            <Navigation className="w-5 h-5 text-accent" />
                                        </div>
                                        <span className="text-2xl font-black text-accent tracking-tighter">{route.from}</span>
                                    </div>
                                    <div className="ml-5 h-8 border-l-2 border-dashed border-gray-200"></div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-2xl font-black text-accent tracking-tighter">{route.to}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-display font-black text-primary drop-shadow-sm">
                                        ${route.price}
                                    </div>
                                    <div className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] mt-2">Starts From</div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-10"></div>

                            {/* Route Details */}
                            <div className="relative z-10 flex items-center space-x-8 mb-10 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                                <div className="flex items-center space-x-3 group-hover:text-primary transition-colors">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>{route.duration}</span>
                                </div>
                                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                                <div className="flex items-center space-x-3 group-hover:text-primary transition-colors">
                                    <Navigation className="w-4 h-4 text-primary" />
                                    <span>{route.distance}</span>
                                </div>
                            </div>

                            <p className="relative z-10 text-gray-500 text-sm mb-12 leading-relaxed font-medium italic">
                                &ldquo;{route.description}&rdquo;
                            </p>

                            {/* CTA Action */}
                            <div className="relative z-10 flex items-center justify-between">
                                <span className="bg-accent text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/30 transition-all duration-500">
                                    Book Transfer
                                </span>
                                <div className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Explore All Footer */}
                <div className="text-center animate-slide-up">
                    <Link href="/routes" className="inline-flex items-center space-x-6 bg-[#0A192F] px-12 py-6 rounded-[2.5rem] font-black text-white shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group border border-white/10">
                        <span className="text-lg uppercase tracking-widest">Explore All 2026 Routes</span>
                        <div className="bg-primary p-2.5 rounded-xl group-hover:rotate-[360deg] transition-all duration-700">
                            <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
