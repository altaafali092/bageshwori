import React, { useState } from "react";
import {
  Star,
  Heart,
  ChevronRight,
  ShoppingCart,
  Shield,
  RefreshCw,
  Share2,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AuthLayout from "../layouts/AuthLayout";
import { ProductDetailCarousel } from "@/components/Frontend/ProductDetailCarousel";
import { Categories, Product } from "@/types/frontend";
import { Head, Link, usePage } from "@inertiajs/react";
import { home } from "@/routes";

const ProductDetail = () => {
  const { product } = usePage<{ product: Product; category: Categories[] }>().props;

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  return (
    <AuthLayout>
      <Head title={product.name} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href={home()} className="text-gray-500 hover:text-emerald-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <ProductDetailCarousel image={product.image || []} />

          {/* Product Info */}
          <div className="space-y-6">
            <Badge className="bg-emerald-100 text-emerald-700">
              {product.category?.name}
            </Badge>

            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <button onClick={() => setIsFavorite(!isFavorite)}>
                <Heart
                  className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                />
              </button>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-gray-600 line-through">
              {/* Rs. {product.price} */}
            </p>


            {/* Quantity */}
            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg">
                <button
                  className="px-4 py-2"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  className="px-4 py-2"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% Protected</p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <RefreshCw className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-500">30 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <p
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description ?? "" }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProductDetail;
