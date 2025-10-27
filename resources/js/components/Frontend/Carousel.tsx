import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselWrapperProps<T> {
  items: T[]; // generic type for any data (sliders, categories, etc.)
  renderItem: (item: T, index: number) => React.ReactNode; // how to render each item
  className?: string;
}

export function CarouselWrapper<T>({
  items,
  renderItem,
  className,
}: CarouselWrapperProps<T>) {
  return (
    <div className={`w-full max-w-7xl mx-auto ${className ?? ""}`}>
      <Carousel className="w-full rounded-xl overflow-hidden shadow-md">
        <CarouselContent className="p-0 m-0">
          {items.map((item, index) => (
            <CarouselItem key={index} className="p-0 m-0">
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white/70 hover:bg-white absolute left-4 top-1/2 -translate-y-1/2 rounded-full" />
        <CarouselNext className="bg-white/70 hover:bg-white absolute right-4 top-1/2 -translate-y-1/2 rounded-full" />
      </Carousel>
    </div>
  );
}
