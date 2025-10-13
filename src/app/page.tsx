"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, HeartHandshake, Home, GraduationCap } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import Link from "next/link"

// Swiper Imports
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
{/* ===================== HERO: Single-Image Animated Slider ===================== */}
<section className="relative w-full h-[90vh] overflow-hidden">
  <Swiper
    modules={[Autoplay, Pagination, EffectFade]}
    autoplay={{ delay: 4500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    effect="fade"
    loop
    speed={1200}
    className="w-full h-full"
  >
    {[
      { src: "images/outdoor_community.jpg", caption: "Empowering Lives with Compassion" },
      { src: "images/therapy.jpg", caption: "Supporting Independence & Dignity" },
      { src: "images/group_wellness.jpg", caption: "Trusted PASA Agency in Colorado" },
      { src: "images/charity.jpg", caption: "Caring Hearts, Meaningful Impact" },
    ].map((slide, index) => (
      <SwiperSlide key={index}>
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[90vh]"
        >
          {/* Background Image */}
          <img
            src={slide.src}
            alt={slide.caption}
            className="w-full h-full object-cover transition-transform duration-[3000ms] ease-in-out transform hover:scale-105"
            loading="lazy"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]"
            >
              Wellness Health Care LLC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg md:text-2xl text-gray-100 max-w-2xl leading-relaxed"
            >
              {slide.caption}
            </motion.p>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* ===================== PERSISTENT INFINITE CURVED SHAPE ===================== */}
<div className="relative w-full h-[180px] overflow-hidden bg-white dark:bg-gray-950">
  <div className="absolute bottom-0 left-0 w-[200%] h-[180px]">
    {/* Gradient Wave (background) */}
    <svg
      className="absolute bottom-0 left-0 w-[200%] h-[180px] animate-wave-slow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradientCurve" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradientCurve)"
        d="M0,224L60,197.3C120,171,240,117,360,96C480,75,600,85,720,122.7C840,160,960,224,1080,234.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L0,320Z"
      />
    </svg>

    {/* White Wave (foreground) */}
    <svg
      className="absolute bottom-0 left-0 w-[200%] h-[180px] opacity-70 animate-wave-fast"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,160L60,165.3C120,171,240,181,360,202.7C480,224,600,256,720,245.3C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,320L0,320Z"
      />
    </svg>
  </div>
</div>

{/* ===================== CUSTOM ANIMATIONS ===================== */}
<style jsx>{`
  @keyframes waveScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-wave-slow {
    animation: waveScroll 22s linear infinite;
  }

  .animate-wave-fast {
    animation: waveScroll 14s linear infinite;
  }
`}</style>

{/* ===================== Features Section ===================== */}
<section className="py-14 md:py-18 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
  <div className="container mx-auto px-4 lg:px-20">
    {/* Section Header */}
    <div className="text-center mb-14 md:mb-18">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Wellness Health Care LLC?
      </motion.h2>
      <motion.p
        className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Dedicated to supporting individuals and families through compassionate, person-centered services.
      </motion.p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="relative group rounded-3xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-transform duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-400 via-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-teal-100 dark:bg-teal-900 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="h-10 w-10 text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ===================== Services Section ===================== */}
<section className="py-12 md:py-15 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center mb-12 md:mb-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our PASA Services
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        From residential care to community integration, we help individuals thrive with dignity and independence.
      </motion.p>
      <Button
        asChild
        size="lg"
        className="px-10 py-5 text-lg rounded-full shadow-xl hover:scale-110 transition-transform"
      >
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
          <ServiceCard
            {...service}
            className="rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3"
          />
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

    {/*  Swiper for Sliding Two Images */}
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      spaceBetween={10} //  small gap between images
      slidesPerView={2} //  show 2 images side by side
      className="w-full h-[450px] rounded-2xl overflow-hidden"
    >
      {galleryImages.map((img, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[450px] overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
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
              <p className="text-gray-300">
  14291 E 4th Ave Aurora, CO 80011
  <br />
  Suite 7-110
</p>

              <p>+1 720 552 1710</p>
              <p>wellnesshealthcare2025@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
