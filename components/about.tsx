import Image from "next/image"
import { Trophy, Medal, Star } from "lucide-react"

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

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Impulsados por la Experiencia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No solo vendemos bicicletas, vivimos el deporte. Décadas de pasión ciclista 
            al servicio de nuestra comunidad.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member) => (
            <div 
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-16 relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
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
  )
}
