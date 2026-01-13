'use client';

import { ShieldCheck, DollarSign, Clock, Sparkles, Award, Users, Car, Heart } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        {
            icon: ShieldCheck,
            title: 'Licensed Drivers',
            description: 'Our chauffeurs are certified professionals with deep knowledge of Saudi routes.',
            color: 'text-primary',
            bgColor: 'bg-primary/10',
        },
        {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'Fixed-rate guarantees with no hidden surcharges or seasonal price spikes.',
            color: 'text-secondary',
            bgColor: 'bg-secondary/10',
        },
        {
            icon: Clock,
            title: 'Punctuality First',
            description: 'We track flights and monitor traffic to ensure we are always there before you arrive.',
            color: 'text-highlight',
            bgColor: 'bg-highlight/10',
        },
        {
            icon: Sparkles,
            title: 'Immaculate Fleet',
            description: 'Premium vehicles sanitized after every ride for your health and comfort.',
            color: 'text-primary',
            bgColor: 'bg-primary/10',
        },
    ];

    return (
        <section className="section-padding bg-white relative">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-12 h-0.5 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Excellence in Service</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-accent mb-6 leading-tight">
                            The Preferred Choice for <span className="text-gradient">Modern Pilgrims</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                            Combining decades of logistical expertise with a passion for serving the guests of Allah. We don&apos;t just provide a ride; we provide peace of mind.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(35,61,77,0.12)] transition-all duration-700 border border-transparent hover:border-gray-100"
                            >
                                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-[15deg] transition-all duration-500`}>
                                    <Icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-2xl font-display font-black text-accent mb-4 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats / Trust Indicators */}
                <div className="mt-24 pt-16 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: 'Trusted Pilgrims', value: '10,000+', icon: Users },
                            { label: 'Licensed Fleet', value: '50+', icon: Car },
                            { label: 'Service Quality', value: '100%', icon: Award },
                            { label: 'Years of Trust', value: '10+', icon: Heart },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start group">
                                <stat.icon className="w-6 h-6 text-gray-300 mb-4 group-hover:text-primary transition-colors" />
                                <div className="text-3xl md:text-4xl font-display font-black text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase font-black tracking-widest text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
