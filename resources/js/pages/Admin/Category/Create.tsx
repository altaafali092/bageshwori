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
import { index, store } from "@/routes/admin/categories"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const breadcrumbs: BreadcrumbItem[] = [
    { title: "Categories", href: index().url },
    { title: "Create", href: "#" },
]

export default function FoodCategoryCreate() {
    const [description, setDescription] = React.useState("")
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Food Category" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Food Category</h1>
                            <p className="text-muted-foreground">
                                Add a new food category with image and description.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Category Details</CardTitle>
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
                                                <Label htmlFor="name">Category Name</Label>
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
                                                <Label htmlFor="image">Image</Label>
                                                <Input id="image" type="file" name="image" />
                                                {errors.image && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.image}
                                                    </p>
                                                )}
                                            </div>

                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <div className="bg-white text-black rounded-md overflow-hidden min-h-[250px]">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={description}
                                                    onChange={setDescription}
                                                    placeholder="Optional description"
                                                    className="h-[200px]"
                                                />
                                            </div>
                                            <input type="hidden" name="description" value={description} />
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