'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ChevronDown,
    HelpCircle,
    MessageCircle,
    ArrowRight,
    Search,
    Car,
    Clock,
    CreditCard,
    ShieldCheck
} from 'lucide-react';

const faqs = [
    {
        category: "Bookings",
        icon: Car,
        questions: [
            {
                q: "How do I book a taxi for Umrah?",
                a: "Booking is simple. You can use our online booking form or message us directly on WhatsApp. Once you provide your details, our team will confirm your booking instantly."
            },
            {
                q: "Do I need to pay in advance?",
                a: "No, you don't. We follow a 'Pay to Driver' policy. You can pay the fixed amount directly to your captain after reaching your destination in cash (SAR)."
            },
            {
                q: "Can I book a multi-city journey?",
                a: "Yes! We specialize in Makkah, Madinah, and Jeddah transfers. You can book a full circuit (Jeddah → Makkah → Madinah → Jeddah) through our WhatsApp concierge."
            }
        ]
    },
    {
        category: "Service & Quality",
        icon: ShieldCheck,
        questions: [
            {
                q: "Are the vehicles private or shared?",
                a: "All our services are 100% private. You will have the entire vehicle for yourself and your family/group, ensuring maximum comfort and privacy."
            },
            {
                q: "What types of vehicles do you provide?",
                a: "Our fleet includes the latest models of GMC Yukon, Chevrolet Tahoe, Hyundai Starex, and Toyota Coaster for larger groups."
            }
        ]
    },
    {
        category: "Pricing & Fees",
        icon: CreditCard,
        questions: [
            {
                q: "Are the prices fixed?",
                a: "Yes, our prices are fixed and all-inclusive of tolls and fees. The price you see or are quoted on WhatsApp is exactly what you pay."
            },
            {
                q: "Is there an extra charge for airport waiting?",
                a: "We provide 60 minutes of free waiting time at the airport after your flight lands. Our drivers track your flight in real-time to ensure they are there when you arrive."
            }
        ]
    }
];

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggleAccordion = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <main className="bg-[#F8FAFC] min-h-screen">
            <Navbar />

            {/* Premium FAQ Header */}
            <section className="relative pt-32 pb-48 bg-[#0A192F] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -mr-48 -mt-48"></div>
                </div>
                <div className="container-custom px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tight">
                            Common <span className="text-primary italic">Inquiries</span>
                        </h1>
                        <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto mb-12">
                            Everything you need to know about your pilgrimage transportation, simplified for your peace of mind.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative group">
                            <input
                                type="text"
                                placeholder="Search for your question..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-8 pl-14 text-white font-medium focus:border-primary focus:bg-white/10 outline-none transition-all shadow-2xl backdrop-blur-md"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/30 group-focus-within:text-primary transition-colors" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Accordions */}
            <section className="relative z-20 -mt-24 pb-24">
                <div className="container-custom px-4">
                    <div className="max-w-4xl mx-auto space-y-10">

                        {faqs.map((cat, catIdx) => (
                            <div key={catIdx} className="space-y-6">
                                <div className="flex items-center space-x-3 px-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <cat.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-display font-black text-accent uppercase tracking-[0.2em]">{cat.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {cat.questions.map((faq, faqIdx) => {
                                        const idx = `${catIdx}-${faqIdx}`;
                                        const isOpen = openIndex === idx;

                                        // Simple filter
                                        if (searchTerm && !faq.q.toLowerCase().includes(searchTerm.toLowerCase()) && !faq.a.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return null;
                                        }

                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={false}
                                                className={`bg-white rounded-3xl border transition-all duration-300 ${isOpen ? 'border-primary shadow-xl ring-4 ring-primary/5' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}
                                            >
                                                <button
                                                    onClick={() => toggleAccordion(idx)}
                                                    className="w-full text-left px-8 py-7 flex items-center justify-between group"
                                                >
                                                    <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-accent'}`}>
                                                        {faq.q}
                                                    </span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                                                        <ChevronDown className="w-5 h-5" />
                                                    </div>
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
                                                                <div className="h-px w-full bg-gray-100 mb-6 font-display"></div>
                                                                {faq.a}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Still Have Questions CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-accent rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-black mb-4">Still have questions?</h3>
                                <p className="text-white/60 mb-8 max-w-lg mx-auto font-medium">
                                    Our executive concierge is available 24/7 on WhatsApp to assist you with any custom requests or specialized travel needs.
                                </p>
                                <a
                                    href="https://wa.me/966571556381"
                                    target="_blank"
                                    className="inline-flex items-center space-x-3 bg-primary text-white py-5 px-10 rounded-2xl font-display font-black text-lg transition-all hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:scale-95"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Chat with an Expert</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
