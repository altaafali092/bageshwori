import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PromoBanner() {
    const promos = [
        "30% Cashback on orders above $499",
        'Use code:"Hello25" to get $25 off on first order',
        "Trusted by Over 100,000 Healthy Customers Worldwide"
    ];

    return (
        <div className="w-full bg-gray-100 py-4 overflow-hidden">
            <div className="flex items-center justify-center gap-8 px-4">
                {promos.map((promo, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" />
                            <span className="text-gray-700 font-medium whitespace-nowrap">
                                {promo.includes('Hello25') ? (
                                    <>
                                        Use code:
                                        <span className="font-bold">"Hello25"</span>
                                        {' '}to get $25 off on first order
                                    </>
                                ) : (
                                    promo
                                )}
                            </span>
                        </div>
                        {index < promos.length - 1 && (
                            <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}