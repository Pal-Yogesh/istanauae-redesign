"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Play, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
          <div className="w-full h-full bg-[url('/hero-jewelry-crafting.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/60" />
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-400/60" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.9] mb-8">
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Where
            </motion.span>
            <motion.span 
              className="block text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Dreams
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Take Form
            </motion.span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Discover extraordinary jewelry crafted with passion, precision, and a century of heritage. 
          Each piece tells a story as unique as yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-amber-500 text-stone-900 hover:bg-amber-400 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wide w-full sm:w-auto"
          >
            Explore Collections
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-stone-900 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wide w-full sm:w-auto"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Our Story
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity }}
        >
          <span className="text-xs sm:text-sm font-light text-white/80 mb-2 tracking-wide">SCROLL TO DISCOVER</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
        </motion.div>
      </motion.div>
    </div>
  )
}
