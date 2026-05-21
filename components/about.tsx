"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="MC iPhones"
              width={80}
              height={80}
              className="mx-auto opacity-80"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a MC iPhones
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A MC iPhones é especializada em iPhones seminovos de alta qualidade. 
            Todos os nossos aparelhos passam por testes rigorosos para garantir 
            o melhor funcionamento e durabilidade.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Verificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">Garantia</div>
              <div className="text-sm text-muted-foreground">Incluída</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">Qualidade</div>
              <div className="text-sm text-muted-foreground">Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
