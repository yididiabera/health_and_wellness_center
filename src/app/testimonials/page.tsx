"use client"

import * as React from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import { Star, Quote, Smile, Heart } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { TESTIMONIALS } from "@/lib/constants"
import Link from "next/link"

// ✅ Animated number component
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = React.useState(0)
  const count = useMotionValue(0)

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [value, count])

  const formatted = Number(display.toFixed(value % 1 !== 0 ? 1 : 0))
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  )
}

// ✅ Additional testimonials
const additionalTestimonials = [
  {
    id: "testimonial-5",
    name: "Lisa Wang",
    role: "Yoga Instructor",
    content:
      "The holistic approach at PASA Wellness has completely transformed my understanding of health. The team's expertise and genuine care made all the difference in my wellness journey.",
    rating: 5,
  },
  {
    id: "testimonial-6",
    name: "Robert Martinez",
    role: "Retired Teacher",
    content:
      "After years of struggling with stress and anxiety, the stress management program here gave me the tools I needed to find peace and balance in my life.",
    rating: 5,
  },
  {
    id: "testimonial-7",
    name: "Jennifer Kim",
    role: "Graphic Designer",
    content:
      "The nutrition counseling service was a game-changer for me. I learned how to nourish my body properly and feel more energetic than I have in years.",
    rating: 5,
  },
  {
    id: "testimonial-8",
    name: "Thomas Anderson",
    role: "Software Developer",
    content:
      "The wellness coaching sessions helped me develop healthy habits that I've been able to maintain long-term. I'm grateful for the ongoing support and guidance.",
    rating: 5,
  },
]

const allTestimonials = [...TESTIMONIALS, ...additionalTestimonials]

export default function TestimonialsPage() {
  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Happy Clients",
      icon: <Smile className="h-10 w-10 text-teal-600 mb-2" />, // ✅ unified color
    },
    {
      number: 4.9,
      suffix: "",
      label: "Average Rating",
      icon: <Star className="h-10 w-10 text-teal-600 mb-2" />,
    },
    {
      number: 95,
      suffix: "%",
      label: "Success Rate",
      icon: <Heart className="h-10 w-10 text-teal-600 mb-2" />,
    },
  ]

  return (
    <div className="flex flex-col space-y-16">
      {/* ✅ Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-teal-400 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Stories of transformation and care from people we proudly serve across Colorado.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/images/care.jpg')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* ✅ Stats Section */}
      <section className="py-16 bg-gradient-to-tr from-teal-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.icon}
                <div className="text-5xl md:text-6xl font-extrabold text-teal-600 mb-2">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Testimonial */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 text-teal-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed">
              The holistic approach at PASA Wellness has completely transformed my life. I feel more balanced,
              energized, and at peace than I ever thought possible. The team’s expertise and genuine care made all the
              difference in my journey.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-teal-600" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                <div className="text-gray-600 dark:text-gray-400">Marketing Director</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ All Testimonials Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real stories from real people who have experienced the compassionate care and support of PASA programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved their goals with PASA-approved services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 rounded-full"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
