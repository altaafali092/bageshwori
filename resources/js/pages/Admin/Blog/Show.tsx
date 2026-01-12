import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index, edit, destroy } from "@/routes/admin/blogs"

import { Badge } from "@/components/ui/badge"
import { Blog } from "@/types/Admin/BLog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



interface BlogShowProps {
    blog: Blog
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Blogs", href: index().url },
    { title: "View", href: "#" },
]

export default function BlogShow({ blog }: BlogShowProps) {
    const handleBack = () => window.history.back()
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
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">Title</h3>
                                        <p className="mt-1 text-base">{blog.title}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground">Subject</h3>
                                        <Badge className="mt-1 bg-blue-600 text-sm">{blog.subject}</Badge>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground">Slug</h3>
                                    <p className="mt-1  font-mono text-sm">{blog.slug}</p>
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
                                        <h3 className="text-sm font-medium text-muted-foreground">Author Name</h3>
                                        <p className="mt-1 text-sm">
                                            {blog.user?.name || 'Unknown'}
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

                    {/* Images */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Images</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {blog.image && blog.image.length > 0 ? (
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {blog.image.map((img: string, index: number) => (
                                                <CarouselItem key={index}>
                                                    <div className="relative">
                                                        <img
                                                            src={img}
                                                            alt={`${blog.title} - Image ${index + 1}`}
                                                            className="w-full h-[450px] rounded-lg object-cover"
                                                        />
                                                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                            {index + 1} / {blog.image?.length}
                                                        </span>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {(blog.image?.length ?? 0) > 1 && (
                                            <>
                                                <CarouselPrevious className="bg-white/70 hover:bg-white absolute left-4 top-1/2 -translate-y-1/2 rounded-full" />
                                                <CarouselNext className="bg-white/70 hover:bg-white absolute right-4 top-1/2 -translate-y-1/2 rounded-full" />
                                            </>
                                        )}
                                    </Carousel>
                                ) : (
                                    <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                                        <p className="text-muted-foreground text-sm">No images available</p>
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