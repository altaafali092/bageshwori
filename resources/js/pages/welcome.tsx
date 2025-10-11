import React, { useState } from "react";
import { Search, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { CarouselDemo } from "@/components/Frontend/Carousel";
import PromoBanner from "@/components/Frontend/PromoBanner";

export default function BageshworiKennel() {
    const [searchQuery, setSearchQuery] = useState("");

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
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                {/* 🔹 Top Header */}
                <div className="bg-emerald-600 text-white py-2 px-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap gap-3">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="flex items-center gap-2">
                                <MapPin size={16} />
                                2345 Beach Rd, Metrocity USA, HWY 1235
                            </span>
                            <span className="flex items-center gap-2">
                                <Phone size={16} /> +1 (000) 012-3456
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="hover:text-yellow-300 transition whitespace-nowrap"
                            >
                                Track your order
                            </a>
                            <div className="flex gap-3 items-center">
                                <Facebook
                                    size={18}
                                    className="cursor-pointer hover:text-yellow-300 transition"
                                />
                                <Instagram
                                    size={18}
                                    className="cursor-pointer hover:text-yellow-300 transition"
                                />
                                {/* X / Twitter Icon */}
                                <svg
                                    className="w-4 h-4 cursor-pointer hover:text-yellow-300 transition"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                {/* WhatsApp */}
                                <svg
                                    className="w-4 h-4 cursor-pointer hover:text-yellow-300 transition"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 Main Header */}
                <div className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
                            Bageshwori Kennel House
                        </h1>
                        <div className="flex items-center w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-emerald-500"
                            />
                            <button className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-r-lg">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 🔹 Navigation */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 flex gap-4 py-2 overflow-x-auto">
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition whitespace-nowrap">
                            Select Category
                        </button>
                        <a
                            href="#"
                            className="text-red-500 px-4 py-2 hover:text-red-600 transition font-medium whitespace-nowrap"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 px-4 py-2 hover:text-emerald-600 transition font-medium whitespace-nowrap"
                        >
                            About
                        </a>
                    </div>
                </div>

                {/* 🔹 Carousel + Button Section */}
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
                    <div className="w-full">
                        <CarouselDemo />
                    </div>

                </div>
                <div className="max-w-7xl mx-auto px-4 py-8  gap-6">
                    <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold shadow-lg">
                        Weekly Discount
                    </button>
                </div>
            </div>
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



        </>
    );
}
