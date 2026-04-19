"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { CountUp } from "@/components/count-up"
import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail, Navigation, Star, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  const whatsappLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero with Map Background */}
      <section className="relative pt-24 pb-0 lg:pt-28 overflow-hidden">
        {/* Map as hero background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://maps.google.com/maps?q=Bicis+Del+Parque,+Emiliano+Zapata+156,+Zapopan&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "saturate(0.3) brightness(0.95)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Bicis del Parque"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center pt-8 pb-20 lg:pt-16 lg:pb-28">
            <AnimatedSection>
              <p className="text-sm text-primary font-semibold tracking-[0.25em] uppercase mb-5">Encuéntranos</p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Estamos </span>
                <span className="gradient-text">Cerca de Ti</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Visítanos en Zapopan y descubre por qué somos el destino ciclista 
                preferido de la ciudad.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floating Contact Cards - overlapping the hero */}
      <section className="relative z-20 -mt-12 pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {/* Ubicación */}
            <AnimatedSection delay={0}>
              <div className="group bg-white rounded-2xl border border-border p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Visítanos</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Emiliano Zapata #156<br />
                      Col. Santa María del Pueblito<br />
                      Zapopan, Jalisco
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/EyNj87tGRdfZQ7nv5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:gap-2 transition-all"
                    >
                      Abrir en Maps <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Teléfono */}
            <AnimatedSection delay={100}>
              <div className="group bg-white rounded-2xl border border-border p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Llámanos</h3>
                    <a href="tel:3321384624" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium block">
                      33 2138 4624
                    </a>
                    <p className="text-muted-foreground/70 text-sm mt-1">
                      Respuesta inmediata en horario
                    </p>
                    <a 
                      href="tel:3321384624"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:gap-2 transition-all"
                    >
                      Llamar ahora <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Horario */}
            <AnimatedSection delay={200}>
              <div className="group bg-white rounded-2xl border border-border p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Horario</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between gap-6 text-sm">
                        <span className="text-muted-foreground">Lun – Vie</span>
                        <span className="text-foreground font-medium">10:00 – 19:00</span>
                      </div>
                      <div className="flex justify-between gap-6 text-sm">
                        <span className="text-muted-foreground">Sábado</span>
                        <span className="text-foreground font-medium">10:00 – 15:00</span>
                      </div>
                      <div className="flex justify-between gap-6 text-sm">
                        <span className="text-muted-foreground">Domingo</span>
                        <span className="text-foreground/50 font-medium">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section with two columns */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Left: Main CTA - spans 3 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-primary/30 overflow-hidden">
                  <div className="bg-white rounded-2xl p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-600 font-medium">Disponibles ahora</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                      ¿Listo para encontrar<br />
                      tu <span className="gradient-text">bici ideal</span>?
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                      La mejor forma de conocernos es en persona. Nuestros expertos te asesoran 
                      sin compromiso para encontrar la bicicleta perfecta para ti.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                        <Button size="lg" className="gradient-primary text-white font-semibold px-8 hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-primary/20">
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Escríbenos por WhatsApp
                        </Button>
                      </a>
                      <a href="tel:3321384624" className="flex-1 sm:flex-none">
                        <Button size="lg" variant="outline" className="border-border hover:border-primary/40 bg-white hover:bg-accent text-foreground font-semibold px-8 shadow-sm w-full sm:w-auto">
                          <Phone className="h-5 w-5 mr-2" />
                          Llamar Ahora
                        </Button>
                      </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6 pt-6 border-t border-border">
                      <a
                        href="https://instagram.com/bicisdelparque"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="text-sm font-medium">@bicisdelparque</span>
                      </a>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm font-medium">Canal WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Stats + Trust - spans 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={200}>
                <div className="bg-white rounded-2xl border border-border p-7 shadow-sm">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Por qué elegirnos</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text mb-1"><CountUp end={20} suffix="+" /></p>
                      <p className="text-xs text-muted-foreground">Años de<br />Experiencia</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text mb-1"><CountUp end={1000} suffix="+" /></p>
                      <p className="text-xs text-muted-foreground">Clientes<br />Satisfechos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text mb-1"><CountUp end={500} suffix="+" /></p>
                      <p className="text-xs text-muted-foreground">Servicios<br />al Año</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text mb-1"><CountUp end={100} suffix="%" /></p>
                      <p className="text-xs text-muted-foreground">Garantía<br />Total</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <div className="bg-white rounded-2xl border border-border p-7 shadow-sm">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">Testimonios</h3>
                  <div className="space-y-5">
                    <div className="flex gap-1 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed italic">
                      &ldquo;Increíble servicio. Me asesoraron perfectamente y encontré la bici ideal 
                      para mis rutas en el Bosque de la Primavera. 100% recomendados.&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Carlos M.</p>
                      <p className="text-xs text-muted-foreground">Cliente desde 2019</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <div className="bg-white rounded-2xl border border-border p-7 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                      <Navigation className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Fácil acceso</p>
                      <p className="text-xs text-muted-foreground">Estamos a 5 min del Parque Metropolitano</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className="pb-0">
        <AnimatedSection>
          <div className="relative">
            <div className="h-[400px] lg:h-[500px] w-full">
              <iframe
                src="https://maps.google.com/maps?q=Bicis+Del+Parque,+Emiliano+Zapata+156,+Zapopan&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bicis del Parque"
              />
            </div>
            {/* Gradient overlay top */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          </div>
        </AnimatedSection>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
