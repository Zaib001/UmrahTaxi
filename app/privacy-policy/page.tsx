import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Share2 } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="bg-[#F8FAFC] min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#0A192F] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -mr-48 -mt-48"></div>
                </div>
                <div className="container-custom px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">Privacy Policy</h1>
                    <p className="text-white/60 font-medium max-w-2xl mx-auto">Your trust is our most valuable asset. Learn how we protect and respect your personal information.</p>
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
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-display font-black text-accent m-0 tracking-tight">Data Commitment</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium mb-12">
                                    At UmrahTaxi, we are deeply committed to protecting your privacy. We understand the sacred nature of your journey and treat your personal data with equal reverence and care. This policy explains how we collect and use your information when you engage with our services.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <Lock className="w-8 h-8 text-primary mb-4" />
                                        <h4 className="font-display font-bold text-accent mb-2">Secure Storage</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">All booking data is encrypted using industry-standard protocols.</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <EyeOff className="w-8 h-8 text-primary mb-4" />
                                        <h4 className="font-display font-bold text-accent mb-2">No Tracking</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">We do not use invasive tracking or sell your data to third parties.</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <Share2 className="w-8 h-8 text-primary mb-4" />
                                        <h4 className="font-display font-bold text-accent mb-2">Minimal Sharing</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">Information is only shared with your assigned driver for transport.</p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    <section>
                                        <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">1. Information We Collect</h3>
                                        <p className="text-gray-600">
                                            We collect information you provide directly to us when booking or inquiring about a journey. This includes your name, WhatsApp number, and specific travel details (flight numbers, pickup/drop-off locations).
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">2. How We Use Information</h3>
                                        <p className="text-gray-600">
                                            The primary use of your information is to facilitate and confirm your transportation request. We use your WhatsApp number to provide instant booking confirmations and real-time support during your stay in the Holy Cities.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-2xl font-display font-black text-accent mb-4 tracking-tight">3. Data Integrity</h3>
                                        <p className="text-gray-600">
                                            We maintain strict internal controls over who can access passenger data. Your information is strictly limited to our dispatch team and the specific driver assigned to your route.
                                        </p>
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

