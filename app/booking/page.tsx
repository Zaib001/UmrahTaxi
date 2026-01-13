'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { cities, vehicles } from '@/lib/data';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    Car,
    MessageCircle,
    ArrowRight,
    Check,
    Sparkles,
    ShieldCheck,
    Info,
    HelpCircle
} from 'lucide-react';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        vehicle: '',
        passengers: 1,
        notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const link = generateWhatsAppLink(formData);
        window.open(link, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            {/* Immersive Dark Header */}
            <section className="relative pt-32 pb-48 bg-[#0A192F] overflow-hidden">
                {/* Visual Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                </div>

                <div className="container-custom px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-primary px-4 py-2 rounded-full mb-8 border border-white/10 shadow-2xl">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-widest italic">Premium Booking Concierge</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight tracking-tight">
                            Reserve Your <span className="text-primary italic">Luxury</span> <br />
                            Pilgrimage Voyage
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed font-medium max-w-2xl mx-auto">
                            Experience the pinnacle of Umrah transportation. Secure your private chauffeur in seconds via our direct WhatsApp gateway.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Booking Content */}
            <section className="relative z-20 -mt-24 pb-24">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Redesigned Form Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-8"
                        >
                            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                                {/* Form Top Accent */}
                                <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-highlight"></div>

                                <div className="p-8 md:p-12 space-y-12">
                                    {/* Personal Information Group */}
                                    <div className="space-y-8">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                                <Users className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent tracking-tight">Passenger Profile</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Identify your journey primary contact</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Full Legal Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    placeholder="e.g. Dr. Mohammed Abdullah"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-accent font-bold focus:border-primary focus:bg-white transition-all outline-none placeholder:text-gray-300 shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1 text-green-600">WhatsApp Connectivity</label>
                                                <div className="relative">
                                                    <input
                                                        type="tel"
                                                        name="whatsapp"
                                                        required
                                                        placeholder="e.g. +966 XXX XXX XXX"
                                                        value={formData.whatsapp}
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 pl-14 text-accent font-bold focus:border-green-500 focus:bg-white transition-all outline-none placeholder:text-gray-300 shadow-sm"
                                                    />
                                                    <MessageCircle className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logistics Group */}
                                    <div className="space-y-8 pt-8 border-t border-gray-50">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20">
                                                <MapPin className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent tracking-tight">Journey Logistics</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select your spiritual path</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Departure Origin</label>
                                                <div className="relative">
                                                    <select name="pickup" required value={formData.pickup} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 appearance-none text-accent font-bold focus:border-primary transition-all outline-none shadow-sm pr-12">
                                                        <option value="">Choose Pickup City</option>
                                                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                                    </select>
                                                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none rotate-90 md:rotate-0" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Final Destination</label>
                                                <div className="relative">
                                                    <select name="dropoff" required value={formData.dropoff} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 appearance-none text-accent font-bold focus:border-highlight transition-all outline-none shadow-sm pr-12">
                                                        <option value="">Choose Drop-off City</option>
                                                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                                    </select>
                                                    <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Preferred Date</label>
                                                <div className="relative">
                                                    <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-accent font-bold focus:border-primary transition-all outline-none shadow-sm" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Exact Pickup Time</label>
                                                <div className="relative">
                                                    <input type="time" name="time" required value={formData.time} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-accent font-bold focus:border-primary transition-all outline-none shadow-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preference Group */}
                                    <div className="space-y-8 pt-8 border-t border-gray-50">
                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="w-12 h-12 bg-highlight/10 rounded-2xl flex items-center justify-center border border-highlight/20">
                                                <Car className="w-6 h-6 text-highlight" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent tracking-tight">Vessel Preferences</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Choose your class of travel</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Vehicle Selection</label>
                                                <select name="vehicle" required value={formData.vehicle} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 appearance-none text-accent font-bold focus:border-primary transition-all outline-none shadow-sm">
                                                    <option value="">Select Elite Vehicle</option>
                                                    {vehicles.map(v => <option key={v.id} value={v.name}>{v.name} ({v.type})</option>)}
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Group Size</label>
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative flex-1">
                                                        <input type="number" name="passengers" min="1" max="50" required value={formData.passengers} onChange={handleChange} className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-accent font-bold focus:border-primary transition-all outline-none shadow-sm pr-12" />
                                                        <Users className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black text-accent uppercase tracking-widest ml-1">Special Instructions & Flight Details</label>
                                            <textarea
                                                name="notes"
                                                rows={4}
                                                placeholder="e.g. Flight SV123 arriving @ 2:00 PM, 2 Child seats requested, Extra luggage (5 bags)..."
                                                value={formData.notes}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-[1.5rem] px-6 py-5 text-accent font-bold focus:border-primary transition-all outline-none placeholder:text-gray-300 shadow-sm resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="w-full group relative flex items-center justify-center py-6 px-10 bg-accent text-white rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(35,61,77,0.3)] active:scale-[0.98]"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative z-10 flex items-center space-x-4">
                                                <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                                                <span className="text-xl font-display font-black tracking-tight">Confirm & Dispatch via WhatsApp</span>
                                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </button>
                                        <p className="text-center mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center space-x-2">
                                            <ShieldCheck className="w-4 h-4 text-primary" />
                                            <span>Secure 256-bit Encrypted Reservation</span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </motion.div>

                        {/* Sidebar Info - Sticky */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Trusted Shield */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-[#0A192F] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl"
                            >
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                                <h4 className="text-2xl font-display font-black mb-6 relative z-10">Pilgrimage <span className="text-primary italic">Assurance</span></h4>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        { icon: Clock, title: '24/7 Live Monitoring', sub: 'Real-time flight & traffic tracking' },
                                        { icon: ShieldCheck, title: 'Licensed Capatains', sub: 'Government vetted & multilingual' },
                                        { icon: Check, title: 'Fixed Rate Policy', sub: 'No hidden taxes or surcharge' },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex space-x-4">
                                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-black tracking-tight">{item.title}</div>
                                                <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">{item.sub}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Booking Summary Mockup / Help */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm"
                            >
                                <div className="flex items-center space-x-3 mb-6">
                                    <HelpCircle className="w-6 h-6 text-primary" />
                                    <h4 className="text-xl font-display font-black text-accent tracking-tight">Need Assistance?</h4>
                                </div>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                                    Our executive concierge is online and ready to assist with custom itineraries or large group bookings.
                                </p>
                                <a
                                    href={generateWhatsAppLink({})}
                                    target="_blank"
                                    className="flex items-center justify-center space-x-3 bg-gray-50 text-accent py-4 rounded-2xl font-black text-xs uppercase tracking-widest border border-gray-100 hover:bg-gray-100 transition-all group"
                                >
                                    <span>Direct Live Chat</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>

                            {/* Trust Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center space-x-4 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                                    <ShieldCheck className="w-6 h-6" />
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">Official UMRAH Service Partner</div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}

