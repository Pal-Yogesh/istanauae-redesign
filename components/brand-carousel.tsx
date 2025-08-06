"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"

const brands = [
  {
    id: 1,
    name: "Cartier",
    description: "French luxury and timeless elegance",
    image: "/luxury-jewelry-display.png",
    price: "$15,000",
    category: "Luxury Watches"
  },
  {
    id: 2,
    name: "Tiffany & Co",
    description: "Iconic American jewelry house",
    image: "/tiffany-blue-jewelry-diamonds.png",
    price: "$8,500",
    category: "Diamond Rings"
  },
  {
    id: 3,
    name: "Van Cleef & Arpels",
    description: "Poetry in precious stones",
    image: "/butterfly-pendant.png",
    price: "$25,000",
    category: "High Jewelry"
  },
  {
    id: 4,
    name: "Bulgari",
    description: "Italian magnificence and bold design",
    image: "/serpenti-gold-jewelry.png",
    price: "$12,000",
    category: "Statement Pieces"
  }
]

export default function BrandCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, 1000], [0, -200])
  const { addItem } = useCart()

  const handleAddToCart = (brand: typeof brands[0]) => {
    addItem({
      id: brand.id.toString(),
      name: brand.name,
      price: parseFloat(brand.price.replace('$', '').replace(',', '')),
      image: brand.image,
      quantity: 1
    })
  }

  return (
    <div className="h-full flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ x }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            <span className="text-white">Curated</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the world's most prestigious jewelry houses, each piece telling a story of craftsmanship and heritage.
          </p>
        </motion.div>

        {/* Stacked Cards */}
        <div className="relative h-96 flex items-center justify-center">
          {brands.map((brand, index) => {
            const isActive = index === activeIndex
            const offset = index - activeIndex
            
            return (
              <motion.div
                key={brand.id}
                className="absolute w-80 h-80 cursor-pointer"
                style={{
                  zIndex: brands.length - Math.abs(offset),
                }}
                animate={{
                  x: offset * 60,
                  y: offset * 20,
                  scale: isActive ? 1 : 0.9,
                  rotateY: offset * 15,
                }}
                whileHover={{ scale: isActive ? 1.05 : 0.95 }}
                onClick={() => setActiveIndex(index)}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={brand.image || "/placeholder.svg"} 
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2 bg-amber-400/20 text-amber-400 border-amber-400/30">
                      {brand.category}
                    </Badge>
                    <h3 className="text-2xl font-light mb-2">{brand.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-light text-amber-400">{brand.price}</span>
                      {isActive && (
                        <Button 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(brand)
                          }}
                          className="bg-amber-400 text-black hover:bg-amber-500"
                        >
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-amber-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
