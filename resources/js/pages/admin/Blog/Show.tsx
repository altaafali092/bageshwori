import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index, edit, destroy } from "@/routes/admin/blogs"

interface Blog {
    id: number
    title: string
    slug: string
    description?: string
    image?: string
    created_at: string
    updated_at: string
}

interface BlogShowProps {
    blog: Blog
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Blogs", href: index().url },
    { title: "View", href: "#" },
]

export default function BlogShow({ blog }: BlogShowProps) {
    const handleBack = () => window.history.back()

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this blog?")) {
            // Inertia delete request
            window.location.href = destroy(blog.id).url
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Blog - ${blog.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleBack}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Blog Details</h1>
                            <p className="text-muted-foreground">
                                View blog information
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={edit(blog.id).url}>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Edit className="h-4 w-4" />
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            className="flex items-center gap-2"
                        >
                            <Trash2 className="h-4 w-4" />
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">Title</h3>
                                    <p className="mt-1 text-base">{blog.title}</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">Slug</h3>
                                    <p className="mt-1 text-base font-mono text-sm">{blog.slug}</p>
                                </div>

                                {blog.description && (
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                                        <p className="mt-1 text-base whitespace-pre-wrap">{blog.description}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">Created At</h3>
                                        <p className="mt-1 text-sm">
                                            {new Date(blog.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">Updated At</h3>
                                        <p className="mt-1 text-sm">
                                            {new Date(blog.updated_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {blog.image ? (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground text-sm">No image available</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}