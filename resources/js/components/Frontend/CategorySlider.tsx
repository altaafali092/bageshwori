import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Categories } from "@/types/Frontend"
import { Link } from "@inertiajs/react"
import { categorywiseProduct } from "@/routes"

interface CategoryProps {
    categories: Categories[]
}

export function CategorySlider({ categories }: CategoryProps) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
                {categories.map((category, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="relative overflow-hidden rounded-2xl shadow-xl border-0">


                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />


                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />


                                <CardContent className="relative z-10 h-[28rem] flex flex-col justify-end px-10 pb-12">
                                    <div className="space-y-6 max-w-xl">


                                        <h2 className="text-2xl md:text-xl font-bold text-white tracking-tight drop-shadow">
                                            {category.name}
                                        </h2>


                                        <Link
                                            href={categorywiseProduct(category.slug)}
                                            className="
                                                bg-emerald-600 text-white 
                                                hover:bg-emerald-700 
                                                px-4 py-3 
                                                text-md
                                                rounded-full
                                                shadow-lg
                                                font-bold
                                                transition
                                            "
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* ◀ Carousel Previous */}
            <CarouselPrevious className="
                left-3 md:left-5
                bg-white/90 hover:bg-white 
                text-gray-800 
                shadow-lg 
                rounded-full 
                h-10 w-10
                flex items-center justify-center
                border border-gray-200
            " />

            {/* ▶ Carousel Next */}
            <CarouselNext className="
                right-3 md:right-5
                bg-white/90 hover:bg-white 
                text-gray-800 
                shadow-lg 
                rounded-full 
                h-10 w-10
                flex items-center justify-center
                border border-gray-200
            " />
        </Carousel>
    )
}
