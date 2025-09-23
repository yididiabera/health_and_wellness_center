import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  href?: string
}

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-bold text-xl tracking-tight text-teal-600 hover:text-teal-700 transition-colors dark:text-teal-400 dark:hover:text-teal-300",
        className
      )}
    >
      Wellness Health Care LLC
    </Link>
  )
}
