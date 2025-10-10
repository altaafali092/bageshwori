import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { Category } from "@/types/Admin/Category"
import { Product } from "@/types/Admin/Product"
import { index, update } from "@/routes/admin/products"


interface Props {
    categories: Category[]
    product: Product
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Products", href: index().url },
    { title: "Edit", href: "#" },
]

export default function ProductEdit({ categories, product }: Props) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Menu Item" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCancel}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Edit Menu Item</h1>
                            <p className="text-muted-foreground">
                                Update the details of this menu item.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="max-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Menu Item Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={update(product.id).url}
                                method="post"
                                className="space-y-6"
                                encType="multipart/form-data"
                            >
                                {({ errors }) => (
                                    <>
                                        {/* Spoof PUT method */}
                                        <input type="hidden" name="_method" value="put" />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Category */}
                                            <div className="space-y-2">
                                                <Label htmlFor="category_id">
                                                    Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="category_id"
                                                    name="category_id"
                                                    defaultValue={product.category_id ?? ""}
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Select Category</option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors?.category_id && (
                                                    <div className="text-red-500 text-xs">
                                                        {errors.category_id}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Name */}
                                            <div className="space-y-2">
                                                <Label htmlFor="name">
                                                    Item Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    defaultValue={product.name}
                                                    placeholder="e.g., Chicken Burger"
                                                />
                                                {errors?.name && (
                                                    <div className="text-red-500 text-xs">{errors.name}</div>
                                                )}
                                            </div>
                                           
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Price */}



                                             <div className="space-y-2">
                                                <Label htmlFor="slug">
                                                    Slug Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    defaultValue={product.slug}
                                                />
                                                {errors?.slug && (
                                                    <div className="text-red-500 text-xs">{errors.slug}</div>
                                                )}
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label htmlFor="price">
                                                    Price <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="price"
                                                    name="price"
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    defaultValue={product.price}
                                                    placeholder="e.g., 120.00"
                                                />
                                                {errors?.price && (
                                                    <div className="text-red-500 text-xs">{errors.price}</div>
                                                )}
                                            </div>

                                            {/* Image Upload */}
                                            <div className="space-y-2">
                                                <Label htmlFor="image">Replace Image</Label>
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    name="image"
                                                    accept="image/*"
                                                />
                                                <p className="text-xs text-muted-foreground">
                                                    Upload new image to replace existing one (optional)
                                                </p>
                                            </div>
                                        </div>

                                        {/* Current Image */}
                                        {product.image && product.image.length > 0 && (
                                            <div className="space-y-2">
                                                <Label>Current Images</Label>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.image.map((img, index) => (
                                                        <img
                                                            key={index}
                                                            src={img}
                                                            alt={`${product.name} ${index + 1}`}
                                                            className="h-24 w-24 rounded-md object-cover border"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                defaultValue={product.description ?? ""}
                                                placeholder="Describe your menu item (optional)"
                                                className="min-h-20"
                                            />
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 pt-4">
                                            <Button type="submit">Update Item</Button>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}
