import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { Workshop } from "@/components/workshop"
import { LiveInventory } from "@/components/live-inventory"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Catalog />
      <Workshop />
      <LiveInventory />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
