"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ME iPhones"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold tracking-tight text-foreground">
            ME iPhones
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-muted-foreground hover:text-foreground transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
