"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const CONTACT_INFO = {
    name: "Wellness Health Care LLC",
    phone: "+1 720 552 1710",
    email: "Wellnesshealthcare2025@gmail.com",
    address: "1401 Ulster Street, Denver, CO 80220",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed",
  }

  const infoCards = [
    { icon: Phone, title: "Phone", content: CONTACT_INFO.phone, note: "Call us for immediate assistance", link: `tel:${CONTACT_INFO.phone}` },
    { icon: Mail, title: "Email", content: CONTACT_INFO.email, note: "We'll respond within 24 hours", link: `mailto:${CONTACT_INFO.email}` },
    { icon: MapPin, title: "Address", content: CONTACT_INFO.address, note: "Visit our wellness center" },
    { icon: Clock, title: "Hours", content: CONTACT_INFO.hours, note: "" },
  ]

  return (
    <div className="flex flex-col">

      {/* Hero Section with background image */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('../../images/care.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Animated floating shapes */}
        <motion.div
          className="absolute top-0 left-1/4 w-24 h-24 bg-teal-400/30 rounded-full blur-3xl z-0 animate-bounce-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl z-0 animate-pulse-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with Wellness Health Care LLC in Denver, Colorado. We are ready to assist you on your wellness journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Cards */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below to request services or ask questions. We will respond promptly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" type="text" required placeholder="Full Name *" value={formData.name} onChange={handleChange} className="rounded-xl border-gray-300 dark:border-gray-700" />
                <Input name="email" type="email" required placeholder="Email Address *" value={formData.email} onChange={handleChange} className="rounded-xl border-gray-300 dark:border-gray-700" />
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                />
                <Button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-400 dark:hover:bg-teal-500 transition-transform hover:scale-105" size="lg">
                  Send Message <Send className="h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-1 gap-6">
              {infoCards.map((card) => (
                <motion.div
                  key={card.title}
                  className="flex items-start p-6 bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <card.icon className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
                    {card.link ? (
                      <a href={card.link} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{card.content}</a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{card.content}</p>
                    )}
                    {card.note && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{card.note}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-gray-600 dark:text-gray-300">Visit our wellness center located in Denver, Colorado.</p>
          </motion.div>
          <motion.div className="rounded-xl overflow-hidden shadow-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.283586078228!2d-104.89623268462633!3d39.7392019794486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f0a6b6b6b6b%3A0xf3a7b6d5b2f3a7b6!2s1401%20Ulster%20St%2C%20Denver%2C%20CO%2080220%2C%20USA!5e0!3m2!1sen!2sus!4v1695123456789!5m2!1sen!2sus"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 dark:bg-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your Wellness Journey?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait to start living your best life. Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl hover:scale-105 transition-transform">
                <a href={`tel:${CONTACT_INFO.phone}`}>Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white text-white hover:bg-white hover:text-teal-600 transition-transform hover:scale-105">
                <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
