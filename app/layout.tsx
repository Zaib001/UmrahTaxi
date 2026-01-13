import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://umrahtaxi.com'),
    title: {
        default: "Umrah Taxi Service - Premium Transport in Makkah & Madinah",
        template: "%s | Umrah Taxi Service"
    },
    description: "Book professional Umrah taxi services in Saudi Arabia. Premium transfers between Jeddah Airport, Makkah, and Madinah. Licensed drivers, 24/7 service, and fixed pricing.",
    keywords: ["umrah taxi", "makkah taxi", "madinah taxi", "jeddah airport transfer", "pilgrim transport", "ziyarat tours saudi arabia", "luxury umrah transport"],
    authors: [{ name: "Umrah Taxi Service" }],
    creator: "Umrah Taxi Service",
    publisher: "Umrah Taxi Service",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Umrah Taxi Service - Premium Transport for Pilgrims",
        description: "Professional, licensed taxi service for your spiritual journey. Makkah, Madinah, and Jeddah transfers.",
        url: 'https://umrahtaxi.com',
        siteName: 'Umrah Taxi Service',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Umrah Taxi Service - Premium Transport for Pilgrims',
        description: 'Professional, licensed taxi service for your spiritual journey. Makkah, Madinah, and Jeddah transfers.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Umrah Taxi Service",
        "image": "https://umrahtaxi.com/logo.png",
        "@id": "https://umrahtaxi.com",
        "url": "https://umrahtaxi.com",
        "telephone": "+96600000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Makkah Al Mukarramah",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah",
            "postalCode": "24231",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.4225,
            "longitude": 39.8262
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/umrahtaxi",
            "https://www.instagram.com/umrahtaxi"
        ]
    };

    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
