import React from "react"
import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, CalendarHeartIcon, ChevronRight } from "lucide-react"
import { Blogs } from "@/types/frontend"
import AuthLayout from "../layouts/AuthLayout"
import { blogDetail, home } from "@/routes"

interface BlogIndexProps {
    blogs: Blogs[]
}

export default function BlogIndex({ blogs }: BlogIndexProps) {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [selectedCategory, setSelectedCategory] = React.useState("All")

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesSearch
    })

    return (
        <AuthLayout>

            <Head title="Latest Articles" />
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={home()} className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-gray-900 line-clamp-1">Blog</span>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                            Latest Articles
                        </h1>
                        <p className="text-lg text-gray-600">
                            Discover insights, stories, and news from our team.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content - Blog Grid */}
                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredBlogs.length === 0 ? (
                                    <div className="col-span-2 text-center py-16">
                                        <p className="text-gray-500 text-lg">No articles found.</p>
                                    </div>
                                ) : (
                                    filteredBlogs.map((blog) => (
                                        <article
                                            key={blog.id}
                                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            {/* Image */}
                                            <Link href={`/blogs/${blog.slug || blog.id}`}>
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                                                    {blog.image && blog.image.length > 0 ? (
                                                        <img
                                                            src={blog.image[0]}
                                                            alt={blog.title}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>

                                            {/* Content */}
                                            <div className="p-6">
                                                <Link href={blogDetail(blog.slug)}>
                                                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                                                        {blog.title}
                                                    </h2>
                                                </Link>

                                                <p className="text-sm text-gray-500 mb-3">
                                                    {blog.user?.name || "John Doe"} <span className="text-gray-400">{formatDate(blog.created_at)}</span>
                                                </p>

                                                {blog.description && (
                                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                                        {blog.description}
                                                    </p>
                                                )}

                                                <Link
                                                    href={blogDetail(blog.slug)}
                                                    className="inline-flex items-center gap-2 text-white hover:text-white font-medium text-sm group bg-green-500 px-3 py-1.5 rounded-md"
                                                >
                                                    Read More
                                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </article>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 space-y-6">
                                {/* Search */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder="Search articles..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10 bg-gray-50 border-gray-200"
                                        />
                                    </div>
                                </div>

                                {/* Filter by Category */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        Filter by Category
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {blogs.map((blog) => (
                                            <Badge
                                                key={blog.id}
                                                variant={selectedCategory === blog.subject ? "default" : "outline"}
                                                className={`cursor-pointer ${selectedCategory === blog.subject
                                                    ? "bg-blue-600 hover:bg-blue-700"
                                                    : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() => setSelectedCategory(blog.subject)}
                                            >
                                                {blog.subject}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular Posts (Optional) */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        Popular Posts
                                    </h3>
                                    <div className="space-y-4">
                                        {blogs.slice(0, 3).map((blog) => (
                                            <Link
                                                key={blog.id}
                                                href={`/blogs/${blog.slug || blog.id}`}
                                                className="block group"
                                            >
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                                    {blog.title}
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    {formatDate(blog.created_at)}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}