import React from "react";
import { Button } from "@/components/ui/button";

export default function CategoryBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Drinks Card */}
      <div className="relative bg-[#86DB46] rounded-2xl overflow-hidden flex items-center justify-between p-8">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#F74B4B] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            DRINKS
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-5">
            Red and White Wine<br />Collection
          </h2>
          <Button
            className="bg-white text-[#00A17E] font-medium rounded-full px-6 py-5 text-sm hover:bg-white hover:opacity-90 transition-all"
            size="lg"
          >
            Shop Now
          </Button>
        </div>

        {/* Right Image */}
        <img
          src="https://th.bing.com/th/id/R.c23d7e81745089ba33eaac9be49dbd06?rik=CMATaiDvHO1D0g&pid=ImgRaw&r=0"
          alt="Wine Bottles"
          className="w-48 md:w-60 object-contain"
        />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circles-and-lines.png')] opacity-10 pointer-events-none" />
      </div>

      {/* Fruits Card */}
      <div className="relative bg-[#FFC727] rounded-2xl overflow-hidden flex items-center justify-between p-8">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#F74B4B] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            FRUITS
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-5">
            Mixed Fruits Basket
          </h2>
          <Button
            className="bg-white text-[#00A17E] font-medium rounded-full px-6 py-5 text-sm hover:bg-white hover:opacity-90 transition-all"
            size="lg"
          >
            Shop Now
          </Button>
        </div>

        {/* Right Image */}
        <img
          src="https://th.bing.com/th/id/R.c23d7e81745089ba33eaac9be49dbd06?rik=CMATaiDvHO1D0g&pid=ImgRaw&r=0"
          alt="Fruits Basket"
          className="w-48 md:w-60 object-contain"
        />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circles-and-lines.png')] opacity-10 pointer-events-none" />
      </div>

    </div>
  );
}
