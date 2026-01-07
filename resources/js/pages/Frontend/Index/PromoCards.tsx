import React from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Frontend";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { categorywiseProduct } from "@/routes";

interface promoCategoryProps {
    promoCategories: Product[];
}

export default function PromoCards({ promoCategories }: promoCategoryProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {promoCategories.map((promoCategory) => (
                    <div
                        key={promoCategory.id}
                        className="group relative h-[350px] w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${promoCategory.image})` }}
                        />

                        {/* Gradient Overlay for Text Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                        {/* Content Section */}
                        <div className="relative h-full flex flex-col justify-center px-10 z-10">
                            <div className="space-y-4 max-w-[85%]">
                                <div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                                        {promoCategory.name}
                                    </h3>
                                    <p className="text-emerald-400 font-semibold text-lg mt-1">
                                        {promoCategory.description}
                                    </p>
                                </div>

                                <Link href={categorywiseProduct(promoCategory.slug)}>
                                    <Button
                                        className="bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-full px-6 py-6 font-bold transition-all duration-300 group/btn shadow-xl"
                                    >
                                        Shop Now
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
