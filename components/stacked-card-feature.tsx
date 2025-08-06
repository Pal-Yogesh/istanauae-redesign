"use client"

import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Eye, ArrowRight } from 'lucide-react'
import { useCart } from "@/hooks/use-cart"

const featuredItems = [
  {
    id: 1,
    title: "Royal Heritage Collection",
    subtitle: "Limited Edition • Only 12 pieces worldwide",
    description: "Inspired by the crown jewels of ancient civilizations, each piece in this collection tells a story of power, beauty, and timeless elegance. Crafted with the finest diamonds and precious metals.",
    image: "/royal-heritage-necklace.png",
    price: 85000,
    category: "High Jewelry",
    rating: 5,
    testimonial: "Absolutely breathtaking. The craftsmanship is unparalleled.",
    customer: "Sarah Al-Mansouri",
    details: "18K Gold, 15.5ct Diamonds, Handcrafted"
  },
  {
    id: 2,
    title: "Desert Rose Collection",
    subtitle: "Inspired by UAE's Natural Beauty",
    description: "Capturing the essence of desert blooms at dawn, these pieces feature rare pink diamonds and rose gold in organic, flowing designs that celebrate the beauty of the Arabian landscape.",
    image: "/desert-rose-ring.png",
    price: 32000,
    category: "Signature Collection",
    rating: 5,
    testimonial: "A perfect blend of tradition and modernity.",
    customer: "Emma Richardson",
    details: "Rose Gold, Pink Diamonds, Organic Design"
  },
  {
    id: 3,
    title: "Celestial Dreams",
    subtitle: "Astronomical Precision Meets Artistry",
    description: "Each piece maps actual constellations using diamonds and sapphires, creating wearable astronomy that connects you to the cosmos. A fusion of science and art.",
    image: "/celestial-bracelet.png",
    price: 45000,
    category: "Conceptual Jewelry",
    rating: 5,
    testimonial: "Like wearing a piece of the night sky.",
    customer: "Dr. Amira Hassan",
    details: "Platinum, Sapphires, Diamond Constellation"
  }
]

export default function StackedCardFeature() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-20%" })
  
  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [2000, 3000], [15, -15])
  const { addItem } = useCart()

  const handleAddToCart = (item: typeof featuredItems[0]) => {
    addItem({
      id: item.id.toString(),
      name: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
          Featured
          <br />
          <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text">
            Masterpieces
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
          Exclusive collections that define luxury, each piece a testament to our century of craftsmanship.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex items-center justify-center pb-20 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stacked Cards Container */}
          <motion.div 
            className="relative h-[500px] sm:h-[600px] flex items-center justify-center perspective-1000"
            style={{ rotateX }}
          >
            {featuredItems.map((item, index) => {
              const isActive = index === activeIndex
              const offset = index - activeIndex
              const absOffset = Math.abs(offset)
              
              return (
                <motion.div
                  key={item.id}
                  className="absolute w-80 sm:w-96 h-[480px] sm:h-[560px] cursor-pointer"
                  style={{
                    zIndex: featuredItems.length - absOffset,
                  }}
                  animate={{
                    x: offset * 40,
                    y: offset * 15,
                    scale: isActive ? 1 : 0.9 - absOffset * 0.05,
                    rotateY: offset * 6,
                    opacity: 1 - absOffset * 0.2,
                  }}
                  whileHover={{ 
                    scale: isActive ? 1.02 : 0.92,
                    y: isActive ? -10 : offset * 15 - 5
                  }}
                  onClick={() => setActiveIndex(index)}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/50">
                    {/* Image */}
                    <div className="h-56 sm:h-64 overflow-hidden relative">
                      <img 
                        src={item.image || "/placeholder.svg?height=256&width=384&query=luxury jewelry masterpiece"} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Badge className="bg-amber-500 text-white text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
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
                    <div className="p-6 flex flex-col justify-between h-[224px] sm:h-[304px]">
                      <div>
                        <div className="mb-3">
                          <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-amber-600 font-light">{item.subtitle}</p>
                        </div>
                        
                        <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-3 line-clamp-3">
                          {item.description}
                        </p>

                        <p className="text-stone-500 text-xs font-light mb-3">{item.details}</p>

                        {/* Testimonial */}
                        <div className="bg-stone-50 rounded-xl p-3 mb-4">
                          <p className="text-xs text-stone-600 italic mb-1">"{item.testimonial}"</p>
                          <p className="text-xs text-stone-500 font-light">— {item.customer}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-base sm:text-lg font-light text-stone-900">
                          ${item.price.toLocaleString()}
                        </span>
                        {isActive && (
                          <Button 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAddToCart(item)
                            }}
                            className="bg-stone-900 text-stone-50 hover:bg-stone-800 font-light"
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
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-stone-900 scale-125' 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* Active Item Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 px-8 sm:px-12 py-3 font-light tracking-wide"
              >
                View Full Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
