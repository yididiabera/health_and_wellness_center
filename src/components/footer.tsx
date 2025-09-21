import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import { Logo } from "./logo"
import { NAVIGATION } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white hover:text-teal-400" />
            <p className="text-gray-300 leading-relaxed">
              Your journey to holistic well-being starts here. We provide comprehensive wellness
              solutions that nurture your mind, body, and spirit.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link
                href="/services/holistic-therapy"
                className="block text-gray-300 hover:text-teal-400 transition-colors"
              >
                Holistic Therapy
              </Link>
              <Link
                href="/services/nutrition-counseling"
                className="block text-gray-300 hover:text-teal-400 transition-colors"
              >
                Nutrition Counseling
              </Link>
              <Link
                href="/services/stress-management"
                className="block text-gray-300 hover:text-teal-400 transition-colors"
              >
                Stress Management
              </Link>
              <Link
                href="/services/wellness-coaching"
                className="block text-gray-300 hover:text-teal-400 transition-colors"
              >
                Wellness Coaching
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+17205521710"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  +1 720 552 1710
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Wellnesshealthcare2025@gmail.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Wellnesshealthcare2025@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  1401 Ulster Street, Denver, CO 80220
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Wellness Health Care LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
