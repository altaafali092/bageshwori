import React from "react";

import { Sliders } from "@/types/frontend";
import { CarouselWrapper } from "./Carousel";

interface SliderCarouselProps {
  sliders: Sliders[];
}

export function SliderCarousel({ sliders }: SliderCarouselProps) {
  return (
    <CarouselWrapper
      items={sliders}
      renderItem={(slider, index) => (
        <div className="relative bg-gray-100 dark:bg-gray-900">
          <img
            src={slider.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/60 flex items-center justify-center">
            <div className="text-center text-white mt-44">
              {/* <h2 className="text-3xl font-bold mb-2">{slider.title}</h2>
              <p className="text-lg">{slider.description}</p> */}
            </div>
          </div>
        </div>
      )}
    />
  );
}
