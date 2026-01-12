import React from "react"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"

interface BlogCardProps {
  id: number
  title: string
  subject: string
  date: string
  excerpt: string
  image?: string
  link?: string
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
  const htmlToText = (html?: string) => {
    if (!html) return "";
    if (typeof document === "undefined") return html;
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <Badge className="mb-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium border-transparent">
        {subject}
      </Badge>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>

      <div className="flex items-center text-gray-500 dark:text-slate-400 text-xs mb-4">
        <CalendarDays className="w-3.5 h-3.5 mr-1" />
        <span>{date}</span>
      </div>

      <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm mb-6 line-clamp-3">
        {htmlToText(excerpt)}
      </p>

      <Link href={link}>
        <Button
          variant="ghost"
          size="sm"
          className="text-emerald-600 dark:text-emerald-400 font-medium group/btn p-0 hover:bg-transparent hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
