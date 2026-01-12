import React from "react"
import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, CalendarHeartIcon, ChevronRight } from "lucide-react"
import AuthLayout from "../layouts/AuthLayout"
import { blogDetail, home } from "@/routes"
import { Blogs } from "@/types/Frontend"

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

    const htmlToText = (html?: string) => {
        if (!html) return "";
        if (typeof document === "undefined") return html;
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || blog.subject === selectedCategory
        return matchesSearch && matchesCategory
    })

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.subject)))]

    return (
        <AuthLayout>
            <Head title="Latest Articles" />
            <div className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                        <Link href={home()} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-gray-900 dark:text-white line-clamp-1">Blog</span>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                            Latest Articles
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-slate-400">
                            Discover insights, stories, and news from our team.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content - Blog Grid */}
                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredBlogs.length === 0 ? (
                                    <div className="col-span-2 text-center py-16">
                                        <p className="text-gray-500 dark:text-slate-400 text-lg">No articles found.</p>
                                    </div>
                                ) : (
                                    filteredBlogs.map((blog) => (
                                        <article
                                            key={blog.id}
                                            className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md dark:shadow-none border border-transparent dark:border-slate-800 transition-all"
                                        >
                                            {/* Image */}
                                            <Link href={blogDetail(blog.slug)}>
                                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-800">
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
                                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                                                        {blog.title}
                                                    </h2>
                                                </Link>

                                                <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
                                                    {blog.user?.name || "John Doe"} <span className="text-gray-400 dark:text-slate-500 ml-2">{formatDate(blog.created_at)}</span>
                                                </p>

                                                {blog.description && (
                                                    <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-3">
                                                        {htmlToText(blog.description)}
                                                    </p>
                                                )}

                                                <Link
                                                    href={blogDetail(blog.slug)}
                                                    className="inline-flex items-center gap-2 text-white hover:text-white font-medium text-sm group bg-emerald-600 dark:bg-emerald-500 px-4 py-2 rounded-md transition-colors"
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
                                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm dark:shadow-none border border-transparent dark:border-slate-800">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder="Search articles..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* Filter by Category */}
                                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm dark:shadow-none border border-transparent dark:border-slate-800">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                        Filter by Category
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <Badge
                                                key={category}
                                                variant={selectedCategory === category ? "default" : "outline"}
                                                className={`cursor-pointer transition-colors ${selectedCategory === category
                                                    ? "bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white"
                                                    : "hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                                                    }`}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular Posts */}
                                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm dark:shadow-none border border-transparent dark:border-slate-800">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                        Popular Posts
                                    </h3>
                                    <div className="space-y-4">
                                        {blogs.slice(0, 3).map((blog) => (
                                            <Link
                                                key={blog.id}
                                                href={blogDetail(blog.slug)}
                                                className="block group"
                                            >
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">
                                                    {blog.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 dark:text-slate-400">
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