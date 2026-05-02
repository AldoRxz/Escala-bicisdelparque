import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { Workshop } from "@/components/workshop"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Catalog />
      <Workshop />
      <Community />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
