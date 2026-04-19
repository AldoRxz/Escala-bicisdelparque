import Link from "next/link"
import { GearLogo } from "@/components/gear-logo"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[oklch(0.18_0.012_260)] border-t border-[oklch(0.28_0.008_260)]">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <GearLogo className="h-12 w-12" />
              <span className="font-bold text-xl text-white">Bicis del Parque</span>
            </Link>
            <p className="text-white/60 mb-6">
              Tu tienda de bicicletas premium y centro de servicio profesional en Zapopan.
            </p>
            <a 
              href="https://instagram.com/bicisdelparque" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @bicisdelparque
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#catalog" className="text-white/60 hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="#workshop" className="text-white/60 hover:text-white transition-colors">
                  Taller de Servicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <a 
                  href="https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Stock en Vivo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Emiliano Zapata #156<br />
                  Col. Santa María del Pueblito<br />
                  Zapopan, Jalisco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:3321384624" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  33 2138 4624
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Lun - Vie: 10:00 - 19:00<br />
                  Sáb: 10:00 - 15:00
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-semibold text-white mb-4">Ubicación</h3>
            <div className="aspect-square rounded-xl overflow-hidden bg-[oklch(0.25_0.008_260)]">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Bicis del Parque. Todos los derechos reservados.
          </p>
          <a
            href="https://escala-mas.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm font-medium transition-all duration-300"
          >
            Hecho por <span className="gradient-text font-bold">Escala+</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
