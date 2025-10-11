import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1494947665470-20322015e3a8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1708204930650-abdd2928f9a3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1588099140103-eb7e0ae84d00?auto=format&fit=crop&q=80&w=1200",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel className="w-full rounded-xl overflow-hidden shadow-md">
        <CarouselContent className="p-0 m-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="p-0 m-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[450px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white/70 hover:bg-white absolute left-4 top-1/2 -translate-y-1/2 rounded-full" />
        <CarouselNext className="bg-white/70 hover:bg-white absolute right-4 top-1/2 -translate-y-1/2 rounded-full" />
      </Carousel>
    </div>
  );
}
