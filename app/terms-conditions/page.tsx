import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Gavel, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function TermsConditions() {
    return (
        <main className="bg-[#F8FAFC] min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#0A192F] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px] -ml-48 -mt-48"></div>
                </div>
                <div className="container-custom px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Terms & Conditions</h1>
                    <p className="text-white/60 font-medium max-w-2xl mx-auto">The clear framework for our service agreement during your pilgrimage journey.</p>
                </div>
            </section>

            <div className="section-padding -mt-10 relative z-20">
                <div className="container-custom px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-16">
                            <Link href="/" className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform">
                                <ArrowLeft className="w-4 h-4" />
                                <span>Back to Home</span>
                            </Link>

                            <div className="prose prose-lg prose-slate max-w-none">
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                        <Gavel className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-display font-black text-accent m-0 tracking-tight">Service Agreement</h2>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-medium mb-12">
                                    By using UmrahTaxi services, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our transportation network in the Kingdom of Saudi Arabia.
                                </p>

                                <div className="border-l-4 border-primary pl-8 py-4 mb-16 bg-primary/5 rounded-r-2xl">
                                    <p className="text-sm font-bold text-accent leading-relaxed italic m-0">
                                        &quot;Our goal is to ensure a smooth, transparent, and respectful environment for both our pilgrims and our professional captains.&quot;
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    <section className="relative">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-black text-xs text-accent">1</div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">Booking & Confirmation</h3>
                                                <p className="text-gray-600">
                                                    All bookings made via our website are subject to availability. A booking is considered officially confirmed only after a direct validation message is sent to you via WhatsApp or Phone by our dispatch center.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="relative">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-black text-xs text-accent">2</div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">Transparent Pricing</h3>
                                                <p className="text-gray-600">
                                                    Our rates are fixed as stated on our Pricing Page. These rates are all-inclusive of tolls and standard fees. However, additional charges may be applied for unscheduled extra stops or waiting times exceeding 60 minutes for airport pickups.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="relative">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-black text-xs text-accent">3</div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">Passenger Conduct</h3>
                                                <p className="text-gray-600">
                                                    In accordance with local laws and the sacred nature of the Holy Cities, passengers are expected to maintain professional conduct. We reserve the right to refuse service for any harmful behavior or requests that violate local regulations.
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

