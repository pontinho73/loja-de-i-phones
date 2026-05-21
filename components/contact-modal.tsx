"use client"

import { X, MessageCircle } from "lucide-react"
import type { Product } from "./products"

interface ContactModalProps {
  product: Product | null
  onClose: () => void
}

const WHATSAPP_NUMBER = "5511964379799"

export function ContactModal({ product, onClose }: ContactModalProps) {
  if (!product) return null

  const message = encodeURIComponent(
    `Olá! Tenho interesse no ${product.name} ${product.storage}. Pode me passar mais informações?`
  )
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-border rounded-2xl p-6 w-full max-w-md">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground mb-6">
            {product.storage} • {product.price}
          </p>
          
          <p className="text-sm text-muted-foreground mb-6">
            Entre em contato para mais informações sobre este produto.
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
