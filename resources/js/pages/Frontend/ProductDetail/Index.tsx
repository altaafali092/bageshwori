import React, { useState } from "react";
import { Star, Heart, ChevronRight } from "lucide-react";
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


  console.log(product)
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // ✅ Quantity control
  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  // ✅ Add to cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  // ✅ Rating Component
  const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating
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
      <Head title={`Product Detail - ${product.name}`} />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={home()} className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 line-clamp-1">{product.category?.name}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Images */}
          <div className="space-y-4">
            <ProductDetailCarousel image={product.image || []} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{product.category?.name}</p>
                  <h1 className="text-3xl font-semibold text-gray-900 mt-1">
                    {product.name}
                  </h1>
                  {/* Uncomment if rating data exists */}
                  {/* <StarRating rating={product.rating} reviews={product.reviews} /> */}
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Heart
                    className={`w-6 h-6 transition ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                      }`}
                  />
                </button>
              </div>

              <Separator className="my-6" />

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-emerald-600">
                  ${product.price}
                </span>

                {product.price && product.price > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <Badge className="bg-red-500 text-white">
                      Save{" "}
                      {Math.round(
                        ((product.price - product.price) / product.price) * 100
                      )}
                      %
                    </Badge>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 flex-wrap mt-4">
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

                <Button
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
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
            <Button variant="outline" className="rounded-full border-gray-300 px-8">
              View All
            </Button>
          </div>

          <Separator className="bg-emerald-500 mb-6" />

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(product.image || []).slice(0, 4).map((img: string, i: number) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-50">
                  <img
                    src={img}
                    alt={`Related ${i + 1}`}
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
                    <Button size="sm" variant="outline" className="hover:bg-emerald-50">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

    </AuthLayout >
  );
};

export default ProductDetail;
