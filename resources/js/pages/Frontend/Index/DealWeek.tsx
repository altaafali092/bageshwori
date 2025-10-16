import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function DealWeek() {
    const topSellingProducts = [
        {
            id: 1,
            name: "Penne Rigate",
            price: 29.99,
            rating: 5,
            inStock: true,
            bgColor: "bg-orange-100",
            image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
        }
    ];

    const trendingProducts = [
        {
            id: 1,
            name: "Penne Rigate",
            price: 39.99,
            originalPrice: 49.99,
            rating: 5,
            inStock: true,
            bgColor: "bg-orange-50",
            image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
        },
        {
            id: 2,
            name: "Wine Collection",
            price: 999.99,
            originalPrice: 1299.99,
            rating: 5,
            inStock: true,
            bgColor: "bg-gray-50",
            image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
        },
        {
            id: 3,
            name: "Mix Fruit Cart",
            price: 49.99,
            originalPrice: 69.99,
            rating: 5,
            inStock: true,
            bgColor: "bg-orange-50",
            image: "https://bageshworikennelhouse.com.np/wp-content/themes/grocefycart/assets/images/product-papaya.jpg"
        },
        {
            id: 3,
            name: "Mix Fruit Cart",
            price: 49.99,
            originalPrice: 69.99,
            rating: 5,
            inStock: true,
            bgColor: "bg-orange-50",
            image: "https://bageshworikennelhouse.com.np/wp-content/themes/grocefycart/assets/images/product-papaya.jpg"
        }

    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-300 text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 pb-2  inline-block">
                        Deal Of The Weak 
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

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Top Selling Sidebar */}
                    <div className="lg:col-span-4">
                        {topSellingProducts.map((product) => (
                            <div
                                key={product.id}
                                className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-80 overflow-hidden py-4 px-4 ">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                                    />
                                    {/* In Stock Badge */}
                                    {product.inStock && (
                                        <Badge className="absolute top-4 mt-4 mx-4 left-4 bg-emerald-600 text-white text-xs">
                                            In Stock
                                        </Badge>
                                    )}
                                </div>

                                {/* Product Content */}
                                <div className="px-6 pb-6 mt-6">
                                   
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">
                                        {product.name}
                                    </h3>

                                    <div className="flex mb-2 mt-4">
                                        <StarRating rating={product.rating} />
                                    </div>

                                    <p className="text-gray-500  mb-4 mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>

                                    <hr className="border-gray-200 mb-4" />

                                    <div className="flex items-center justify-between">
                                        <div className="text-left mt-4">

                                            <span className="text-emerald-600 font-bold text-lg">
                                                ${product.price.toFixed(2)}
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
                            {trendingProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
                                >
                                    {/* Product Image */}
                                    <div className="w-50 h-40 flex mb-3  overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-cover w-full h-full rounded-xl "
                                        />
                                    </div>

                                    {/* Price */}
                                    <p className="text-emerald-600 font-semibold text-lg mb-1">
                                        ${product.price.toFixed(2)}
                                    </p>

                                    {/* Name */}
                                    <h3 className="text-gray-900 font-semibold text-base mb-2">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <StarRating rating={product.rating} />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}