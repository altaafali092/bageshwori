import React, { useState } from "react";
import { Search, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { CarouselDemo } from "@/components/Frontend/Carousel";
import PromoBanner from "@/components/Frontend/PromoBanner";
import AuthLayout from "./Frontend/layouts/AuthLayout";

export default function BageshworiKennel() {

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
          
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Sidebar - Categories */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-gray-200">
                                    Top Categories
                                </h2>
                                <div className="space-y-1">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-3 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group"
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

                        {/* Main Content Area */}
                        <div className="lg:col-span-9">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Main Featured Card - Healthy Vegetable Drinks */}
                                <div className="lg:col-span-2 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 rounded-2xl shadow-lg p-8 relative overflow-hidden">
                                    {/* Decorative circles */}
                                    <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-200/30 rounded-full blur-2xl"></div>

                                    <div className="relative z-10">
                                        <span className="inline-block bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                                            JUICY
                                        </span>

                                        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                            Healthy Vegetable<br />Drinks
                                        </h1>

                                        <p className="text-emerald-700 text-2xl font-bold mb-6">
                                            FROM $1.99-$2.99
                                        </p>

                                        <button className="bg-white text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all shadow-md hover:shadow-lg">
                                            Shop Now
                                        </button>
                                    </div>

                                    {/* Product Image Area */}
                                    <div className="absolute bottom-0 right-0 w-2/3">
                                        <div className="relative">
                                            {/* Smoothie glasses representation */}
                                            <div className="flex gap-2 justify-end items-end p-8">
                                                <div className="w-24 h-32 bg-gradient-to-b from-orange-500 to-orange-600 rounded-2xl shadow-xl"></div>
                                                <div className="w-24 h-40 bg-gradient-to-b from-green-500 to-green-600 rounded-2xl shadow-xl"></div>
                                                <div className="w-24 h-36 bg-gradient-to-b from-pink-400 to-pink-500 rounded-2xl shadow-xl"></div>
                                                <div className="w-24 h-32 bg-gradient-to-b from-purple-600 to-purple-700 rounded-2xl shadow-xl"></div>
                                            </div>
                                            {/* Vegetables */}
                                            <div className="absolute bottom-0 left-0 flex gap-2">
                                                <div className="w-20 h-20 bg-orange-500 rounded-full"></div>
                                                <div className="text-4xl">🥒</div>
                                                <div className="text-4xl">🍅</div>
                                                <div className="text-3xl">🥕</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative dots */}
                                    <div className="absolute bottom-6 left-8 flex gap-2">
                                        <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Right Column - Two Product Cards */}
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

                                        <button className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-50 transition-all shadow-md text-sm">
                                            Shop Now
                                        </button>

                                        {/* Coconut image placeholder */}
                                        <div className="absolute -right-8 -bottom-4 w-48 h-48">
                                            <div className="relative">
                                                <div className="text-8xl">🥥</div>
                                                <div className="absolute top-0 right-0 text-6xl">🌴</div>
                                            </div>
                                        </div>
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

                                        <button className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-50 transition-all shadow-md text-sm">
                                            Shop Now
                                        </button>

                                        {/* Pasta package placeholder */}
                                        <div className="absolute -right-4 -bottom-4 w-40 h-40">
                                            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-xl p-4 transform rotate-12">
                                                <div className="text-yellow-300 text-6xl text-center">🍝</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <PromoBanner />
                </div>
            </div>



        </AuthLayout>
    );
}
