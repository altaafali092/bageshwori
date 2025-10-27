import React from "react"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"

interface BlogCardProps {
  id: number
  title: string
  subject: string
  created_at: string
  excerpt: string
  image?: string
  link?: string // optional link to blog detail page
}

export function BlogCard({
  id,
  title,
  subject,
  date,
  excerpt,
  image,
  link = `/blog/${id}`,
}: BlogCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Blog Image (optional) */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Category */}
      <Badge className="mb-3 bg-emerald-100 text-emerald-700 font-medium">
        {subject}
      </Badge>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Date */}
      <div className="flex items-center text-gray-500 text-xs mb-4">
        <CalendarDays className="w-3.5 h-3.5 mr-1" />
        <span>{date}</span>
      </div>

      {/* Excerpt */}
      <p className="text-sm text-gray-600 mb-6 line-clamp-3">{excerpt}</p>

      {/* Read More */}
      <Link href={link}>
        <Button
          variant="ghost"
          size="sm"
          className="text-emerald-600 font-medium group/btn p-0"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
