"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, HeartHandshake, Home, GraduationCap } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import Link from "next/link"

// ✅ Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade, Parallax } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/parallax"

const features = [
  { title: "Person-Centered Support", description: "Every individual is unique. We provide services tailored to personal goals, strengths, and needs.", icon: Users },
  { title: "Community Inclusion", description: "Helping individuals actively participate in their communities with dignity and independence.", icon: HeartHandshake },
  { title: "Safe & Supportive Homes", description: "Residential programs that create safe, welcoming, and empowering living environments.", icon: Home },
  { title: "Growth & Learning", description: "Skill-building and educational opportunities to promote independence and lifelong learning.", icon: GraduationCap },
]

const galleryImages = [
  { src: "images/smiling_caregive.jpg" },
  { src: "images/outdoor_community.jpg" },
  { src: "images/therapy.jpg" },
  { src: "images/community_support1.jpg" },
]

export default function HomePage() {
  // --- grouped slides: each inner array is one Swiper slide showing 4 images (2x2 grid) ---
  const groupedSlides = [
    [
      { src: "images/outdoor_community.jpg" },
      { src: "images/charity.jpg" },
      { src: "images/community_support.jpg" },
      { src: "images/group_wellness.jpg" },
    ],
    [
      { src: "images/quality_program.jpg" },
      { src: "images/bg2.jpg" },
      { src: "images/care.jpg" },
      { src: "images/therapy.jpg" },
    ],
  ]

  // Unique animation presets (one per image slot)
  const imageVariants = [
    { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }, // slide up
    { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }, // slide from left
    { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } }, // slide from right
    { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } }, // zoom in
  ]

  // Different hover classes
  const hoverClasses = [
    "hover:scale-110",
    "hover:-translate-y-2 hover:scale-105",
    "hover:translate-y-2 hover:scale-105",
    "hover:translate-x-2 hover:scale-105",
  ]

  return (
    <div className="flex flex-col space-y-20">
      {/* ===================== HERO: 2x2 grid with overlay title ===================== */}
<section className="relative w-full h-[90vh]">
  <Swiper
    modules={[Autoplay, Pagination, Parallax, EffectFade]}
    autoplay={{ delay: 4200, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop
    speed={1000}
    className="w-full h-full"
    parallax
  >
    {groupedSlides.map((group, groupIndex) => (
      <SwiperSlide key={groupIndex}>
        <div className="w-full h-[90vh] grid grid-cols-2 grid-rows-2 gap-0">
          {group.map((img, idx) => {
            const v = imageVariants[idx % imageVariants.length]
            const hoverClass = hoverClasses[idx % hoverClasses.length]
            return (
              <motion.div
                key={idx}
                initial={v.initial}
                animate={v.animate}
                transition={{ duration: 0.9, delay: idx * 0.15 }}
                className="relative w-full h-full overflow-hidden"
              >
                <img
                  src={img.src}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hoverClass}`}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            )
          })}
        </div>

        {/* ✅ Centered Title + Subtitle Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{
              textShadow:
                "2px 2px 6px rgba(0,0,0,0.9), -2px -2px 6px rgba(0,0,0,0.7)",
            }}
          >
            <span className="block">Wellness Health Care</span>
            <span className="block">LLC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-lg md:text-2xl text-gray-100 max-w-2xl"
            style={{
              textShadow:
                "1px 1px 4px rgba(0,0,0,0.8), -1px -1px 4px rgba(0,0,0,0)",
            }}
          >
            A trusted PASA agency inspiring independence, dignity, and compassionate care across Colorado.
          </motion.p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* ===================== Features Section ===================== */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Wellness Health Care LLC?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dedicated to supporting individuals and families through compassionate, person-centered services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-900 mb-6">
                  <feature.icon className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Services Section ===================== */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our PASA Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From residential care to community integration, we help individuals thrive with dignity and independence.
            </motion.p>
            <Button asChild size="lg" className="px-10 py-5 text-lg rounded-full shadow-xl hover:scale-110 transition-transform">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} className="rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Huge Image Gallery ===================== */}
      <section className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Life at Wellness Health Care
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A glimpse of our daily activities, community events, and joyful moments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl shadow-lg hover:shadow-3xl"
              >
                <img
                  src={img.src}
                  className="w-full h-[350px] object-cover transform hover:scale-110 transition duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Testimonials ===================== */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Families Say
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stories from families who have found hope and support with Wellness Health Care LLC.
            </motion.p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-700 dark:to-teal-600">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Partner With Wellness Health Care LLC
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
              Serving individuals with intellectual and developmental disabilities across Colorado.  
              Let’s create opportunities for independence, dignity, and growth together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-5 text-lg shadow-lg hover:scale-110 transition-transform">
                <Link href="/contact">Request Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-10 py-5 text-lg transition-all">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="mt-10 text-teal-100 space-y-2 text-lg">
              <p>1401 Ulster Street, Denver, CO 80220</p>
              <p>+1 720 552 1710</p>
              <p>wellnesshealthcare2025@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
