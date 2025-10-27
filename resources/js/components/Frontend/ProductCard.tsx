import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Products } from "@/types/frontend"



interface ProductCardProps {
  product: Products
  onAddToCart?: (product: Products) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const imageSrc = Array.isArray(product.image)
    ? product.image[Math.floor(Math.random() * product.image.length)]
    : product.image

  return (
    <div className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-lg">
      <div className="p-5">
        {/* Product Image */}
        <div className="relative rounded-xl mb-5 flex items-center justify-center h-52 overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.in_stock && (
            <Badge className="absolute top-3 left-3 bg-yellow-400 text-gray-900 hover:bg-yellow-400 font-semibold text-xs px-3 py-1">
              In Stock
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
          <span className="text-xl font-bold text-emerald-600">
            ${product.price}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="text-emerald-600 border-emerald-100 hover:bg-emerald-50 hover:text-emerald-700 bg-emerald-50/50 font-medium text-xs px-4"
            onClick={() => onAddToCart?.(product)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
