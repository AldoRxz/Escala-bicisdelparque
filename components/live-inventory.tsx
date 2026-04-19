import { Button } from "@/components/ui/button"
import { QrCode, ExternalLink } from "lucide-react"

export function LiveInventory() {
  const catalogLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Card with gradient border accent */}
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-border via-primary/20 to-border">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent/50 mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-foreground/70 font-medium">Actualizado en tiempo real</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    <span className="text-foreground">Stock</span>{" "}
                    <span className="gradient-text">Actual</span>
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Escanea el código QR para ver nuestra disponibilidad en tiempo real. 
                    Conoce exactamente qué bicicletas tenemos en tienda ahora mismo.
                  </p>
                  
                  <a href={catalogLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="gradient-primary text-white font-semibold px-8 hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Abrir Catálogo Digital
                    </Button>
                  </a>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* QR Code visual representation */}
                    <div className="w-48 h-48 lg:w-56 lg:h-56 bg-accent rounded-2xl p-4 flex items-center justify-center border border-border">
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <QrCode className="h-24 w-24 text-foreground/30" />
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 gradient-primary rounded-lg copper-glow" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-lg border border-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
