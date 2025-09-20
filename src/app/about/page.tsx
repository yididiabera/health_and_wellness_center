"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Heart, Target, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every client with empathy, dignity, and respect, putting your well-being at the heart of everything we do.",
  },
  {
    icon: Target,
    title: "Personalized Wellness",
    description: "Your health journey is unique. We design tailored care plans that align with your goals and lifestyle.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "We foster a supportive community where individuals grow stronger together on the path to wellness.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "We strive for the highest standards in healthcare and continuously innovate to serve you better.",
  },
]

export default function AboutPage() {
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
              About Health and Wellness Care LLC
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your trusted partner in health, healing, and holistic well-being. Together, we help you live a balanced and fulfilling life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Health and Wellness Care LLC, our mission is to empower individuals and families to achieve complete well-being—mind, body, and spirit. We combine modern medical insights with holistic practices to ensure lasting health and transformation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                By offering compassionate care and personalized solutions, we guide you toward a healthier lifestyle that works for you.
              </p>
            </motion.div>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              To empower individuals on their journey to holistic well-being by providing comprehensive, 
              personalized wellness solutions that nurture the mind, body, and spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              To create a world where every individual has access to holistic wellness resources and 
              support, enabling them to live their most vibrant, balanced, and fulfilling lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Founded on the belief that wellness is not just the absence of illness, but the presence of vitality and balance.
              </p>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-6">
                Health and Wellness Care LLC was established with a simple vision: to transform healthcare into a compassionate, people-centered journey. Our founders saw the need for a place where individuals could receive care that supports the whole person, not just the symptoms.
              </p>
              <p className="mb-6">
                Over the years, we have grown into a trusted center where healthcare professionals, wellness coaches, and holistic practitioners work together to support our clients in achieving their goals. From stress management and nutrition counseling to holistic therapies, we are committed to helping people thrive.
              </p>
              <p>
                Today, we continue to evolve while staying true to our core values—compassion, integrity, excellence, and community care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These values shape everything we do at Health and Wellness Care LLC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 mb-4">
                  <value.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
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
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Discover personalized care and holistic wellness solutions that help you live your healthiest life. Connect with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
