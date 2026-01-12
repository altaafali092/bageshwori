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
import { index, store, update } from "@/routes/admin/blogs"
import { Blogs } from "@/types/Admin/Blogs"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';



interface BlogEditProps {
    blog: Blogs;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Blogs", href: index().url },
    { title: "Edit", href: "#" },
]

export default function BlogEdit({ blog }: BlogEditProps) {
    const [description, setDescription] = React.useState(blog.description ?? "")
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
                            <h1 className="text-2xl font-bold tracking-tight">Update Blog</h1>
                            <p className="text-muted-foreground">
                                Update the blog details with image and description.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Blog Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={update(blog.id).url}
                                method="post"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>
                                        <input type="hidden" name="_method" value="put" />
                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Blog Title</Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    defaultValue={blog.title}
                                                />
                                                {errors.title && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.title}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Blog subject</Label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    defaultValue={blog.subject}
                                                />
                                                {errors.subject && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.subject}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug Name</Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    defaultValue={blog.slug}
                                                />
                                                {errors.slug && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.slug}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="image">Image</Label>
                                                {blog.image && blog.image.length > 0 ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {blog.image.map((img: string, index: number) => (
                                                            <div key={index} className="mb-2">
                                                                <img
                                                                    src={img}
                                                                    alt="Current blog image"
                                                                    className="h-32 w-32 rounded-md border object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-sm text-red-500">
                                                        Please upload an image.
                                                    </p>
                                                )}
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    name="image[]"
                                                    multiple
                                                    accept="image/*"
                                                />
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