import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  const whatsappLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos para ayudarte. Visítanos, llámanos o escríbenos por WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Ubicación */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 copper-glow">
                <MapPin className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ubicación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Emiliano Zapata #156<br />
                Col. Santa María del Pueblito<br />
                Zapopan, Jalisco
              </p>
            </div>

            {/* Teléfono */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 copper-glow">
                <Phone className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Teléfono</h3>
              <a href="tel:3321384624" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                33 2138 4624
              </a>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 copper-glow">
                <Clock className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Horario</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lun - Vie: 10:00 - 19:00<br />
                Sáb: 10:00 - 15:00
              </p>
            </div>
          </div>

          {/* Action Buttons + Map */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: CTA buttons */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                ¿Listo para <span className="gradient-text">visitarnos</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La mejor forma de conocernos es en persona. Ven a ver nuestro catálogo 
                y deja que nuestros expertos te asesoren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gradient-primary text-white font-semibold px-8 hover:opacity-90 transition-opacity w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:3321384624">
                  <Button size="lg" variant="outline" className="border-border hover:border-primary/40 bg-white hover:bg-accent text-foreground font-semibold px-8 shadow-sm w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar Ahora
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com/bicisdelparque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @bicisdelparque
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.4!3d20.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzAwLjAiTiAxMDPCsDI0JzAwLjAiVw!5e0!3m2!1sen!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Bicis del Parque"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
