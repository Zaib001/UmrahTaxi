import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Check, ArrowRight, Plane, Navigation, MapPin, Users, Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = services.find(s => s.slug === params.slug);
    if (!service) return {};

    return {
        title: service.name,
        description: service.description,
        openGraph: {
            title: `${service.name} - Umrah Taxi Service`,
            description: service.description,
        }
    };
}

const iconMap: Record<string, any> = {
    Plane,
    Navigation,
    MapPin,
    Users,
};

export default function ServiceDetailPage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const Icon = iconMap[service.icon] || MapPin;

    return (
        <main>
            <Navbar />

            <section className="pt-16 pb-16 bg-gradient-to-br from-accent via-secondary to-accent-dark text-white">
                <div className="container-custom px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{service.name}</h1>
                        <p className="text-xl text-white/90 leading-relaxed">{service.description}</p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-accent mb-6">Expert <span className="text-gradient">Care</span> for Your Journey</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">We understand the importance of your spiritual visit. Our {service.name} is designed to provide you with peace of mind, allowing you to focus on your prayers while we handle the roads.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {service.features.map((feat, i) => (
                                    <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span className="font-medium text-accent">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="card p-8 bg-accent text-white relative overflow-hidden group">
                                <Heart className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-2xl font-display font-bold mb-4">Dedicated Support</h3>
                                <p className="text-white/70 mb-6">Need a custom arrangement? Our team is available 24/7 to adjust our services to your specific group needs.</p>
                                <Link href="/contact" className="btn-primary inline-flex">Contact Support</Link>
                            </div>
                        </div>

                        <div className="space-y-8 sticky top-24">
                            <div className="card p-8 shadow-2xl border-2 border-primary/10">
                                <h3 className="text-2xl font-display font-bold text-accent mb-6">Quick Booking</h3>
                                <p className="text-gray-500 mb-8 border-b pb-6">Interested in our {service.name}? Click the button below to start your booking via WhatsApp.</p>
                                <Link href="/booking" className="btn-primary w-full py-4 flex items-center justify-center space-x-2">
                                    <span>Book Now</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="card p-8">
                                <h4 className="font-display font-bold text-accent mb-4">Service Area</h4>
                                <p className="text-gray-600 text-sm mb-6">This service is available in Makkah, Madinah, Jeddah, and for transfers across all major Saudi Arabian cities.</p>
                                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                                    <span className="bg-gray-100 px-3 py-1 rounded">Makkah</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded">Madinah</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded">Jeddah</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded">Taif</span>
                                </div>
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
