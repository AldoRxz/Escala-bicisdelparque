"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const brands = [
  "SPECIALIZED",
  "SANTA CRUZ",
  "TREK",
  "CANNONDALE",
  "GIANT",
  "SCOTT",
  "ORBEA",
  "BIANCHI",
  "CERVÉLO",
  "PINARELLO",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Subtle warm copper ambient glow from above */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />

      {/* Main Content — centered vertically */}
      <div className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-4 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/70">Stock disponible ahora</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Tu Pasión,</span>
            <br />
            <span className="gradient-text">Nuestra Prioridad</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Bicicletas premium y servicio experto de ciclistas profesionales. 
            Encuentra tu próximo compañero de montaña en Zapopan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#catalog">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-6 text-lg hover:opacity-90 transition-opacity"
              >
                Explorar Colección
              </Button>
            </Link>
            <Link href="#workshop">
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:border-primary/40 bg-white hover:bg-accent px-8 py-6 text-lg text-foreground shadow-sm"
              >
                Agendar Servicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Brands Carousel — pinned to bottom */}
      <div className="relative z-10 pb-14 pt-6">
        <div className="industrial-divider mb-5 max-w-3xl mx-auto" />
        <p className="text-xs text-muted-foreground/70 mb-4 tracking-[0.2em] uppercase text-center font-medium">
          Marcas Premium
        </p>
        
        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling track */}
          <div className="flex animate-marquee">
            {/* First set */}
            <div className="flex shrink-0 items-center gap-10 sm:gap-14 px-5 sm:px-7">
              {brands.map((brand) => (
                <span
                  key={`a-${brand}`}
                  className="text-sm sm:text-base font-semibold text-foreground/25 whitespace-nowrap select-none tracking-wider"
                >
                  {brand}
                </span>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0 items-center gap-10 sm:gap-14 px-5 sm:px-7">
              {brands.map((brand) => (
                <span
                  key={`b-${brand}`}
                  className="text-sm sm:text-base font-semibold text-foreground/25 whitespace-nowrap select-none tracking-wider"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — clearly below brands */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-5 w-5 text-foreground/20" />
      </div>
    </section>
  )
}
