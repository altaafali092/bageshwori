import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function TrendingProduct() {
  const topSellingProducts = [
    {
      id: 1,
      name: "Penne Rigate",
      price: 29.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-orange-100",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 2,
      name: "Farfalle",
      price: 29.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-yellow-100",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 3,
      name: "Strawberry",
      price: 39.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 4,
      name: "Capellini Tagliati",
      price: 29.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-green-100",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 5,
      name: "Pomegranate",
      price: 49.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-red-100",
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
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 4,
      name: "Mix Fruit Cart",
      price: 49.99,
      originalPrice: 69.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 5,
      name: "Mix Fruit Cart",
      price: 49.99,
      originalPrice: 69.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
    },
    {
      id: 5,
      name: "Mix Fruit Cart",
      price: 49.99,
      originalPrice: 69.99,
      rating: 5,
      inStock: true,
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228"
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
    <div className="min-h-screen bg-gray-50 p-6 mb-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Selling Sidebar */}
          <div className="lg:col-span-3">
            <Card>
              <div className="px-6">
                <div className='mb-4'>
                  <h2 className="text-lg font-semibold text-gray-900 pb-2  inline-block">
                    Top Selling
                  </h2>
                  <Separator className='bg-emerald-500' />
                </div>

                <div className="space-y-3">
                  {topSellingProducts.map((product) => (
                    <div key={product.id} className=" hover:shadow-md cursor-pointer">
                      <div className="flex gap-3">
                        <div className={`w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 p-2 overflow-hidden`}>
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 mb-1.5">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-1.5">
                            <StarRating rating={product.rating} />
                            {product.inStock && (
                              <Badge variant="secondary" className="text-xs text-emerald-600 bg-emerald-50 hover:bg-emerald-50">
                                In stock
                              </Badge>
                            )}
                          </div>
                          <p className="text-base font-semibold text-emerald-600">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className='mt-3'>
              <div className='mb-4'>
                <img
                  src="https://bageshworikennelhouse.com.np/wp-content/themes/grocefycart/assets/images/ads.jpg"
                  alt=""
                  className='w-full h-80 object-cover rounded-lg'
                />
              </div>
            </div>
          </div>

          {/* Trending Products Main Section */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 pb-2  inline-block">
                  Trending Products
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-lg">
                  <div className="p-5">
                    {/* Product Image */}
                    <div className={`relative ${product.bgColor} rounded-xl mb-5 flex items-center justify-center h-52 overflow-hidden`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      {product.inStock && (
                        <Badge className="absolute top-3 left-3 bg-yellow-400 text-gray-900 hover:bg-yellow-400 font-semibold text-xs px-3 py-1">
                          In stock
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <h3 className="text-base font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>

                    <div className="mb-4">
                      <StarRating rating={product.rating} />
                    </div>

                    <hr className="border-gray-200 mb-4" />

                    {/* Price and Button */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-xl font-bold text-emerald-600">
                          ${product.price.toFixed(2)}
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
        </div>
      </div>
    </div>
  );
}