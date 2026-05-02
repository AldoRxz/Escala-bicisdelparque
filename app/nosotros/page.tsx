"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedSection } from "@/components/animated-section"
import { CountUp } from "@/components/count-up"
import { Trophy, Medal, Star, Mountain, Wrench, Heart, Target, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Mountain,
    title: "Pasión por el Ciclismo",
    description: "No solo vendemos bicicletas, vivimos el deporte. Cada miembro de nuestro equipo es ciclista activo que recorre las rutas de Zapopan cada semana.",
  },
  {
    icon: Wrench,
    title: "Servicio Experto",
    description: "Mecánicos certificados con décadas de experiencia. Hemos atendido competencias nacionales y conocemos cada componente como la palma de nuestra mano.",
  },
  {
    icon: Heart,
    title: "Comunidad Ciclista",
    description: "Construimos una comunidad en Zapopan. Organizamos rodadas, clínicas de mecánica y eventos para ciclistas de todos los niveles.",
  },
  {
    icon: Shield,
    title: "Confianza y Garantía",
    description: "Cada bicicleta que vendemos lleva nuestra garantía personal. Si no estás satisfecho, nosotros lo resolvemos. Así de simple.",
  },
  {
    icon: Target,
    title: "Asesoría Personalizada",
    description: "No te vendemos cualquier bici. Analizamos tu estilo de manejo, tus rutas y tu presupuesto para encontrar la opción perfecta para ti.",
  },
  {
    icon: Users,
    title: "Relaciones a Largo Plazo",
    description: "Nuestros clientes regresan y nos recomiendan. Más del 70% de nuestras ventas vienen de referidos. Eso habla por nosotros.",
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero with image collage */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Copper glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedSection>
              <p className="text-sm text-primary font-medium tracking-[0.2em] uppercase mb-4">Sobre Nosotros</p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Nuestra Historia</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desde un pequeño taller hasta convertirnos en el destino ciclista de referencia 
                en Zapopan. Más de dos décadas dedicados a lo que más amamos: las bicicletas.
              </p>
            </AnimatedSection>
          </div>

          {/* Image mosaic under hero text */}
          <AnimatedSection delay={450}>
            <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/community/ig-1.jpg" alt="Bici en exhibición" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden -mt-6 lg:-mt-10">
                <Image src="/community/ig-5.jpg" alt="Nuestra tienda" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/community/ig-3.jpg" alt="Cliente satisfecho" fill className="object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision with side image */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Image side */}
            <AnimatedSection className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/community/ig-4.jpg" alt="Taller Bicis del Parque" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-sm font-medium">Nuestro taller en Zapopan</p>
                  <p className="text-white text-xl font-bold">+20 años de experiencia</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text side */}
            <div className="lg:col-span-3 space-y-6 lg:space-y-8">
              <AnimatedSection delay={100}>
                <div className="bg-white rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
                  <div className="w-3 h-12 gradient-primary rounded-full mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ser el aliado de confianza de cada ciclista en Zapopan, ofreciendo 
                    bicicletas premium, servicio técnico de excelencia y una asesoría genuina 
                    que nace de nuestra propia experiencia sobre dos ruedas.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={250}>
                <div className="bg-white rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
                  <div className="w-3 h-12 gradient-primary rounded-full mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nuestra Visión</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ser reconocidos como el centro ciclista más completo de Jalisco, donde 
                    cada persona —desde el principiante hasta el competidor— encuentre la bici 
                    perfecta, el mejor servicio y una comunidad que los impulse a pedalear más lejos.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values with image accent */}
      <section className="py-20 lg:py-28 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Lo Que Nos </span>
                <span className="gradient-text">Define</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Nuestros valores son la base de cada interacción con nuestros clientes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-md">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with background image */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Stats cards */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                  <span className="text-foreground">Números que </span>
                  <span className="gradient-text">Hablan</span>
                </h2>
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 mx-auto copper-glow">
                      <Trophy className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={20} suffix="+" /></h4>
                    <p className="text-muted-foreground text-sm">Años de Experiencia</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 mx-auto copper-glow">
                      <Medal className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={1000} suffix="+" /></h4>
                    <p className="text-muted-foreground text-sm">Clientes Satisfechos</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 mx-auto copper-glow">
                      <Star className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={500} suffix="+" /></h4>
                    <p className="text-muted-foreground text-sm">Servicios al Año</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 mx-auto copper-glow">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={100} suffix="%" /></h4>
                    <p className="text-muted-foreground text-sm">Garantía</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Image collage */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/community/ig-2.jpg" alt="Bici de montaña" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image src="/community/ig-6.jpg" alt="Componentes premium" fill className="object-cover" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
