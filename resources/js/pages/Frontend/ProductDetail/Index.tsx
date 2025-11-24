import React, { useState } from "react";
import { Star, Heart, ChevronRight, ShoppingCart, Truck, Shield, RefreshCw, Share2, MessageSquare, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import AuthLayout from "../layouts/AuthLayout";
import { ProductDetailCarousel } from "@/components/Frontend/ProductDetailCarousel";
import { Categories, Product } from "@/types/frontend";
import { Head, Link, usePage } from "@inertiajs/react";
import { home } from "@/routes";

const ProductDetail = () => {
  const { product } = usePage<{ product: Product; category: Categories[] }>().props;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating}</span>
      <span className="text-sm text-gray-500">({reviews} reviews)</span>
    </div>
  );

  const tabs = [
    { id: "description", label: "Description", icon: Package },
    { id: "reviews", label: "Reviews", icon: MessageSquare },
    { id: "shipping", label: "Shipping Info", icon: Truck },
  ];

  const mockReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely love this product! The quality exceeded my expectations and delivery was super fast.",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "1 week ago",
      comment: "Great product overall. Good value for money. Would recommend to others.",
      verified: true
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      date: "2 weeks ago",
      comment: "This is exactly what I was looking for. Perfect quality and fast shipping!",
      verified: false
    }
  ];

  return (
    <AuthLayout>
      <Head title={`${product.name} - Product Detail`} />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-sm">
            <Link 
              href={home()} 
              className="text-gray-500 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link 
              href="#" 
              className="text-gray-500 hover:text-emerald-600 transition-colors font-medium"
            >
              {product.category?.name}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="sticky top-24">
              <ProductDetailCarousel image={product.image || []} />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col space-y-6">
            {/* Category Badge */}
            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-1 text-sm font-medium">
                {product.category?.name}
              </Badge>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-200 ${
                      isFavorite 
                        ? "fill-red-500 text-red-500 scale-110" 
                        : "text-gray-400 group-hover:text-red-400"
                    }`}
                  />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200">
                  <Share2 className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
                {product.name}
              </h1>
              <StarRating rating={4} reviews={128} />
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold text-emerald-600">
                  ${product.price}
                </span>
                {product.price && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      ${(product.price * 1.3).toFixed(2)}
                    </span>
                    <Badge className="bg-red-500 text-white text-sm px-3 py-1">
                      Save 23%
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Tax included. Shipping calculated at checkout.</p>
            </div>

            {/* Quantity + Actions */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors">
                  <button
                    className="px-5 py-3 text-gray-600 hover:bg-gray-50 font-semibold text-lg transition-colors"
                    onClick={() => handleQuantityChange("decrement")}
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-semibold text-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-5 py-3 text-gray-600 hover:bg-gray-50 font-semibold text-lg transition-colors"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>

                <Button
                  className="flex-1 bg-emerald-600 text-white px-4 py-6 rounded-xl hover:bg-emerald-700 transition-all duration-200  text-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% protected</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg">
                  <RefreshCw className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg">
                  <Star className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Top Quality</p>
                  <p className="text-xs text-gray-500">Premium products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section (Description, Reviews, Shipping) */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-4 px-2 font-semibold transition-all duration-200 relative ${
                      activeTab === tab.id
                        ? "text-emerald-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="py-8">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Premium quality materials for long-lasting durability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Carefully crafted with attention to detail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Versatile design suitable for various occasions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Easy to use and maintain</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="space-y-8 max-w-4xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-4xl font-bold text-gray-900">4.5</span>
                        <div>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < 4 ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Based on 128 reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl">
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-gray-900">{review.name}</p>
                              {review.verified && (
                                <Badge className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shipping Info Tab */}
            {activeTab === "shipping" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We offer fast and reliable shipping to ensure your order arrives safely and on time.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-emerald-600" />
                      Standard Shipping
                    </h4>
                    <p className="text-gray-600 mb-2">Delivery in 5-7 business days</p>
                    <p className="text-emerald-600 font-semibold">FREE on orders over $50</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-emerald-600" />
                      Express Shipping
                    </h4>
                    <p className="text-gray-600 mb-2">Delivery in 2-3 business days</p>
                    <p className="text-gray-700 font-semibold">$9.99 flat rate</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-emerald-600" />
                      Returns Policy
                    </h4>
                    <p className="text-gray-600">
                      Not satisfied? Return your item within 30 days for a full refund. Items must be unused and in original packaging.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                You May Also Like
              </h2>
              <p className="text-gray-600">Discover more amazing products</p>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-gray-300 px-8 py-6 hover:border-emerald-600 hover:text-emerald-600 font-semibold transition-all duration-200"
            >
              View All
            </Button>
          </div>

          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>

          <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Related products will appear here</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProductDetail;