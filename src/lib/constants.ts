import { Heart, Apple, Zap, Target } from "lucide-react"

export const SITE_CONFIG = {
    name: "Wellness Health Care LLC",
    description: "Your Journey to Holistic Well-being Starts Here",
    url: "https://yodit-wellness.com",
    ogImage: "/logo.png",
    links: {
        twitter: "https://twitter.com/yoditwellness",
        github: "https://github.com/yodit-wellness",
    },
}

export const NAVIGATION = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
]

export const SERVICES = [
    {
        id: "holistic-therapy",
        title: "Holistic Therapy",
        description: "Comprehensive wellness approach integrating mind, body, and spirit for complete healing.",
        icon: Heart,
        href: "/services",
    },
    {
        id: "nutrition-counseling",
        title: "Nutrition Counseling",
        description: "Personalized nutrition plans to support your health goals and lifestyle.",
        icon: Apple,
        href: "/services",
    },
    {
        id: "stress-management",
        title: "Stress Management",
        description: "Evidence-based techniques to reduce stress and improve mental well-being.",
        icon: Zap,
        href: "/services",
    },
    {
        id: "wellness-coaching",
        title: "Wellness Coaching",
        description: "One-on-one guidance to help you achieve your personal wellness goals.",
        icon: Target,
        href: "/services",
    },
]

export const TESTIMONIALS = [
    {
        id: "testimonial-1",
        name: "Sarah Johnson",
        role: "Marketing Director",
        content: "After years of chronic stress and burnout, Yodit Wellness gave me my life back. The holistic approach didn't just treat my symptoms—it transformed my entire relationship with health and well-being. I've never felt more balanced, energized, and truly alive.",
        rating: 5,
        service: "Holistic Therapy",
        result: "6 months of transformation",
    },
    {
        id: "testimonial-2",
        name: "Michael Chen",
        role: "Software Engineer",
        content: "As a developer, I was constantly stressed and struggling with anxiety. The stress management program here taught me techniques that actually work in real life. My productivity has doubled, and I finally sleep through the night. This isn't just therapy—it's life-changing.",
        rating: 5,
        service: "Stress Management",
        result: "Anxiety-free for 8 months",
    },
    {
        id: "testimonial-3",
        name: "Emily Rodriguez",
        role: "Elementary Teacher",
        content: "I was skeptical about nutrition counseling, but the personalized approach here completely changed my perspective. I learned to fuel my body properly, and the results speak for themselves—I've lost 30 pounds, gained incredible energy, and feel confident for the first time in years.",
        rating: 5,
        service: "Nutrition Counseling",
        result: "30 lbs lost, energy restored",
    },
    {
        id: "testimonial-4",
        name: "David Thompson",
        role: "Business Owner",
        content: "Running my own business was consuming my life until I found Yodit Wellness. The coaching sessions helped me establish boundaries, create sustainable habits, and find work-life balance. I'm more successful in business and happier at home than I ever thought possible.",
        rating: 5,
        service: "Wellness Coaching",
        result: "Perfect work-life balance",
    },
    {
        id: "testimonial-5",
        name: "Lisa Wang",
        role: "Yoga Instructor",
        content: "Even as a wellness professional, I was struggling with my own health journey. The team at Yodit Wellness provided the support and expertise I needed to heal from the inside out. Their holistic approach is truly revolutionary—I now help my own clients with techniques I learned here.",
        rating: 5,
        service: "Holistic Therapy",
        result: "Healed and empowered",
    },
    {
        id: "testimonial-6",
        name: "Robert Martinez",
        role: "Retired Teacher",
        content: "At 65, I thought my best years were behind me. The stress management program proved me wrong. I've discovered a new lease on life, with energy I haven't had in decades. My family can't believe the positive changes—I feel like I'm 20 years younger!",
        rating: 5,
        service: "Stress Management",
        result: "Youthful energy restored",
    },
]
export const CONTACT_INFO = {
    phone: "+1 720 552 1710",
    email: "Wellnesshealthcare2025@gmail.com",
    address: `14291 E 4th Ave Aurora, CO 80011
Suite 7-110`,
    hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
}

