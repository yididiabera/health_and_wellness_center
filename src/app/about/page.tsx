"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We provide person-centered care that respects each individual’s dignity, rights, and unique needs.",
  },
  {
    icon: Target,
    title: "Individualized Support",
    description:
      "Our services are tailored to help individuals reach their personal goals and achieve greater independence.",
  },
  {
    icon: Users,
    title: "Community Inclusion",
    description:
      "We believe in building strong connections and ensuring everyone is an active part of their community.",
  },
  {
    icon: Award,
    title: "Excellence & Integrity",
    description:
      "We maintain the highest standards of quality, accountability, and professionalism in all that we do.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative py-28 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="../../images/about.jpg"
            alt="Background wellness"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Wellness Health Care LLC
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-teal-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Colorado-based Program Approved Service Agency (PASA) dedicated to
            supporting individuals with intellectual and developmental
            disabilities through compassionate care, independence, and community
            inclusion.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision as Animated Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="../../images/mission.jpg"
              alt="Our Mission"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our mission is to empower individuals with intellectual and
                developmental disabilities to live meaningful, independent, and
                fulfilling lives. We partner with families and communities to
                provide the highest quality care and opportunities for growth.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Every service we deliver is designed with compassion and respect,
                ensuring that each person has the support they need to thrive.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="../../images/vision.jpg"
              alt="Our Vision"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To create an inclusive world where every person with disabilities
                is valued, supported, and given equal opportunities to reach
                their full potential as active members of society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
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
              Building brighter futures through dignity, independence, and
              opportunity.
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
              Wellness Health Care LLC was founded with the vision of changing
              lives by providing compassionate, individualized support to people
              with disabilities. Our team recognized the need for services that
              focus not only on care but also on dignity, independence, and
              community inclusion.
            </p>
            <p className="mb-6">
              Over the years, we’ve grown into a trusted provider of residential
              support, day programs, employment assistance, and community
              engagement. We work alongside families, advocates, and community
              partners to create opportunities for each individual to thrive.
            </p>
            <p>
              Today, we remain committed to our founding purpose supporting
              people with disabilities to lead empowered, meaningful lives.
            </p>
          </motion.div>
        </div>
      </section>

            {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The guiding principles that shape our work at Wellness Health Care LLC.
            </p>
          </motion.div>

          {/* Animated Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-transform duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              >
                {/* Gradient Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400 via-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

                {/* Card Content */}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 dark:bg-teal-700">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner With Us for Quality Care
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Whether you are an individual, family, or community partner, we
              are here to provide services that promote dignity, independence,
              and inclusion. Connect with us today to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
