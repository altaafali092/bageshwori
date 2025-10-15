import React from "react";
import { Button } from "@/components/ui/button";

export default function PromoCards() {
    const cards = [
        {
            id: 1,
            title: "Groceries Made Simple,",
            subtitle: "Life Made Better.",
            bgColor: "bg-yellow-400",
            image:
                "https://cdn-icons-png.flaticon.com/512/3081/3081986.png", // example cart image
        },
        {
            id: 2,
            title: "Groceries Made Simple,",
            subtitle: "Life Made Better.",
            bgColor: "bg-yellow-400",
            image:
                "https://cdn-icons-png.flaticon.com/512/3081/3081986.png", // example cart image
        },
        {
            id: 3,
            title: "Groceries Made Simple,",
            subtitle: "Life Made Better.",
            bgColor: "bg-yellow-400",
            image:
                "https://cdn-icons-png.flaticon.com/512/3081/3081986.png", // example cart image
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4 max-w-7xl mx-auto px-4 py-8">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={`flex items-center justify-between rounded-2xl p-8 ${card.bgColor} shadow-md relative overflow-hidden`}
                >
                    {/* Left Section - Text */}
                    <div className="max-w-[60%]">
                        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                            {card.title} <br /> {card.subtitle}
                        </h2>
                        <Button className="mt-6 bg-white text-emerald-600 font-medium px-6 rounded-full hover:bg-emerald-100 transition">
                            Shop Now
                        </Button>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-40 h-40 object-contain drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110"
                        />

                    </div>
                </div>
            ))}
        </div>
    );
}
