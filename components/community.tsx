"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const communityImages = [
  { src: "/community/ig-1.jpg", alt: "Bici Dirtjump en exhibición" },
  { src: "/community/ig-2.jpg", alt: "Bici de montaña en el taller" },
  { src: "/community/ig-3.jpg", alt: "Entrega a cliente satisfecho" },
  { src: "/community/ig-4.jpg", alt: "Nuestro taller profesional" },
  { src: "/community/ig-5.jpg", alt: "Exhibición de bicicletas premium" },
  { src: "/community/ig-6.jpg", alt: "Detalle de componentes" },
]

export function Community() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white shadow-sm mb-6">
              <Instagram className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/70">@bicisdelparque</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Nuestra </span>
              <span className="gradient-text">Comunidad</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Más que una tienda, somos una familia ciclista. Conoce los momentos que nos definen.
            </p>
          </div>
        </AnimatedSection>

        {/* Image Grid - Uniform */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 mt-12 max-w-5xl mx-auto">
          {communityImages.map((image, index) => (
            <AnimatedSection key={image.src} delay={index * 80}>
              <a
                href="https://www.instagram.com/bicisdelparque"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Instagram className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={500}>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/bicisdelparque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full gradient-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <Instagram className="h-5 w-5" />
              Síguenos en Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
