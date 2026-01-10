import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { Link } from '@inertiajs/react';
import { allproduct } from '@/routes';
import { Product } from '@/types/Frontend';

interface DealWeeksProps {
    dealdays: Product[];
    dealWeeks: Product[];
}
export default function DealWeek({ dealdays, dealWeeks }: DealWeeksProps) {


    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 pb-2  inline-block">
                        Deal Of The Weak
                    </h2>

                </div>

                <Link href={allproduct()}>
                    <Button
                        variant="outline"
                        className="rounded-full px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                        See All
                    </Button>
                </Link>
            </div>
            <Separator className='bg-emerald-500 mb-4 mt-5' />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Top Selling Sidebar */}
                    <div className="lg:col-span-4">
                        {dealdays.map((product) => (
                            <div
                                key={product.id}
                                className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-80 overflow-hidden py-4 px-4 ">
                                    <img
                                        src={
                                            Array.isArray(product.image)
                                                ? product.image[Math.floor(Math.random() * product.image.length)]
                                                : product.image
                                        }
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                                    />
                                    {/* In Stock Badge */}
                                    {product.in_stock ? (
                                        <Badge className="absolute top-4 mt-4 mx-4 left-4 bg-emerald-600 text-white text-xs">
                                            In Stock
                                        </Badge>
                                    ) : (
                                        <Badge className="absolute top-4 mt-4 mx-4 left-4 bg-red-600 text-white text-xs">
                                            Out of Stock
                                        </Badge>
                                    )}
                                </div>

                                {/* Product Content */}
                                <div className="px-6 pb-6 mt-6">

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">
                                        {product.name}
                                    </h3>

                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        dangerouslySetInnerHTML={{
                                            __html: (product.description?.length ?? 0) > 100
                                                ? product.description?.substring(0, 100) + "..."
                                                : product.description ?? ""
                                        }}
                                    />

                                    <hr className="border-gray-200 mb-4" />

                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">

                                            <span className="text-emerald-600 line-through  font-bold text-lg">
                                                Rs. {product.price}
                                            </span>

                                        </div>

                                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm px-5">
                                            Add To Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Trending Products Main Section */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {dealWeeks.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
                                >
                                    {/* Product Image */}
                                    <div className="w-50 h-40 flex mb-3  overflow-hidden">
                                        <img
                                            src={
                                                Array.isArray(product.image)
                                                    ? product.image[Math.floor(Math.random() * product.image.length)]
                                                    : product.image
                                            }
                                            alt={product.name}
                                            className="object-cover w-full h-full rounded-xl "
                                        />
                                    </div>

                                    {/* Price */}
                                    <p className="text-gray-400 line-through text-sm mb-1">
                                        Rs. {product.price}
                                    </p>

                                    {/* Name */}
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    {/* <StarRating rating={product.rating} /> */}
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}