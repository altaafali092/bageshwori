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
import { index, store } from "@/routes/admin/products"
import { Category } from "@/types/Admin/Category"


interface categoryProps {
    categories: Category[]
}
const breadcrumbs: BreadcrumbItem[] = [
    { title: "Products", href: index().url },
    { title: "Create", href: "#" },
]

export default function ProductCreate({ categories }: categoryProps) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Product</h1>
                            <p className="text-muted-foreground">
                                Add a new product with image and description.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={store().url}
                                method="post"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>

                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="space-y-2">
                                                <Label htmlFor="category_id">
                                                    Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="category_id"
                                                    name="category_id"
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
                                                    <div className="text-red-500 text-xs">{errors.category_id}</div>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="name">Product Name</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="e.g., Beverages"
                                                />
                                                {errors.name && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug Name</Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    placeholder="slug_name"
                                                />
                                                {errors.slug && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.slug}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="price">Product Price</Label>
                                                <Input
                                                    id="price"
                                                    name="price"
                                                    type="number"
                                                    placeholder="100"
                                                />
                                                {errors.price && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.price}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="image">Images</Label>
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    name="image[]"
                                                    multiple
                                                    accept="image/*"
                                                />
                                                <p className="text-xs text-muted-foreground">
                                                    Select multiple images (optional)
                                                </p>
                                            </div>

                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                placeholder="Optional description"
                                                rows={4}
                                            />
                                            {errors.description && (
                                                <p className="text-sm text-red-500">
                                                    {errors.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 pt-4">
                                            <Button type="submit">Save</Button>
                                            <Button type="button" variant="outline" onClick={handleCancel}>
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