import React, { useState } from "react";
import {
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import AuthLayout from "../layouts/AuthLayout";
import { CarouselWrapper } from "@/components/Frontend/Carousel";


const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: "Premium Organic Penne Rigate Pasta",
    price: 39.99,
    originalPrice: 49.99,
    rating: 5,
    reviews: 128,
    brand: "Italian Delights",
    category: "Pasta & Grains",
    inStock: true,
    description:
      "Savor authentic Italian flavor with our premium organic penne rigate pasta — crafted from 100% durum wheat semolina for that perfect al dente texture. Ideal for holding sauces beautifully and delivering a rich culinary experience.",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551462147-37abc8ea9814?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "100% Organic Durum Wheat",
      "Traditional Italian Recipe",
      "Perfect Al Dente Texture",
      "Non-GMO Certified",
      "Vegan Friendly",
      "High in Protein & Fiber",
    ],
  };

  // ✅ Handle Quantity Change
  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  // ✅ Handle Add to Cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  // ✅ Star Rating Component
  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">({reviews} reviews)</span>
    </div>
  );

  return (
    <AuthLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">
          Home / {product.category} /{" "}
          <span className="text-gray-800">{product.name}</span>
        </p>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    
           <div className="space-y-4">
                {/* <CarouselWrapper images={product.images} /> */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === idx
                      ? "border-emerald-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div> 
      

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <h1 className="text-3xl font-semibold text-gray-900 mt-1">
                    {product.name}
                  </h1>
                  <StarRating
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Heart
                    className={`w-6 h-6 transition ${
                      isFavorite
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <Separator className="my-6" />

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-emerald-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <Badge className="bg-red-500 text-white">
                  Save{" "}
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </Badge>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* ✅ Quantity + Add to Cart (one row) */}
              <div className="flex items-center gap-4 flex-wrap mt-4">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Related Products
            </h2>
            <Button
              variant="outline"
              className="rounded-full border-gray-300 px-8"
            >
              View All
            </Button>
          </div>
          <Separator className="bg-emerald-500 mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-50">
                  <img
                    src={product.images[i]}
                    alt="Related"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">
                    Related Product {i + 1}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-emerald-600">
                      $34.99
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-emerald-50"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProductDetail;
