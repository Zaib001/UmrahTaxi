'use client';

import { Search, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
    const steps = [
        {
            icon: <Search className="w-8 h-8 text-primary" />,
            title: 'Choose Route',
            description: 'Select your pickup and destination cities from our popular routes.',
            number: '01'
        },
        {
            icon: <Calendar className="w-8 h-8 text-primary" />,
            title: 'Book Online',
            description: 'Fill in your details or book directly via WhatsApp in seconds.',
            number: '02'
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-primary" />,
            title: 'Enjoy Your Ride',
            description: 'A professional driver will meet you on time with a clean vehicle.',
            number: '03'
        }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-20 tracking-tight">
                    <h2 className="text-accent text-sm font-black uppercase tracking-[0.3em] mb-4">Simple Process</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-accent">
                        How It <span className="text-gradient">Works</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-12 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl shadow-gray-200/50 flex items-center justify-center mb-8 border border-gray-50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
                                <span className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-black text-sm border-4 border-white">
                                    {step.number}
                                </span>
                                {step.icon}
                            </div>
                            <h4 className="text-2xl font-display font-black text-accent mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h4>
                            <p className="text-gray-500 max-w-xs leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/booking" className="btn-primary inline-flex items-center space-x-3 px-10 py-5 rounded-2xl group shadow-2xl shadow-primary/30">
                        <span>Get Started Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
