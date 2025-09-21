"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import Link from "next/link"

const serviceDetails = [
  {
    id: "holistic-therapy",
    title: "Holistic Therapy",
    description: "Comprehensive wellness approach integrating mind, body, and spirit for complete healing.",
    features: [
      "Mind-body integration techniques",
      "Energy healing modalities",
      "Stress reduction strategies",
      "Emotional wellness support",
      "Spiritual guidance and counseling"
    ],
    duration: "60-90 minutes",
    price: "Starting at $120",
    rating: 4.9,
    reviews: 127
  },
  {
    id: "nutrition-counseling",
    title: "Nutrition Counseling",
    description: "Personalized nutrition plans to support your health goals and lifestyle.",
    features: [
      "Personalized meal planning",
      "Nutritional assessment",
      "Supplement recommendations",
      "Lifestyle modification support",
      "Ongoing monitoring and adjustments"
    ],
    duration: "45-60 minutes",
    price: "Starting at $100",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "stress-management",
    title: "Stress Management",
    description: "Evidence-based techniques to reduce stress and improve mental well-being.",
    features: [
      "Meditation and mindfulness training",
      "Breathing exercises",
      "Cognitive behavioral techniques",
      "Relaxation therapy",
      "Stress assessment and monitoring"
    ],
    duration: "45-60 minutes",
    price: "Starting at $90",
    rating: 4.9,
    reviews: 156
  },
  {
    id: "wellness-coaching",
    title: "Wellness Coaching",
    description: "One-on-one guidance to help you achieve your personal wellness goals.",
    features: [
      "Goal setting and planning",
      "Accountability support",
      "Lifestyle coaching",
      "Habit formation strategies",
      "Progress tracking and evaluation"
    ],
    duration: "50-70 minutes",
    price: "Starting at $110",
    rating: 4.7,
    reviews: 98
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Wellness Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive wellness solutions designed to support your journey to optimal health and well-being.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features - Simplified */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      {service.price}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {service.duration}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/contact?service=${service.id}`} className="flex items-center justify-center">
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our simple 3-step process makes it easy to get started on your wellness journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "We start with a comprehensive assessment to understand your needs, goals, and current health status."
              },
              {
                step: "02",
                title: "Personalized Plan",
                description: "Based on your consultation, we create a customized wellness plan tailored to your specific requirements."
              },
              {
                step: "03",
                title: "Ongoing Support",
                description: "We provide continuous guidance, monitoring, and adjustments to ensure you achieve your wellness goals."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
                  <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 dark:bg-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a healthier, more balanced life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Book Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                <Link href="/testimonials">
                  Read Testimonials
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
