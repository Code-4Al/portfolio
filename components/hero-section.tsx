"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Building Digital
            <span className="text-primary block">Experiences</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate about creating innovative web solutions that combine
            beautiful design with powerful functionality.
          </p>
        </div>
      </div>
    </section>
  )
}
