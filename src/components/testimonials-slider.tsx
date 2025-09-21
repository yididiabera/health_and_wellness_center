"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "./ui/button"
import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
  const [isHovered, setIsHovered] = React.useState(false)

  const nextSlide = React.useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = React.useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToSlide = React.useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, currentIndex])

  const toggleAutoPlay = React.useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying)
  }, [isAutoPlaying])

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, nextSlide])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      } else if (event.key === " ") {
        event.preventDefault()
        toggleAutoPlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide, toggleAutoPlay])

  return (
    <div 
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleAutoPlay}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="text-sm">
              {isAutoPlaying ? "Pause" : "Play"}
            </span>
          </Button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {TESTIMONIALS.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-xs mx-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <motion.div
              className="bg-teal-600 dark:bg-teal-400 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-50 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl disabled:opacity-50 border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300 disabled:opacity-50 hover:scale-125",
              index === currentIndex
                ? "bg-teal-600 dark:bg-teal-400 scale-125 shadow-lg"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
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
