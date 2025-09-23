"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// ✅ Updated service content to fit PASA Colorado
const serviceDetails = [
  {
    id: "personal-care",
    title: "Personal Care Assistance",
    description: "Compassionate support for daily living activities, helping individuals maintain independence and dignity.",
    features: [
      "Bathing and grooming assistance",
      "Mobility and transfer support",
      "Medication reminders",
      "Meal preparation and feeding support",
      "Personal hygiene and safety monitoring"
    ],
    duration: "Flexible scheduling",
    price: "Custom Plans",
    rating: 4.9,
    reviews: 132
  },
  {
    id: "community-integration",
    title: "Community Integration",
    description: "Helping individuals connect, participate, and thrive in their local community through tailored activities.",
    features: [
      "Recreational activities and outings",
      "Job and volunteer support",
      "Transportation assistance",
      "Life skill development",
      "Socialization opportunities"
    ],
    duration: "Hourly or Daily",
    price: "Custom Plans",
    rating: 4.8,
    reviews: 115
  },
  {
    id: "respite-care",
    title: "Respite Care",
    description: "Reliable short-term relief for family caregivers while ensuring loved ones are safe and supported.",
    features: [
      "In-home support",
      "Overnight stays",
      "Flexible scheduling options",
      "Engaging care activities",
      "Emergency respite coverage"
    ],
    duration: "Hourly or Overnight",
    price: "Custom Plans",
    rating: 4.7,
    reviews: 98
  },
  {
    id: "habilitation-services",
    title: "Habilitation Services",
    description: "Skill-building and individualized support to promote independence and improve quality of life.",
    features: [
      "Daily living skills training",
      "Communication and social skills",
      "Self-advocacy support",
      "Personalized development plans",
      "Ongoing progress monitoring"
    ],
    duration: "Varies by plan",
    price: "Custom Plans",
    rating: 4.9,
    reviews: 121
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ===================== Hero Section with Background Image ===================== */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('../../images/care.jpg')" }} // ✅ replace with your background
        ></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Wellness Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Personalized PASA-approved services designed to empower individuals and families across Colorado.
          </motion.p>
        </div>
      </section>

      {/* ===================== Services Grid ===================== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      {service.price}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">{service.duration}</div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/contact?service=${service.id}`} className="flex items-center justify-center">
                      Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
