import React from "react"
import { Button } from "@/components/ui/button"
import { Categories } from "@/types/Frontend"
import { Link } from "@inertiajs/react"
import { categorywiseProduct } from "@/routes"

interface CategoryBannerProps {
  categoryBanners: Categories[]
}

export default function CategoryBanner({ categoryBanners }: CategoryBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categoryBanners.map((category) => (
          <div
            key={category.id}
            className="relative h-[340px] overflow-hidden rounded-[2rem] bg-zinc-900 flex items-center shadow-lg"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full px-8 md:px-12 flex flex-col items-start gap-4">
              <span className="inline-block text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase">
                Limited Products
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {category.name}
              </h2>

              <Link href={categorywiseProduct(category.slug)}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-emerald-400 text-black rounded-full px-7 py-5 text-sm font-bold shadow-md"
                >
                  Shop Category
                </Button>
              </Link>
            </div>


          </div>
        ))}
      </div>
    </section>
  )
}
