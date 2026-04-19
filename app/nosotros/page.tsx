"use client"

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

const timeline = [
  {
    year: "2000",
    title: "El Primer Pedalazo",
    description: "Lo que empezó como una pasión personal por el ciclismo de montaña se convirtió en el sueño de compartir esa pasión con toda la comunidad de Zapopan.",
  },
  {
    year: "2005",
    title: "Nace Bicis del Parque",
    description: "Abrimos nuestras puertas en la Col. Santa María del Pueblito con un pequeño taller y unas cuantas bicicletas. La calidad y el servicio hicieron el resto.",
  },
  {
    year: "2012",
    title: "Distribuidor Autorizado",
    description: "Nos convertimos en distribuidores autorizados de Specialized, Santa Cruz y Trek. El reconocimiento a años de trabajo profesional y dedicación.",
  },
  {
    year: "2018",
    title: "Centro de Servicio Premium",
    description: "Ampliamos nuestro taller con herramientas especializadas y certificaciones internacionales. Hoy somos referencia en servicio técnico en Jalisco.",
  },
  {
    year: "Hoy",
    title: "Tu Destino Ciclista",
    description: "Más de 1,000 clientes satisfechos, 500+ servicios al año y un equipo de ciclistas profesionales listos para ayudarte a vivir tu mejor aventura.",
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Copper glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
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
      </section>

      {/* Mission & Vision */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-border p-8 lg:p-10 shadow-sm h-full">
                <div className="w-3 h-12 gradient-primary rounded-full mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ser el aliado de confianza de cada ciclista en Zapopan, ofreciendo 
                  bicicletas premium, servicio técnico de excelencia y una asesoría genuina 
                  que nace de nuestra propia experiencia sobre dos ruedas.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl border border-border p-8 lg:p-10 shadow-sm h-full">
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
      </section>

      {/* Timeline */}
      <section className="pb-20 lg:pb-28 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Nuestro </span>
                <span className="gradient-text">Camino</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Cada año nos ha traído nuevos retos y logros que nos hacen mejores.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 150}>
                <div className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-sm font-bold text-primary tracking-wider mb-1">{item.year}</p>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-primary ring-4 ring-background mt-7" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
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

      {/* Stats */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-border p-8 lg:p-12 shadow-sm">
              <div className="industrial-divider mb-8" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                    <Trophy className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={20} suffix="+" /></h4>
                  <p className="text-muted-foreground text-sm">Años de Experiencia</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                    <Medal className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={1000} suffix="+" /></h4>
                  <p className="text-muted-foreground text-sm">Clientes Satisfechos</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                    <Star className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={500} suffix="+" /></h4>
                  <p className="text-muted-foreground text-sm">Servicios al Año</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                    <Shield className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-3xl font-bold gradient-text mb-1"><CountUp end={100} suffix="%" /></h4>
                  <p className="text-muted-foreground text-sm">Garantía</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
