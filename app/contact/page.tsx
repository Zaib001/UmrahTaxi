import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe, ArrowRight, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { getQuickWhatsAppLink, getCallLink } from '@/lib/whatsapp';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Umrah Taxi Service",
    description: "Get in touch with Umrah Taxi Service for bookings, inquiries, or special group transport requirements. 24/7 support available.",
};

export default function ContactPage() {
    const contactInfo = [
        {
            icon: MessageCircle,
            title: 'WhatsApp Support',
            value: 'Instant Reply',
            link: getQuickWhatsAppLink(),
            label: 'Chat Now',
            color: 'bg-green-500',
        },
        {
            icon: Phone,
            title: 'Call Us 24/7',
            value: '+966 50 000 0000',
            link: getCallLink(),
            label: 'Call Now',
            color: 'bg-primary',
        },
        {
            icon: Mail,
            title: 'Email Queries',
            value: 'info@umrahtaxi.com',
            link: 'mailto:info@umrahtaxi.com',
            label: 'Send Email',
            color: 'bg-secondary',
        },
    ];

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
                            <span>Available 24/7</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            Let&apos;s <span className="text-primary italic">Connect</span> <br />
                            With Our Experts
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            Have questions? Our dedicated team is here to assist with your pilgrimage travel plans.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <Link
                                    key={index}
                                    href={info.link}
                                    className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-[0_30px_60px_rgba(35,61,77,0.12)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col items-center text-center"
                                >
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                    <div className={`w-20 h-20 ${info.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-gray-200 group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-accent mb-2 tracking-tight">{info.title}</h3>
                                    <p className="text-gray-500 font-bold mb-8">{info.value}</p>
                                    <div className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                        <span>{info.label}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center space-x-2 bg-accent/5 text-accent px-4 py-1.5 rounded-full mb-6 font-bold text-[10px] uppercase tracking-[0.2em] border border-accent/10">
                                <MapPin className="w-3 h-3" />
                                <span>Service Coverage</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-accent mb-8 tracking-tight leading-tight">
                                Covering <span className="text-gradient">Every Road</span> <br />In The Holy Cities
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Jeddah International', desc: 'Pickup from King Abdulaziz Airport (JED) 24/7.' },
                                    { title: 'The Holy Makkah', desc: 'Door-to-door service to every hotel and the Haram.' },
                                    { title: 'Madinah Al Munawwarah', desc: 'Prompt transfers to Prophet\'s Mosque area & hotels.' },
                                    { title: 'Inter-City Routes', desc: 'Smooth highway transfers between Makkah and Madinah.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-5">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                            <ShieldCheck className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-accent tracking-tight">{item.title}</h4>
                                            <p className="text-gray-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-square bg-[#0A192F] rounded-[4rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/10 rounded-full animate-float slow"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border border-white/20 rounded-full animate-float"></div>

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 relative z-10">
                                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform">
                                        <Globe className="w-12 h-12 text-primary animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-white mb-4 tracking-tight">Across Saudi Arabia</h3>
                                    <p className="text-white/60 font-medium text-lg leading-relaxed">
                                        Providing premium transportation 365 days a year with licensed professional captains.
                                    </p>
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
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
