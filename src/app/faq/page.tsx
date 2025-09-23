"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// ✅ FAQ items (customized for PASA-like agencies in Colorado)
const FAQS = [
  {
    question: "What is a PASA agency and how does Wellness Health Care LLC relate to it?",
    answer:
      "A Program Approved Service Agency (PASA) is an organization approved by the State of Colorado to provide Medicaid-funded services for individuals with intellectual and developmental disabilities. Wellness Health Care LLC is a licensed PASA provider, delivering high-quality, person-centered care to meet each individual’s unique needs.",
  },
  {
    question: "What types of services do you provide?",
    answer:
      "We provide a wide range of PASA-approved services including residential support, day habilitation, respite care, supported employment, and individualized wellness programs that focus on independence and quality of life.",
  },
  {
    question: "Who is eligible to receive services from Wellness Health Care LLC?",
    answer:
      "Individuals with intellectual or developmental disabilities who qualify for Medicaid and are approved by the Colorado Department of Health Care Policy and Financing may be eligible to receive our services.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "The first step is to contact your case manager through your Community Centered Board (CCB). Once eligibility is confirmed, you may choose Wellness Health Care LLC as your PASA provider, and we will work with you to create a personalized care plan.",
  },
  {
    question: "Where are your services available?",
    answer:
      "We proudly serve individuals and families throughout the Denver Metro area and surrounding Colorado communities. Please reach out to us directly to confirm availability in your area.",
  },
  {
    question: "How does Wellness Health Care LLC ensure quality of care?",
    answer:
      "We follow strict state guidelines and undergo regular audits to maintain PASA approval. Our staff receives ongoing training, and we use a person-centered approach to ensure that each client’s goals, preferences, and dignity are respected.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Find quick answers about PASA-approved services and how Wellness Health Care LLC supports Colorado families.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/images/care.jpg')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* ✅ FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 py-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-teal-600 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out today and let’s discuss how we can support your family’s needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
