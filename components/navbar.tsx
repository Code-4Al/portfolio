"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Download } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="animate-slide-in-left">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Hello, I'm Shashmith S</h1>
              <p className="text-muted-foreground mt-1">Creative Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="animate-float bg-transparent">
                <a href="/resume.pdf" download="Shashmith_Resume.pdf"> 
              <Download className="w-4 h-4 mr-2" />
              Download Resume
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
