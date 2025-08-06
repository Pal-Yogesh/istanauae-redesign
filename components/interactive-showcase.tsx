"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Play, Pause, Volume2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function InteractiveShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [1000, 1500], [0.8, 1])
  const opacity = useTransform(scrollY, [1000, 1200], [0, 1])

  return (
    <motion.div 
      className="h-full flex items-center justify-center relative overflow-hidden"
      style={{ scale, opacity }}
    >
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[url('/placeholder-2fs91.png')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            <span className="text-white">Bespoke</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Craftsmanship
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Witness the artistry behind every piece. From concept to creation, 
            experience the meticulous process of bringing your vision to life.
          </p>
        </motion.div>

        {/* Video Player Interface */}
        <motion.div
          className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder-1p3hn.png')] bg-cover bg-center opacity-60" />
            
            <Button
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-20 h-20 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 hover:bg-amber-400/30"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-amber-400" />
              ) : (
                <Play className="w-8 h-8 text-amber-400 ml-1" />
              )}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Volume2 className="w-5 h-5 text-gray-400" />
              </Button>
              <div className="text-sm text-gray-400">
                The Art of Perfection • 3:42
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                Schedule Consultation
              </Button>
              <Button size="sm" className="bg-amber-400 text-black hover:bg-amber-500">
                Start Your Journey
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { number: "50+", label: "Master Craftsmen" },
            { number: "100+", label: "Years of Heritage" },
            { number: "1000+", label: "Bespoke Creations" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-light text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
