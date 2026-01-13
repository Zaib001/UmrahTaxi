import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Link from 'next/link';
import { services } from '@/lib/data';
import { ArrowRight, Plane, Navigation, MapPin, Users, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
    Plane,
    Navigation,
    MapPin,
    Users,
};

export default function ServicesPage() {
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
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Elite Fleet & Travel</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
                            Our <span className="text-primary italic">Elite</span> <br />
                            Transport Services
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium">
                            Tailored transportation solutions designed for spiritual peace and maximum comfort.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || MapPin;
                            return (
                                <div key={service.id} className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-[0_30px_60px_rgba(35,61,77,0.12)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
                                    {/* Card Background Pattern (Hover) */}
                                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                    <div className="relative z-10 flex items-start space-x-6 mb-8">
                                        <div className="w-20 h-20 bg-accent/5 rounded-[2rem] flex items-center justify-center flex-shrink-0 border border-accent/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                                            <Icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-display font-black text-accent mb-3 tracking-tight">
                                                {service.name}
                                            </h3>
                                            <p className="text-gray-500 font-medium leading-relaxed">{service.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 space-y-4 mb-10 flex-grow">
                                        <h4 className="text-xs font-black text-accent uppercase tracking-widest flex items-center">
                                            <Zap className="w-3.5 h-3.5 text-primary mr-2" />
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-3 text-gray-600">
                                                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <ShieldCheck className="w-3 h-3 text-primary" />
                                                    </div>
                                                    <span className="text-sm font-semibold">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative z-10 pt-6 border-t border-gray-50">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center space-x-3 bg-accent text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-accent/20 group-hover:bg-primary group-hover:shadow-primary/20 transition-all"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[#0A192F] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tight">
                        Ready to <span className="text-primary italic">Begin</span> Your Journey?
                    </h2>
                    <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Experience the gold standard in Umrah transportation. Licensed, reliable, and available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking" className="bg-primary hover:bg-highlight text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/30 hover:scale-105 text-sm uppercase tracking-widest">
                            Book Now
                        </Link>
                        <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-black px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:scale-105 text-sm uppercase tracking-widest">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <StickyButtons />
            <Footer />
        </main>
    );
}
