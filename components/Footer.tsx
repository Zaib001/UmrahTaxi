'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { getQuickWhatsAppLink, getCallLink } from '@/lib/whatsapp';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent text-white">
            {/* Main Footer */}
            <div className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="bg-gradient-primary p-2 rounded-lg">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-display font-bold">
                                    Umrah<span className="text-primary">Taxi</span>
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your trusted partner for reliable and comfortable transportation services for Umrah pilgrims in Saudi Arabia.
                            </p>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-display font-semibold mb-4 text-primary">Quick Links</h4>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'About Us', href: '/about' },
                                    { name: 'Services', href: '/services' },
                                    { name: 'Fleet', href: '/fleet' },
                                    { name: 'Booking', href: '/booking' },
                                    { name: 'Contact', href: '/contact' },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-display font-semibold mb-4 text-primary">Our Services</h4>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Umrah Taxi', href: '/services/umrah-taxi' },
                                    { name: 'Airport Transfer', href: '/services/airport-transfer' },
                                    { name: 'Ziyarat Tours', href: '/services/ziyarat-tours' },
                                    { name: 'City Transfers', href: '/services/city-transfers' },
                                    { name: 'Group Transport', href: '/services/group-transport' },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-display font-semibold mb-4 text-primary">Contact Us</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3 text-sm">
                                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-300">24/7 Support</p>
                                        <a href={getCallLink()} className="text-white hover:text-primary transition-colors">
                                            +966 50 000 0000
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3 text-sm">
                                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-300">WhatsApp</p>
                                        <a
                                            href={getQuickWhatsAppLink()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-primary transition-colors"
                                        >
                                            Chat with us
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3 text-sm">
                                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-300">Email</p>
                                        <a href="mailto:info@umrahtaxi.com" className="text-white hover:text-primary transition-colors">
                                            info@umrahtaxi.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3 text-sm">
                                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-300">Service Area</p>
                                        <p className="text-white">Makkah, Madinah, Jeddah</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="container-custom px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} UmrahTaxi. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-conditions" className="text-gray-400 hover:text-primary transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="/refund-policy" className="text-gray-400 hover:text-primary transition-colors">
                                Refund Policy
                            </Link>
                            <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
