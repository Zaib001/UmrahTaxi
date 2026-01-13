'use client';

import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function Reviews() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" style={{ backgroundImage: 'radial-gradient(#233D4D 1.5px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-4">Social Proof</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-accent mb-6 tracking-tight">
                        Pilgrims <span className="text-gradient">Love Us</span>
                    </h3>
                    <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Join thousands of travelers who have experienced the efficiency and serenity of our premium transfer services.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 rounded-[2rem] hover:bg-white hover:shadow-[0_25px_60px_-15px_rgba(35,61,77,0.1)] transition-all duration-700 flex flex-col group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Star Rating */}
                            <div className="flex items-center space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-gray-200'}`} />
                                ))}
                            </div>

                            {/* Comment */}
                            <div className="relative mb-8 flex-grow">
                                <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary opacity-[0.05] group-hover:scale-125 transition-transform duration-500" />
                                <p className="text-accent/80 font-medium leading-relaxed italic relative z-10">
                                    &quot;{review.comment}&quot;
                                </p>
                            </div>

                            {/* Reviewer Info */}
                            <div className="flex items-center space-x-4 pt-6 border-t border-gray-200/50">
                                <div className="w-12 h-12 bg-accent/5 rounded-full flex items-center justify-center font-black text-accent border border-accent/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-extrabold text-accent text-sm tracking-tight">{review.name}</div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge Bar */}
                <div className="flex flex-wrap items-center justify-center gap-12 pt-16 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-gray-400 group">
                        <CheckCircle2 className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-black text-xs uppercase tracking-widest group-hover:text-accent transition-colors">10,000+ Verified Rides</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 group">
                        <CheckCircle2 className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-black text-xs uppercase tracking-widest group-hover:text-accent transition-colors">Licensed Authority</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 group">
                        <CheckCircle2 className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-black text-xs uppercase tracking-widest group-hover:text-accent transition-colors">Top Rated Agency</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
