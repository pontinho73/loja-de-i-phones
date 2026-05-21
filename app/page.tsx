"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products, type Product } from "@/components/products"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products onSelectProduct={setSelectedProduct} />
      <About />
      <Footer />
      <ContactModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  )
}
