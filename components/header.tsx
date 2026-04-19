"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GearLogo } from "@/components/gear-logo"

const navLinks = [
  { href: "#catalog", label: "Catálogo" },
  { href: "#workshop", label: "Taller" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <GearLogo className="h-10 w-10 lg:h-12 lg:w-12" />
            <span className="font-bold text-lg lg:text-xl text-foreground hidden sm:block">
              Bicis del Parque
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link href="#catalog" className="hidden sm:block">
              <Button className="gradient-primary text-white font-semibold px-6 hover:opacity-90 transition-opacity">
                Ver Stock Actual
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#catalog" onClick={() => setIsMenuOpen(false)}>
                <Button className="gradient-primary text-white font-semibold w-full mt-2">
                  Ver Stock Actual
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
