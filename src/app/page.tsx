"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import Link from "next/link"

// ✅ Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const features = [
  { title: "Personalized Care", description: "Tailored health and wellness plans designed specifically for your unique needs and goals.", icon: CheckCircle },
  { title: "Expert Professionals", description: "Licensed healthcare providers with years of experience in holistic and modern wellness practices.", icon: CheckCircle },
  { title: "Proven Results", description: "Evidence-based treatments and programs that empower patients to live healthier lives.", icon: CheckCircle },
  { title: "Holistic Approach", description: "Comprehensive care that addresses body, mind, and spirit for complete well-being.", icon: CheckCircle },
]

const sliderImages = [
  { src: "images/bg1.jpg", alt: "Healthcare consultation" },
  { src: "images/bg3.jpg", alt: "Wellness treatments" },
  { src: "images/bg5.jpg", alt: "Holistic healing" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[85vh] bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${img.src})` }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative text-center text-white px-6 md:px-12 max-w-3xl"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                    Welcome to Wellness Health Care LLC
                  </h1>
                  <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
                    Your trusted partner in holistic health and personalized care in Denver, CO.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform">
                    <Link href="/contact">Book Your Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Wellness Health Care?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Compassionate care, medical expertise, and holistic practices to help you achieve optimal health.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 mb-4">
                  <feature.icon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Health & Wellness Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our wide range of healthcare and wellness services designed to support your health journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Patients Say
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real stories from people who have experienced transformation through our care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TestimonialsSlider />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-700 dark:to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Begin Your Health Journey?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Take the first step towards better health and well-being. Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-4 shadow-lg hover:scale-105 transition-transform">
                <Link href="/contact">Schedule an Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-8 py-4 transition-all"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="mt-8 text-teal-100 space-y-1">
              <p> 1401 Ulster Street, Denver, CO 80220</p>
              <p> +1 720 552 1710</p>
              <p> Wellnesshealthcare2025@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
