"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  className?: string
}

export function TestimonialCard({ name, role, content, rating, className }: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="flex-1">
          <div className="font-semibold text-gray-900 dark:text-white">
            {name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {role}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
