'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { getQuickWhatsAppLink, getCallLink } from '@/lib/whatsapp';

export default function StickyButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
            {/* WhatsApp Button */}
            <a
                href={getQuickWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
            >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow">
                    <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Book on WhatsApp
                </span>
            </a>

            {/* Call Button */}
            <a
                href={getCallLink()}
                className="group relative"
            >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                    <Phone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Call Now
                </span>
            </a>
        </div>
    );
}
