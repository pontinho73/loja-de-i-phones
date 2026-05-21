"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="MC iPhones"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
          iPhones com qualidade
          <br />
          <span className="text-muted-foreground">garantida</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty">
          Encontre o iPhone perfeito para você. Todos os nossos aparelhos passam 
          por rigorosa verificação de qualidade.
        </p>
        <a
          href="#produtos"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
        >
          Ver produtos
        </a>
      </div>
    </section>
  )
}
