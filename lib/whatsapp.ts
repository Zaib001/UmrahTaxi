import { BookingFormData } from '@/types';

const WHATSAPP_NUMBER = '+966581178888'; // Replace with actual WhatsApp number

export const generateWhatsAppLink = (data: Partial<BookingFormData>): string => {
    const message = formatBookingMessage(data);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const formatBookingMessage = (data: Partial<BookingFormData>): string => {
    let message = '🚖 *Umrah Taxi Booking Request*\n\n';

    if (data.name) message += `👤 *Name:* ${data.name}\n`;
    if (data.whatsapp) message += `📱 *WhatsApp:* ${data.whatsapp}\n`;
    if (data.pickup) message += `📍 *Pickup:* ${data.pickup}\n`;
    if (data.dropoff) message += `📍 *Drop-off:* ${data.dropoff}\n`;
    if (data.date) message += `📅 *Date:* ${data.date}\n`;
    if (data.time) message += `🕐 *Time:* ${data.time}\n`;
    if (data.vehicle) message += `🚗 *Vehicle:* ${data.vehicle}\n`;
    if (data.passengers) message += `👥 *Passengers:* ${data.passengers}\n`;
    if (data.notes) message += `📝 *Notes:* ${data.notes}\n`;

    message += '\n_Please confirm my booking. JazakAllah Khair!_';

    return message;
};

export const getQuickWhatsAppLink = (route?: string): string => {
    let message = '🚖 Hi, I want to book an Umrah taxi.\n\n';

    if (route) {
        message += `Route: ${route}\n`;
    }

    message += 'Please provide me with more details.';

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const getCallLink = (): string => {
    return `tel:+${WHATSAPP_NUMBER}`;
};
