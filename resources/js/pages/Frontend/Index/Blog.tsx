import { BlogCard } from "@/components/Frontend/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, ArrowRight } from "lucide-react";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Easy Pasta Recipes for Busy Weeknights",
    date: "October 10, 2025",
    category: "Food & Lifestyle",
    excerpt:
      "Discover quick and delicious pasta recipes you can prepare in under 30 minutes using simple ingredients from your kitchen.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Wine for Dinner",
    date: "October 8, 2025",
    category: "Wine & Dining",
    excerpt:
      "Learn the basics of wine pairing to make every meal special — from light whites to full-bodied reds.",
  },
  {
    id: 3,
    title: "10 Health Benefits of Fresh Fruits Daily",
    date: "October 5, 2025",
    category: "Health & Wellness",
    excerpt:
      "Eating fruits regularly can boost your immunity, improve skin health, and help maintain a balanced diet.",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Organic Grocery Shopping",
    date: "October 1, 2025",
    category: "Sustainability",
    excerpt:
      "Going organic doesn’t have to be expensive. Here’s how to shop smart and make healthy choices for your family.",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 pb-2">
          Latest News & Blogs
        </h2>
        <Button
          variant="outline"
          className="rounded-full px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          See All
        </Button>
      </div>
      <Separator className="bg-emerald-500 mb-8 mt-4" />

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            category={blog.category}
            date={blog.date}
            excerpt={blog.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
