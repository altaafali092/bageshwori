import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sliders } from "@/types/frontend";


interface SiderProps{
  sliders: Sliders[];
}
export function CarouselDemo({sliders}: SiderProps) {
 
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel className="w-full rounded-xl overflow-hidden shadow-md">
        <CarouselContent className="p-0 m-0">
          {sliders.map((slider, index) => (
            <CarouselItem key={index} className="p-0 m-0 relative">
              <img
                src={slider.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white mt-44">
                  <h2 className="text-3xl font-bold mb-2">{slider.title}</h2>
                  <p className="text-lg">{slider.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white/70 hover:bg-white absolute left-4 top-1/2 -translate-y-1/2 rounded-full" />
        <CarouselNext className="bg-white/70 hover:bg-white absolute right-4 top-1/2 -translate-y-1/2 rounded-full" />
      </Carousel>
    </div>
  );
}
