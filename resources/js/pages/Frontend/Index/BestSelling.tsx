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
                    <div key={product.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-lg">
                        <div className="p-5">
                            {/* Product Image */}
                            <div className={`relative rounded-xl mb-5 flex items-center justify-center h-52 overflow-hidden`}>
                                <img src={

                                    Array.isArray(product.image)
                                        ? product.image[Math.floor(Math.random() * product.image.length)]
                                        : product.image
                                }
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />

                                {product.in_stock ? (
                                    <Badge className="absolute top-3 left-3 bg-yellow-400 text-gray-900 hover:bg-yellow-400 font-semibold text-xs px-3 py-1">
                                        In stock
                                    </Badge>
                                ) : (
                                    <Badge className="absolute top-3 left-3 bg-red-400 text-white font-semibold text-xs px-3 py-1">
                                        Out of stock
                                    </Badge>
                                )}
                            </div>

                            {/* Product Info */}
                            <h3 className="text-base font-semibold text-gray-900 mb-3">
                                {product.name}
                            </h3>




                            <hr className="border-gray-200 mb-4" />

                            {/* Price and Button */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-baseline gap-2">
                                    {/* <span className="text-sm text-gray-400 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span> */}
                                    <span className="text-xl font-bold text-emerald-600">
                                        ${product.price}
                                    </span>
                                </div>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-emerald-600 border-emerald-100 hover:bg-emerald-50 hover:text-emerald-700 bg-emerald-50/50 font-medium text-xs px-4"
                                >
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSelling