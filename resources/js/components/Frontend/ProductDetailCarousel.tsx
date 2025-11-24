import React from "react";
import { CarouselWrapper } from "./Carousel";

interface ProductDetailCarouselProps {
  image: string[];
}

export function ProductDetailCarousel({ image }: ProductDetailCarouselProps) {
  return (
    <CarouselWrapper
      items={image}
      renderItem={(img, index) => (
        <div className="relative">
          <img
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-full h-[450px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}
    />
  );
}
