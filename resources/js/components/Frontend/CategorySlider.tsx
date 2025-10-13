import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function CategorySlider() {

    const slides = [
      
        {
            badge: "FRESH",
            badgeVariant: "default",
            title: "Tropical Fruit Paradise",
            price: "FROM $2.49-$3.49",
            image:"https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
       
        {
            badge: "ENERGY",
            title: "Green Power Smoothies",
            price: "FROM $2.29-$3.29",
            image:"https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228",
        },
    ];
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
        }}
            className="w-full">
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="overflow-hidden shadow-md rounded-xl border-0">
                                <CardContent className="h-[28rem] flex flex-col justify-center px-8 py-6 md:py-8">
                                    <div className="relative z-10 max-w-md space-y-2">
                                        <Badge
                                            variant={slide.badgeVariant as any}
                                            className="font-semibold"
                                        >
                                            {slide.badge}
                                        </Badge>

                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                            {slide.title}
                                        </h2>

                                      

                                        <Button
                                            size="lg"
                                            className="mt-28 bg-white text-gray-700 hover:bg-gray-50 font-semibold rounded-full shadow-sm"
                                        >
                                            Shop Now
                                        </Button>
                                    </div>

                                    {/* Background image */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-90"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white text-gray-800 shadow-md" />
            <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white text-gray-800 shadow-md" />
        </Carousel>
    )
}
