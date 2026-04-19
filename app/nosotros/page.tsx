import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Trophy, Medal, Star, Mountain, Wrench, Heart } from "lucide-react"

const team = [
  {
    name: "Roberto García",
    role: "Fundador & Experto Senior",
    description: "Más de 25 años de experiencia en ciclismo profesional y competencias nacionales.",
    image: "/team/roberto.jpg",
  },
  {
    name: "Carlos Mendoza",
    role: "Mecánico Especializado",
    description: "Certificado en marcas premium. Experto en suspensiones y transmisiones de alta gama.",
    image: "/team/carlos.jpg",
  },
  {
    name: "Miguel Rodríguez",
    role: "Asesor de Ventas",
    description: "Ciclista activo y conocedor de todas las rutas de Zapopan. Te ayuda a encontrar tu bici ideal.",
    image: "/team/miguel.jpg",
  },
]

const values = [
  {
    icon: Mountain,
    title: "Pasión por el Ciclismo",
    description: "No solo vendemos bicicletas, vivimos el deporte. Cada miembro de nuestro equipo es ciclista activo.",
  },
  {
    icon: Wrench,
    title: "Servicio Experto",
    description: "Mecánicos certificados con años de experiencia en las mejores competencias nacionales e internacionales.",
  },
  {
    icon: Heart,
    title: "Comunidad",
    description: "Construimos una comunidad ciclista en Zapopan. Organizamos rodadas, clínicas y eventos para todos los niveles.",
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Nuestra Historia</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Décadas de pasión ciclista al servicio de nuestra comunidad en Zapopan.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-md">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-foreground">Nuestro </span>
              <span className="gradient-text">Equipo</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ciclistas apasionados listos para ayudarte a encontrar tu bici ideal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6 -mt-16 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl border border-border p-8 lg:p-12 shadow-sm">
            <div className="industrial-divider mb-8" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-3xl font-bold gradient-text mb-2">50+</h4>
                <p className="text-muted-foreground">Competencias Nacionales</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                  <Medal className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-3xl font-bold gradient-text mb-2">100+</h4>
                <p className="text-muted-foreground">Medallas Ganadas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 copper-glow">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-3xl font-bold gradient-text mb-2">1000+</h4>
                <p className="text-muted-foreground">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
