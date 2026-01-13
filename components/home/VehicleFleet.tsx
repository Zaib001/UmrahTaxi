'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Luggage, Check, ArrowRight, Zap } from 'lucide-react';
import { vehicles } from '@/lib/data';

export default function VehicleFleet() {
    // Show only the first 6 vehicles on the home page
    const featuredVehicles = vehicles.slice(0, 6);

    return (
        <section className="section-padding bg-gray-50/50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute -left-20 top-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-accent mb-8 tracking-tighter leading-tight">
                        Our <span className="text-gradient">Elite Fleet</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        A curated selection of 15+ modern, luxury vehicles tailored for every pilgrimage requirement.
                    </p>
                </div>

                {/* Vehicles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {featuredVehicles.map((vehicle, index) => (
                        <div
                            key={vehicle.id}
                            className="group relative bg-white rounded-[2.5rem] shadow-sm hover:shadow-[0_40px_80px_rgba(35,61,77,0.12)] transition-all duration-700 border border-gray-100 overflow-hidden flex flex-col h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Decorative Blob (Hover) */}
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>

                            {/* Vehicle Image */}
                            <div className="h-72 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 border-b border-gray-100 p-10">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20 backdrop-blur-md">
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
                                <p className="text-gray-500 font-medium text-sm mb-8 line-clamp-2">
                                    {vehicle.description}
                                </p>

                                {/* Capacity Info */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-2xl flex items-center space-x-3 border border-gray-100/50 group-hover:bg-primary/5 transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                            <Users className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-accent tracking-tighter">{vehicle.passengers}</div>
                                            <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Pax</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-2xl flex items-center space-x-3 border border-gray-100/50 group-hover:bg-accent/5 transition-colors">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                                            <Luggage className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-accent tracking-tighter">{vehicle.luggage}</div>
                                            <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Bags</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-3 mb-10 flex-grow">
                                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 text-gray-600">
                                            <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Book Button */}
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center space-x-4 bg-accent text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/30 transition-all duration-500"
                                >
                                    <span>Reserve Vehicle</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Footer */}
                <div className="text-center animate-slide-up">
                    <Link href="/fleet" className="inline-flex items-center space-x-6 bg-[#0A192F] px-12 py-6 rounded-[2.5rem] font-black text-white shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group border border-white/10">
                        <span className="text-lg uppercase tracking-widest text-nowrap">View Complete 2026 Fleet</span>
                        <div className="bg-primary p-2.5 rounded-xl group-hover:rotate-[360deg] transition-all duration-700">
                            <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
