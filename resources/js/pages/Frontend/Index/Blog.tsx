import { BlogCard } from "@/components/Frontend/BlogCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogDetail, blogIndex } from "@/routes";
import { Blogs } from "@/types/frontend";
import { Link } from "@inertiajs/react";
import React from "react";

interface BlogIndexProps {
  blogs: Blogs[]
}

const Blog = ({ blogs }: BlogIndexProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white pb-2">
          Latest News & Blogs
        </h2>
        <Link href={blogIndex()}>
          <Button
            variant="outline"
            className="rounded-full px-8 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            See All
          </Button>
        </Link>
      </div>
      <Separator className="bg-emerald-500 mb-8 mt-4" />

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            subject={blog.subject}
            date={new Date(blog.created_at).toLocaleDateString()}
            excerpt={blog.description}
            link={blogDetail(blog.slug)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
