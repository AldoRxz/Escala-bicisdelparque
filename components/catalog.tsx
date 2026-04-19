"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const bikes = [
  {
    id: 1,
    name: "Specialized Stumpjumper",
    brand: "Specialized",
    category: "Mountain",
    price: "$85,000 MXN",
    image: "/bikes/specialized-stumpjumper.jpg",
    specs: {
      frame: "Carbon FACT 11m",
      drivetrain: "SRAM X01 Eagle",
      suspension: "Fox 36 Factory",
    },
  },
  {
    id: 2,
    name: "Santa Cruz Hightower",
    brand: "Santa Cruz",
    category: "Mountain",
    price: "$95,000 MXN",
    image: "/bikes/santa-cruz-hightower.jpg",
    specs: {
      frame: "Carbon CC",
      drivetrain: "SRAM XX1 Eagle AXS",
      suspension: "Fox 38 Factory",
    },
  },
  {
    id: 3,
    name: "Trek Madone SLR",
    brand: "Trek",
    category: "Road",
    price: "$120,000 MXN",
    image: "/bikes/trek-madone.jpg",
    specs: {
      frame: "OCLV 800 Carbon",
      drivetrain: "Shimano Dura-Ace Di2",
      suspension: "IsoFlow Technology",
    },
  },
  {
    id: 4,
    name: "Specialized S-Works Tarmac",
    brand: "Specialized",
    category: "Road",
    price: "$150,000 MXN",
    image: "/bikes/specialized-tarmac.jpg",
    specs: {
      frame: "S-Works FACT 12r Carbon",
      drivetrain: "Shimano Dura-Ace Di2",
      suspension: "Future Shock 3.0",
    },
  },
  {
    id: 5,
    name: "Santa Cruz Bronson",
    brand: "Santa Cruz",
    category: "Mountain",
    price: "$78,000 MXN",
    image: "/bikes/santa-cruz-bronson.jpg",
    specs: {
      frame: "Carbon C",
      drivetrain: "SRAM GX Eagle",
      suspension: "Fox 36 Performance",
    },
  },
  {
    id: 6,
    name: "Trek Fuel EX",
    brand: "Trek",
    category: "Mountain",
    price: "$65,000 MXN",
    image: "/bikes/trek-fuel-ex.jpg",
    specs: {
      frame: "OCLV Mountain Carbon",
      drivetrain: "SRAM GX Eagle",
      suspension: "Fox Float 34",
    },
  },
]

const categories = ["Todas", "Mountain", "Road"]

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [hoveredBike, setHoveredBike] = useState<number | null>(null)

  const filteredBikes = activeCategory === "Todas" 
    ? bikes 
    : bikes.filter(bike => bike.category === activeCategory)

  const whatsappLink = "https://whatsapp.com/channel/0029Vb7cnThEFeXrhp5oyL28"

  return (
    <section id="catalog" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Colección Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las mejores marcas del mundo, seleccionadas para ciclistas exigentes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
              <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-md"
                  : "bg-white text-foreground/70 hover:text-foreground border border-border hover:border-primary/40 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bike Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredBikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg"
              onMouseEnter={() => setHoveredBike(bike.id)}
              onMouseLeave={() => setHoveredBike(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm">
                  {bike.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-1">{bike.brand}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{bike.name}</h3>
                <p className="text-2xl font-bold gradient-text mb-4">{bike.price}</p>

                {/* Specs (shown on hover) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredBike === bike.id ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cuadro</span>
                      <span className="text-foreground font-medium">{bike.specs.frame}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transmisión</span>
                      <span className="text-foreground font-medium">{bike.specs.drivetrain}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Suspensión</span>
                      <span className="text-foreground font-medium">{bike.specs.suspension}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gradient-primary text-white font-semibold hover:opacity-90 transition-opacity">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar Disponibilidad
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
