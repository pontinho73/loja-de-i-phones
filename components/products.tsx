"use client"

import Image from "next/image"

interface Product {
  name: string
  storage: string
  price: string
  image: string
}

const products: Product[] = [
  {
    name: "iPhone 16",
    storage: "128 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723316912949"
  },
  {
    name: "iPhone 15 Pro Max",
    storage: "256 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692845702708"
  },
  {
    name: "iPhone 15 Plus",
    storage: "128 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-finish-select-202309-6-7inch-blue?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692923780075"
  },
  {
    name: "iPhone XR",
    storage: "256 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-white-select-201809?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1551226038992"
  },
  {
    name: "iPhone 11 Pro Max",
    storage: "64 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-midnight-green-select-2019?wid=400&hei=400&fmt=jpeg&qlt=80&.v=1566954241661"
  },
  {
    name: "iPhone 11",
    storage: "64 GB",
    price: "R$ XXX",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-black-select-2019?wid=400&hei=400&fmt=jpeg&qlt=80&.v=1566866093578"
  }
]

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-muted-foreground/30 transition-all duration-300">
      <div className="aspect-square relative mb-6 bg-secondary/50 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.storage}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-foreground">{product.price}</span>
          <button 
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            Saber mais
          </button>
        </div>
      </div>
    </div>
  )
}

interface ProductsProps {
  onSelectProduct: (product: Product) => void
}

export function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section id="produtos" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Todos os iPhones verificados e prontos para uso
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  )
}

export type { Product }
