"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const features = [
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Mind, body, and spirit wellness",
  },
  {
    icon: Shield,
    title: "Expert Care",
    description: "Licensed professionals",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join our wellness community",
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-100/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Journey to{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Holistic Well-being
            </span>{" "}
            Starts Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover personalized wellness solutions that nurture your mind, body, and spirit for a healthier, more balanced life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/services" className="flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-teal-600 dark:border-teal-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-teal-600 dark:bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
