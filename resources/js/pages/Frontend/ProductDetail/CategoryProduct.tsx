import React from "react"
import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import AuthLayout from "../layouts/AuthLayout"

import { ProductCard } from "@/components/Frontend/ProductCard"
import { Categories, Product } from "@/types/Frontend"

interface ProductProps {
    products: Product[]
    category?: Categories | null
}

export default function ProductsIndex({ products, category }: ProductProps) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [sortBy, setSortBy] = React.useState("newest")

    const filteredProducts = products
        .filter((product) => {
            const search = searchTerm.toLowerCase()
            return (
                product.name.toLowerCase().includes(search) ||
                product.description?.toLowerCase().includes(search)
            )
        })
        .sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price
            if (sortBy === "price-high") return b.price - a.price
            return 0 // newest or default
        })

    const categoryName = category?.name ?? "All Products"

    return (
        <AuthLayout>
            <Head title={`${categoryName} Products`} />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                            {categoryName}
                        </h1>
                        <p className="text-gray-600">
                            {category ? (
                                <>
                                    Discover our collection of amazing products in{" "}
                                    <span className="font-semibold text-emerald-600">
                                        {categoryName}
                                    </span>{" "}
                                    category.
                                </>
                            ) : (
                                "Browse all available products from our store."
                            )}
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filters Bar */}
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Search */}
                            <div className="md:col-span-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder={`Search in ${categoryName}...`}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            {/* Sort By */}
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Filter Button */}
                            <Button variant="outline" className="w-full">
                                <SlidersHorizontal className="h-4 w-4 mr-2" />
                                Filters
                            </Button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing{" "}
                            <span className="font-semibold">{filteredProducts.length}</span>{" "}
                            products
                            {category && (
                                <>
                                    {" "}in{" "}
                                    <span className="font-semibold text-emerald-600">
                                        {categoryName}
                                    </span>
                                </>
                            )}
                        </p>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                                {category ? `No products found in ${categoryName}` : "No products found"}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Try adjusting your search or filters
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setSearchTerm("")}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={(p) => console.log("Added:", p.name)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthLayout>
    )
}
