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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Bicis del Parque. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/40">
            Hecho con pasión en Zapopan, México
          </p>
        </div>
      </div>
    </footer>
  )
}
