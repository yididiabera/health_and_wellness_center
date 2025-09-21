import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Yodit Wellness Center - Your Journey to Holistic Well-being",
    template: "%s | Yodit Wellness Center"
  },
  description: "Discover personalized wellness solutions that nurture your mind, body, and spirit for a healthier, more balanced life. Expert holistic therapy, nutrition counseling, stress management, and wellness coaching.",
  keywords: [
    "wellness center",
    "holistic therapy",
    "nutrition counseling",
    "stress management",
    "wellness coaching",
    "mental health",
    "physical wellness",
    "spiritual wellness",
    "health and wellness",
    "wellness services"
  ],
  authors: [{ name: "Yodit Wellness Center" }],
  creator: "Yodit Wellness Center",
  publisher: "Yodit Wellness Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yodit-wellness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yodit-wellness.com",
    title: "Yodit Wellness Center - Your Journey to Holistic Well-being",
    description: "Discover personalized wellness solutions that nurture your mind, body, and spirit for a healthier, more balanced life.",
    siteName: "Yodit Wellness Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yodit Wellness Center - Holistic Wellness Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yodit Wellness Center - Your Journey to Holistic Well-being",
    description: "Discover personalized wellness solutions that nurture your mind, body, and spirit for a healthier, more balanced life.",
    images: ["/og-image.jpg"],
    creator: "@yoditwellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Yodit Wellness Center",
  "description": "Your Journey to Holistic Well-being Starts Here",
  "url": "https://yodit-wellness.com",
  "logo": "https://yodit-wellness.com/logo.png",
  "image": "https://yodit-wellness.com/og-image.jpg",
  "telephone": "(555) 123-4567",
  "email": "info@yoditwellness.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Wellness Way",
    "addressLocality": "Health City",
    "addressRegion": "HC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00"
  ],
  "sameAs": [
    "https://twitter.com/yoditwellness",
    "https://facebook.com/yoditwellness",
    "https://instagram.com/yoditwellness"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wellness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Holistic Therapy",
          "description": "Comprehensive wellness approach integrating mind, body, and spirit for complete healing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Counseling",
          "description": "Personalized nutrition plans to support your health goals and lifestyle."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stress Management",
          "description": "Evidence-based techniques to reduce stress and improve mental well-being."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wellness Coaching",
          "description": "One-on-one guidance to help you achieve your personal wellness goals."
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="yodit-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
