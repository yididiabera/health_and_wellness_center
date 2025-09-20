"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="block p-6 h-full">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900 mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
          <Icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </motion.div>
  )
}
