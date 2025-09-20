"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard
              {...TESTIMONIALS[currentIndex]}
              className="mx-auto"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200 disabled:opacity-50",
              index === currentIndex
                ? "bg-teal-600 dark:bg-teal-400 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Screen Reader Announcement */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Testimonial {currentIndex + 1} of {TESTIMONIALS.length}: {TESTIMONIALS[currentIndex].name}, {TESTIMONIALS[currentIndex].role}
      </div>
    </div>
  )
}
