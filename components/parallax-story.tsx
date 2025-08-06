"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Play, Pause, Volume2, Award, Users, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export default function ParallaxStory() {
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-20%" })
  
  const { scrollY } = useScroll()
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [1000, 2500], [0, -300])
  const contentY = useTransform(scrollY, [1000, 2500], [0, -150])
  const overlayOpacity = useTransform(scrollY, [1000, 1800], [0.3, 0.8])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-stone-900">
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-[120%] bg-[url('/jewelry-atelier-wide.png')] bg-cover bg-center" />
      </motion.div>

      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/90"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-16 sm:h-20 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + Math.random() * 40}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-30 min-h-screen flex items-center py-20"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm font-light tracking-[0.3em] text-amber-400 uppercase">
                Bespoke Craftsmanship
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block">The Art of</span>
              <span className="block text-amber-400">Perfection</span>
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl text-stone-300 mb-8 font-light leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Witness the meticulous process where raw materials transform into extraordinary pieces. 
              Every cut, every setting, every polish reflects our commitment to excellence that spans generations.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: Users, number: "50+", label: "Master Craftsmen" },
                { icon: Clock, number: "150+", label: "Hours per Piece" },
                { icon: Award, number: "100+", label: "Years Heritage" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-light text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-stone-400 font-light">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg"
                className="bg-amber-500 text-stone-900 hover:bg-amber-400 px-8 py-3 font-light tracking-wide"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 font-light tracking-wide"
              >
                View Process
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-stone-800/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-stone-700/50">
              <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/crafting-process.png')] bg-cover bg-center opacity-60" />
                
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 hover:bg-amber-500/30"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 ml-1" />
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="icon" className="text-stone-400 hover:text-white w-8 h-8">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <div className="font-light">
                    Master Craftsman at Work • 4:32
                  </div>
                </div>
                <div className="text-xs text-stone-400 font-light hidden sm:block">
                  4K • Behind the Scenes
                </div>
              </div>
            </div>

            {/* Stats Overlay */}
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-stone-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-2xl sm:text-3xl font-serif text-stone-900 mb-1">150+</div>
              <div className="text-sm text-stone-600 font-light">Hours per piece</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
