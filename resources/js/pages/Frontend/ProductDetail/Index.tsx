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

import { Head, Link, usePage } from "@inertiajs/react";
import { categorywiseProduct, home } from "@/routes";
import { Categories, Product } from "@/types/Frontend";

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
      <div className="bg-gray-50 dark:bg-slate-900 border-b dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href={home()} className="text-gray-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 dark:text-slate-500" />
          <Link href={categorywiseProduct(product.category?.slug)} className="text-gray-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400">
            {product.category?.name}
          </Link>
          <ChevronRight className="w-4 h-4 dark:text-slate-500" />
          <span className="font-medium dark:text-white">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 dark:bg-slate-950 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <ProductDetailCarousel image={product.image || []} />

          {/* Product Info */}
          <div className="space-y-6">
            <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-transparent">
              {product.category?.name}
            </Badge>

            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold dark:text-white">{product.name}</h1>
              <button onClick={() => setIsFavorite(!isFavorite)} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <Heart
                  className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 dark:text-slate-500"
                    }`}
                />
              </button>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-gray-600 dark:text-slate-400 line-through">
              {/* Rs. {product.price} */}
            </p>


            {/* Quantity */}
            <div className="flex items-center gap-4">
              <div className="flex border dark:border-slate-800 rounded-lg overflow-hidden">
                <button
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-white transition-colors"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold dark:text-white border-x dark:border-slate-800">{quantity}</span>
                <button
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-white transition-colors"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 flex-1 h-12">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t dark:border-slate-800">
              <div className="flex gap-3 bg-gray-50 dark:bg-slate-900 p-4 rounded-xl border border-transparent dark:border-slate-800">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="font-semibold text-sm dark:text-white">Secure Payment</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">100% Protected</p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-50 dark:bg-slate-900 p-4 rounded-xl border border-transparent dark:border-slate-800">
                <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="font-semibold text-sm dark:text-white">Easy Returns</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">30 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Product Description</h2>
          <div
            className="text-gray-600 dark:text-slate-300 leading-relaxed prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: product.description ?? "" }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProductDetail;
