"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="h-7 w-7" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium text-foreground">¿Necesitas ayuda?</span>
        </div>
      </div>
    </a>
  )
}
