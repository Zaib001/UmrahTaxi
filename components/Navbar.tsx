'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { getQuickWhatsAppLink, getCallLink } from '@/lib/whatsapp';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Routes', href: '/routes' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-50">
            {/* Top Bar - Animated height to prevent jitter */}
            <div
                className={`bg-accent text-white hidden md:block border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-20 opacity-100 py-2'
                    }`}
            >
                <div className="container-custom flex justify-between items-center text-xs font-medium tracking-wide">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            <span>24/7 Availability</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span>Makkah, Madinah, Jeddah</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>Specializing in Umrah Pilgrims</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav
                className={`transition-all duration-500 ease-in-out ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-white py-5'
                    }`}
            >
                <div className="container-custom px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-gradient-to-br from-primary to-highlight p-2.5 rounded-xl group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-2xl font-display font-black text-accent leading-none tracking-tight">
                                    UMRAH<span className="text-primary">TAXI</span>
                                </h1>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mt-0.5">Premium Service</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-accent/80 hover:text-primary font-semibold transition-all duration-300 relative group overflow-hidden"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href={getQuickWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-accent font-bold hover:text-primary transition-colors"
                            >
                                <MessageCircle className="w-5 h-5 text-primary" />
                                <span className="text-sm">WhatsApp</span>
                            </a>
                            <Link
                                href="/booking"
                                className="bg-accent text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 shadow-md hover:shadow-primary/20 active:scale-95"
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-accent hover:text-primary transition-colors rounded-lg bg-gray-50/50"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] mt-4 pb-6 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-accent hover:text-primary font-bold py-3 px-4 rounded-xl hover:bg-primary/5 transition-all text-lg border-b border-gray-50"
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 grid grid-cols-2 gap-3">
                                <a
                                    href={getQuickWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] text-white flex items-center justify-center py-3 rounded-xl font-bold space-x-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href={getCallLink()}
                                    className="bg-primary text-white flex items-center justify-center py-3 rounded-xl font-bold space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
