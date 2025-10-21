import React, { useState } from "react";

import { CarouselDemo } from "@/components/Frontend/Carousel";
import PromoBanner from "@/components/Frontend/PromoBanner";
import AuthLayout from "./Frontend/layouts/AuthLayout";
import { CategorySlider } from "@/components/Frontend/CategorySlider";
import TrendingProduct from "./Frontend/Index/TrendingProduct";
import PromoCards from "./Frontend/Index/PromoCards";
import DealWeek from "./Frontend/Index/DealWeek";
import Banner from "./Frontend/Index/Banner";
import BestSelling from "./Frontend/Index/BestSelling";
import Blog from "./Frontend/Index/Blog";
import CategoryBanner from "./Frontend/Index/CategoryBanner";
import CustomerReviews from "./Frontend/Index/Review";
import LastBanner from "./Frontend/Index/LastBanner";
import { Link, usePage } from "@inertiajs/react";
import { productDetail } from "@/routes";
import { Sliders } from "@/types/frontend";



export default function BageshworiKennel() {
    const sliders=usePage<{sliders:Sliders[]}>().props.sliders
    const categories = [
        { name: 'Fruits & Vegetable', count: 9, icon: '🥬' },
        { name: 'Pet Foods', count: 4, icon: '🐕' },
        { name: 'Frozen Seafoods', count: 6, icon: '🦐' },
        { name: 'Dairy Products', count: 5, icon: '🥛' },
        { name: 'Alcohol', count: 8, icon: '🍷' },
        { name: 'Coffee & Tea', count: 10, icon: '☕' },
        { name: 'Food Cupboard', count: 3, icon: '🏪' },
    ];
    
    return (
        <AuthLayout>

            <div className="max-w-7xl mx-auto px-4 py-8 gap-6">
                <div className="w-full">
                    <CarouselDemo sliders={sliders} />
                </div>
                <div className="max-w-7xl mx-auto px-4 py-8  gap-6">
                  <Link href={productDetail()} className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold shadow-lg">
                        Weekly Discount
                    </Link>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* ===== Left Sidebar - Categories ===== */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-gray-200">
                                    Top Categories
                                </h2>

                                {/* Scrollable List — scrollbar hidden but scroll works */}
                                <div className="h-[380px] overflow-y-auto space-y-1 
                  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-3 px-3 hover:bg-gray-50 
                      rounded-lg cursor-pointer transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{category.icon}</span>
                                                <span className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <span className="text-emerald-600 font-semibold">
                                                ({category.count})
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ===== Main Content ===== */}
                        <div className="lg:col-span-9">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Slider */}
                                <div className="lg:col-span-2">
                                    <CategorySlider />
                                </div>

                                {/* Right Column - Product Cards */}
                                <div className="space-y-6">
                                    {/* Fresh Coconut Water Card */}
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg p-6 relative overflow-hidden">
                                        <span className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">
                                            JUICY
                                        </span>

                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            Fresh Coconut<br />Water
                                        </h3>

                                        <p className="text-emerald-700 text-sm font-bold mb-4">
                                            FROM $1.99-$2.99
                                        </p>

                                        <button className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-full 
                    hover:bg-gray-50 transition-all shadow-md text-sm">
                                            Shop Now
                                        </button>

                                    </div>

                                    {/* Nutritious Veggie Foods Card */}
                                    <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl shadow-lg p-6 relative overflow-hidden">
                                        <span className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">
                                            JUICY
                                        </span>

                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            Nutritious Veggie<br />Foods
                                        </h3>

                                        <p className="text-emerald-700 text-sm font-bold mb-4">
                                            FROM $1.99-$2.99
                                        </p>

                                        <button className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-full 
                    hover:bg-gray-50 transition-all shadow-md text-sm">
                                            Shop Now
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Promo Banner */}
                <div className="mt-8">
                    <PromoBanner />
                </div>
            </div>
            <div>
                <TrendingProduct/>
            </div>
            <div>
                <PromoCards/>
            </div>
            <div>
                <DealWeek/>
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <BestSelling/>
                <Blog/>
                <CategoryBanner/>
                <CustomerReviews/>
                <LastBanner/>
            </div>



        </AuthLayout>
    );
}
