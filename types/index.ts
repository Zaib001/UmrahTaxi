export interface Route {
    id: string;
    name: string;
    from: string;
    to: string;
    distance: string;
    duration: string;
    price: number;
    description: string;
    slug: string;
}

export interface Vehicle {
    id: string;
    name: string;
    type: string;
    passengers: number;
    luggage: number;
    image: string;
    features: string[];
    priceMultiplier: number;
    description: string;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    features: string[];
    slug: string;
}

export interface Review {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
    location: string;
}

export interface BookingFormData {
    name: string;
    whatsapp: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    vehicle: string;
    passengers: number;
    notes?: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}
