import React from "react"
import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Calendar,
    Clock,
    User,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    ArrowLeft,
    ChevronRight
} from "lucide-react"
import AuthLayout from "../layouts/AuthLayout"
import { BlogCard } from "@/components/Frontend/BlogCard"
import { blogDetail } from "@/routes"
import { Blogs } from "@/types/frontend"


interface BlogDetailProps {
    blog: Blogs
    blogs: Blogs[]
}

export default function BlogDetail({ blog, blogs = [] }: BlogDetailProps) {
    
    const getReadTime = (description?: string) => {
        if (!description) return "5 min read"
        const words = description.split(' ').length
        const minutes = Math.ceil(words / 200)
        return `${minutes} min read`
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

    return (
        <AuthLayout>
            <Head title={blog.title} />

            <div className="min-h-screen bg-gray-50">
                {/* Breadcrumb */}
                <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                                Blog
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-gray-900 line-clamp-1">{blog.title}</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Back Button */}
                    <Link href="/blogs">
                        <Button variant="ghost" className="mb-6 -ml-1 bg-gray-200">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Back to Articles
                        </Button>
                    </Link>

                    {/* Main Content */}
                    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {/* Header */}
                        <div className="p-8 sm:p-12 border-b">
                            {/* Category Badge */}
                            <Badge className="mb-4 bg-blue-600">{blog.subject}</Badge>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {blog.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{blog.user?.name || "John Doe"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{getReadTime(blog.description)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image/Carousel */}
                        {blog.image && blog.image.length > 0 && (
                            <div className="relative m-2 flex gap-2 overflow-x-auto scrollbar-hide     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {blog.image.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={blog.title}
                                        className="w-80 h-[450px] object-cover rounded-xl flex-shrink-0"
                                    />
                                ))}
                            </div>
                        )}


                        {/* Article Content */}
                        <div className="p-8 sm:p-12">
                            <div className="prose prose-lg max-w-none">
                                {blog.description && (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {blog.description}
                                    </div>
                                )}
                            </div>

                            {/* Share Section */}
                            <div className="mt-12 pt-8 border-t">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Share this article
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`, '_blank')}
                                        >
                                            <Twitter className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                                        >
                                            <Facebook className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                                        >
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    {blogs.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Related Articles
                            </h2>
                            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-2">
                                {blogs.slice(0, 4).map((relatedBlog) => (
                                   <BlogCard
                                    key={relatedBlog.id}
                                    id={relatedBlog.id}
                                    title={relatedBlog.title}
                                    subject={relatedBlog.subject}
                                    date={new Date(relatedBlog.created_at).toLocaleDateString()}
                                    excerpt={relatedBlog.description}
                                    link={blogDetail(relatedBlog.slug)}
                                   />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthLayout>
    )
}