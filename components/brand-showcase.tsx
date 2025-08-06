"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Eye } from 'lucide-react'
import { useCart } from "@/hooks/use-cart"

const brands = [
  {
    id: 1,
    name: "Cartier",
    description: "French luxury and timeless elegance since 1847. Known for iconic designs like the Love bracelet and Panthère collection.",
    image: "/cartier-collection.png",
    price: 15000,
    category: "Luxury Watches",
    featured: true,
    story: "Founded in Paris, Cartier has been the jeweler of kings and the king of jewelers."
  },
  {
    id: 2,
    name: "Tiffany & Co",
    description: "Iconic American jewelry house with legendary Tiffany Blue. Setting the standard for luxury since 1837.",
    image: "/tiffany-diamonds.png",
    price: 8500,
    category: "Diamond Rings",
    featured: false,
    story: "From the famous breakfast scene to engagement dreams, Tiffany defines American luxury."
  },
  {
    id: 3,
    name: "Van Cleef & Arpels",
    description: "Poetry in precious stones and haute joaillerie. Masters of the invisible setting technique.",
    image: "/vancleef-butterfly.png",
    price: 25000,
    category: "High Jewelry",
    featured: true,
    story: "Where nature meets artistry, creating pieces that capture the beauty of the natural world."
  },
  {
    id: 4,
    name: "Bulgari",
    description: "Italian magnificence with bold Roman spirit. Renowned for colorful gemstones and architectural designs.",
    image: "/bulgari-serpenti.png",
    price: 12000,
    category: "Statement Pieces",
    featured: false,
    story: "From Roman heritage to modern glamour, Bulgari embodies Italian excellence."
  },
  {
    id: 5,
    name: "Chopard",
    description: "Swiss precision meets haute joaillerie. Famous for the Happy Diamonds collection and ethical luxury.",
    image: "/chopard-happy-diamonds.png",
    price: 18000,
    category: "Swiss Luxury",
    featured: true,
    story: "Where Swiss watchmaking tradition meets jewelry artistry in perfect harmony."
  },
  {
    id: 6,
    name: "Graff",
    description: "The ultimate in diamond luxury. Specializing in the world's most exceptional diamonds.",
    image: "/graff-diamonds.png",
    price: 45000,
    category: "Diamond Specialists",
    featured: true,
    story: "Setting new standards in diamond excellence with the world's most extraordinary stones."
  }
]

export default function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-20%" })
  
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [500, 1500], [0, -100])
  const { addItem } = useCart()

  const handleAddToCart = (brand: typeof brands[0]) => {
    addItem({
      id: brand.id.toString(),
      name: brand.name,
      price: brand.price,
      image: brand.image,
      quantity: 1
    })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ x }}
      >
        <div className="w-full h-full bg-[url('/jewelry-pattern.png')] bg-repeat" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div 
        className="text-center pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6">
          Curated
          <br />
          <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text">
            Collections
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
          The world's most prestigious jewelry houses, each with their own legacy of craftsmanship and innovation.
        </p>
      </motion.div>

      {/* Brand Cards Container */}
      <div className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/50 h-full">
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={brand.image || "/placeholder.svg?height=256&width=400&query=luxury jewelry collection"} 
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {brand.featured && (
                      <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white">
                        <Heart className="w-4 h-4 text-stone-700" />
                      </Button>
                      <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white">
                        <Eye className="w-4 h-4 text-stone-700" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between h-80">
                    <div>
                      <Badge variant="outline" className="mb-3 text-xs font-light">
                        {brand.category}
                      </Badge>
                      <h3 className="text-2xl font-serif mb-2 text-stone-900">{brand.name}</h3>
                      <p className="text-stone-600 text-sm font-light leading-relaxed mb-4">
                        {brand.description}
                      </p>
                      <p className="text-stone-500 text-xs font-light italic mb-4">
                        {brand.story}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-light text-stone-900">
                        ${brand.price.toLocaleString()}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => handleAddToCart(brand)}
                        className="bg-stone-900 text-stone-50 hover:bg-stone-800 font-light opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  className="flex-none w-80 snap-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/50 h-96">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={brand.image || "/placeholder.svg?height=192&width=320&query=luxury jewelry"} 
                        alt={brand.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      {brand.featured && (
                        <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between h-48">
                      <div>
                        <Badge variant="outline" className="mb-3 text-xs font-light">
                          {brand.category}
                        </Badge>
                        <h3 className="text-xl font-serif mb-2 text-stone-900">{brand.name}</h3>
                        <p className="text-stone-600 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                          {brand.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-light text-stone-900">
                          ${brand.price.toLocaleString()}
                        </span>
                        <Button 
                          size="sm"
                          onClick={() => handleAddToCart(brand)}
                          className="bg-stone-900 text-stone-50 hover:bg-stone-800 font-light"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 px-12 py-3 font-light tracking-wide"
            >
              View All Collections
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
