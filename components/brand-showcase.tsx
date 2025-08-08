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
    name: "Mattia Cielo",
    description: "Italian luxury jewelry house renowned for innovative designs and exceptional craftsmanship. Each piece embodies contemporary elegance with timeless appeal.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&auto=format",
    price: 18500,
    category: "Italian Luxury",
    featured: true,
    story: "Where Italian artistry meets contemporary design in perfect harmony."
  },
  {
    id: 2,
    name: "Adler Joailliers Depuis 1886",
    description: "Luxury jewellery brand specializing in exquisite diamond creations and precious gemstone collections that define sophistication.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&auto=format",
    price: 12500,
    category: "Luxury Jewellery",
    featured: false,
    story: "Precision craftsmanship meets timeless elegance in every creation."
  },
  {
    id: 3,
    name: "Chanteder Capri",
    description: "Capri-inspired jewelry house bringing the Mediterranean spirit to life through colorful gemstones and artistic designs rooted in Italian tradition.",
    image: "https://images.unsplash.com/photo-1631982645875-8bd1db34b1a1?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 15000,
    category: "Mediterranean Luxury",
    featured: true,
    story: "Capturing the essence of Capri's beauty in every handcrafted piece."
  },
  {
    id: 4,
    name: "Forms Hong Kong",
    description: "Fine jewelry brand creating sculptural pieces that blur the line between art and adornment, featuring bold geometric designs.",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=600&fit=crop&auto=format",
    price: 22000,
    category: "Fine Jewelry",
    featured: false,
    story: "Where architectural precision meets jewelry artistry in stunning forms."
  },
  {
    id: 5,
    name: "Fullord",
    description: "Contemporary jewelry house known for innovative techniques and modern aesthetics, creating pieces that define the future of luxury jewelry.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&auto=format",
    price: 16800,
    category: "Contemporary Design",
    featured: true,
    story: "Pioneering the future of jewelry with innovative design and craftsmanship."
  },
  {
    id: 6,
    name: "Verdi",
    description: "Elegant jewelry collections featuring refined designs and exceptional gemstones, representing the pinnacle of Italian jewelry craftsmanship.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&auto=format",
    price: 19500,
    category: "Italian Excellence",
    featured: true,
    story: "Italian heritage meets modern luxury in every exquisite creation."
  },
  {
    id: 7,
    name: "Genius Gioielli",
    description: "Innovative jewelry brand pushing the boundaries of traditional craftsmanship with cutting-edge designs and premium materials.",
    image: "https://plus.unsplash.com/premium_photo-1728759435328-9a5a417edef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 14200,
    category: "Innovation",
    featured: false,
    story: "Where genius meets craftsmanship to create extraordinary jewelry pieces."
  },
  {
    id: 8,
    name: "Borsari Gioielli",
    description: "Gioielli brand specializing in precious gemstone jewelry with Italian flair, creating pieces that celebrate the beauty of natural stones.",
    image: "https://images.unsplash.com/photo-1506277475657-d4814bb3eaf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdyaXN0JTIwYmFuZHxlbnwwfHwwfHx8MA%3D%3D",
    price: 17300,
    category: "Gioielli",
    featured: true,
    story: "Italian passion for precious stones expressed in timeless jewelry art."
  },
  {
    id: 9,
    name: "Istana Private Collection",
    description: "Our exclusive in-house collection featuring bespoke pieces crafted by master artisans, representing the pinnacle of Istana's century-long expertise.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&auto=format",
    price: 35000,
    category: "Exclusive Collection",
    featured: true,
    story: "A century of expertise culminating in our most exclusive creations."
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
        {Array.from({ length: 15 }).map((_, i) => (
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
          Curated Brands
          <br />
          <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text">
          &  Collections
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
          Discover the world's most prestigious jewelry houses, each with their own legacy of craftsmanship and innovation, exclusively available at Istana.
        </p>
      </motion.div>

      {/* Brand Cards Container */}
      <div className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
            {brands.slice(0, 9).map((brand, index) => (
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
                      src={brand.image || "/placeholder.svg"} 
                      alt={`${brand.name} luxury jewelry collection`}
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
                        src={brand.image || "/placeholder.svg"} 
                        alt={`${brand.name} luxury jewelry`}
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
