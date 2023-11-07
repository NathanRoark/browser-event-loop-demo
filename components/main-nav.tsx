"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="flex items-center space-x-2 md:mr-6">
        <Icons.logo strokeWidth="32" fill="currentColor" className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "hidden transition-colors hover:text-foreground/80 md:block",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/playground"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/playground")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Playground
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          About
        </Link>
      </nav>
    </div>
  )
}
