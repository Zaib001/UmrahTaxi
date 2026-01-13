'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, Car, ArrowRight, Zap, Info } from 'lucide-react';
import { cities, vehicles } from '@/lib/data';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function QuickBooking() {
    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        date: '',
        vehicle: '',
        passengers: 1,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappLink = generateWhatsAppLink(formData);
        window.open(whatsappLink, '_blank');
    };

    return (
        <section className="section-padding bg-accent relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-right pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-highlight/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        {/* Left Side Content */}
                        <div className="lg:col-span-2 text-white">
                            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/10">
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-[10px] uppercase font-black tracking-widest">Instant Quotes</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                                Ready to <span className="text-primary italic">Begin</span> Your Journey?
                            </h2>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">
                                Book your premium transfer in under 60 seconds. Our operators are standing by to confirm your booking.
                            </p>

                            <div className="space-y-6">
                                {[
                                    'Fixed pricing, no surprises',
                                    '24/7 WhatsApp support',
                                    'Meet & Greet included'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-white/80 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Form */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-3xl shadow-accent-dark/50 relative overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    {/* Pickup Location */}
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-2 text-accent font-black text-xs uppercase tracking-widest">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>Pickup City</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.pickup}
                                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-primary focus:ring-0 transition-all font-bold text-accent"
                                        >
                                            <option value="">Choose city</option>
                                            {cities.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Drop-off Location */}
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-2 text-accent font-black text-xs uppercase tracking-widest">
                                            <MapPin className="w-4 h-4 text-highlight" />
                                            <span>Drop-off City</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.dropoff}
                                            onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-primary focus:ring-0 transition-all font-bold text-accent"
                                        >
                                            <option value="">Choose city</option>
                                            {cities.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Date */}
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-2 text-accent font-black text-xs uppercase tracking-widest">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>Travel Date</span>
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-primary focus:ring-0 transition-all font-bold text-accent"
                                        />
                                    </div>

                                    {/* Vehicle Type */}
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-2 text-accent font-black text-xs uppercase tracking-widest">
                                            <Car className="w-4 h-4 text-primary" />
                                            <span>Vehicle Class</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.vehicle}
                                            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-primary focus:ring-0 transition-all font-bold text-accent"
                                        >
                                            <option value="">Choose vehicle</option>
                                            {vehicles.map((vehicle) => (
                                                <option key={vehicle.id} value={vehicle.name}>
                                                    {vehicle.name} ({vehicle.passengers} Pax)
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-accent-dark text-white font-black py-5 rounded-2xl text-lg flex items-center justify-center space-x-4 transition-all shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] group"
                                >
                                    <span>Proceed to Official Booking</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
                                    <Info className="w-4 h-4" />
                                    <p className="text-[10px] uppercase font-bold tracking-widest">
                                        Secure redirection to official WhatsApp channel
                                    </p>
                                </div>

                                {/* Abstract accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
