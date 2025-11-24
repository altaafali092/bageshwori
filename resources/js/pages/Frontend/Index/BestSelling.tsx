import { ProductCard } from '@/components/Frontend/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Products } from '@/types/frontend';
import { StarIcon } from 'lucide-react';
import React from 'react'


interface BestSellingProps {
    bestSells: Products[];
}

const BestSelling = ({ bestSells }: BestSellingProps) => {
    return (

        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 pb-2  inline-block">
                        Best Selling Products
                    </h2>

                </div>

                <Button
                    variant="outline"
                    className="rounded-full px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                    See All
                </Button>
            </div>
            <Separator className='bg-emerald-500 mb-4 mt-5' />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestSells.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={(p) => console.log("Added:", p.name)}
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSelling