import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, XCircle, DollarSign, Clock } from 'lucide-react';

export default function RefundPolicy() {
    return (
        <main className="bg-[#F8FAFC] min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#0A192F] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[100px] -mr-48 -mb-48"></div>
                </div>
                <div className="container-custom px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">Refund & Cancellation</h1>
                    <p className="text-white/60 font-medium max-w-2xl mx-auto">Clear policies for a stress-free travel experience, designed to provide peace of mind.</p>
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
                                        <RefreshCw className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-display font-black text-accent m-0 tracking-tight">Fair Policies</h2>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-medium mb-12">
                                    We strive to be as flexible as possible for our pilgrims. We understand that travel plans can change unexpectedly, especially during international pilgrimage.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                    <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 text-center">
                                        <Clock className="w-10 h-10 text-green-600 mx-auto mb-4" />
                                        <h4 className="font-display font-black text-accent m-0 tracking-tight">Free Cancellation</h4>
                                        <p className="text-sm text-gray-500 mt-2 font-medium">Up to 12 hours before pickup</p>
                                    </div>
                                    <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 text-center">
                                        <DollarSign className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                        <h4 className="font-display font-black text-accent m-0 tracking-tight">Hassle-Free</h4>
                                        <p className="text-sm text-gray-500 mt-2 font-medium">Refunds processed within 48h</p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    <section>
                                        <div className="flex items-start space-x-5">
                                            <div className="bg-accent/5 p-3 rounded-xl">
                                                <XCircle className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent mb-3 tracking-tight">Cancellation Window</h3>
                                                <p className="text-gray-600">
                                                    Cancellations made 12 hours or more before the scheduled pickup time are completely free of charge. We appreciate early notification to allow our chauffeurs to adjust their schedules. Cancellations within the 12-hour window may be subject to a nominal convenience fee.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <div className="flex items-start space-x-5">
                                            <div className="bg-primary/5 p-3 rounded-xl">
                                                <RefreshCw className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-accent mb-3 tracking-tight">Refund Processing</h3>
                                                <p className="text-gray-600">
                                                    While most of our clients pay the driver directly at the end of the trip, any prepaid reservations are fully refundable according to the cancellation window above. Refunds are typically processed back to the original payment method within 2-3 business days.
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

