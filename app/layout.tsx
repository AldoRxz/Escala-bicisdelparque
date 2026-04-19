import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Bicis del Parque | Premium Bikes & Expert Service in Zapopan',
  description: 'Your Passion, Our Priority. Premium mountain and road bikes from Specialized, Santa Cruz, Trek. Expert service and professional maintenance in Zapopan, Mexico.',
  generator: 'v0.app',
  keywords: ['bikes', 'mountain bikes', 'road bikes', 'Zapopan', 'Mexico', 'Specialized', 'Santa Cruz', 'Trek', 'bike service'],
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
