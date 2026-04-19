"use client"

import { Button } from "@/components/ui/button"
import { Wrench, Gauge, ArrowUpCircle, Target, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { CountUp } from "@/components/count-up"

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Servicio completo para mantener tu bici en óptimas condiciones y prevenir problemas futuros.",
  },
  {
    icon: Gauge,
    title: "Ajuste de Suspensión",
    description: "Calibración profesional de suspensión delantera y trasera para máximo rendimiento.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrades de Componentes",
    description: "Actualiza tu bici con los mejores componentes del mercado. Asesoría experta incluida.",
  },
  {
    icon: Target,
    title: "Bike Fitting",
    description: "Ajuste ergonómico profesional para máxima comodidad y eficiencia en cada pedaleada.",
  },
]

export function Workshop() {
  const whatsappLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <section id="workshop" className="py-20 lg:py-32 bg-accent/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Taller</span>
                <br />
                <span className="gradient-text">Profesional</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nuestro equipo de mecánicos certificados cuenta con años de experiencia 
                en las mejores competencias. Cuidamos tu bici como si fuera la nuestra.
              </p>
            </AnimatedSection>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={250 + index * 100}>
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={650}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white font-semibold px-8 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Agendar Servicio
                </Button>
              </a>
            </AnimatedSection>
          </div>

          {/* Right Visual */}
          <AnimatedSection delay={300}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-border shadow-lg">
                {/* Decorative elements - copper rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border border-border/40" style={{ animationDuration: '25s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border-2 border-primary/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full gradient-primary opacity-70 copper-glow" />
                </div>
                
                {/* Center icon */}
                <Wrench className="h-24 w-24 text-primary-foreground relative z-10 drop-shadow-lg" />
              </div>

              {/* Stats */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm">
                <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-around shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text"><CountUp end={500} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Servicios/Año</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text"><CountUp end={20} suffix="+" /></p>
                    <p className="text-sm text-muted-foreground">Años Exp.</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text"><CountUp end={100} suffix="%" /></p>
                    <p className="text-sm text-muted-foreground">Garantía</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
