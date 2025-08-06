"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Diamond, Crown, Sparkles, Star, ArrowRight, Gem, Eye, Award } from 'lucide-react'

const diamondCs = [
  {
    id: "cut",
    icon: Diamond,
    title: "Cut",
    subtitle: "The Art of Brilliance",
    description: "The cut determines how light travels within the diamond, creating the scintillation and fire that makes each stone captivating. A masterfully cut diamond reflects light from facet to facet with mathematical precision.",
    details: "Our master cutters follow precise angles: 34.5° crown angle and 40.8° pavilion angle for optimal light performance. Each diamond is cut to maximize brilliance, fire, and scintillation.",
    grade: "Excellent",
    color: "from-sky-400 via-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/5",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&auto=format",
    stats: { brilliance: "98%", fire: "94%", scintillation: "96%" },
    facts: ["58 facets for maximum sparkle", "Precise mathematical angles", "Light performance is everything"],
    technical: "Table: 57% | Depth: 61.8% | Crown: 15%"
  },
  {
    id: "carat",
    icon: Crown,
    title: "Carat",
    subtitle: "Rare by Nature",
    description: "Carat weight measures a diamond's size. One carat equals 200 milligrams. Larger diamonds are exponentially rarer, with only 2% of gem-quality diamonds exceeding one carat.",
    details: "Carat weight affects price exponentially. A 2-carat diamond costs significantly more than two 1-carat diamonds of identical quality due to rarity.",
    grade: "2.15ct",
    color: "from-violet-400 via-purple-500 to-fuchsia-600",
    bgColor: "bg-purple-500/5",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&auto=format",
    stats: { rarity: "1 in 10,000", diameter: "8.1mm", weight: "2.15ct" },
    facts: ["200 milligrams equals 1 carat", "Exponential value increase", "Ancient carob seed standard"],
    technical: "Diameter: 8.1mm | Height: 5.0mm | Weight: 430mg"
  },
  {
    id: "color",
    icon: Sparkles,
    title: "Color",
    subtitle: "Colorless Perfection",
    description: "The finest diamonds are completely colorless, graded D-F. These stones allow maximum light transmission, creating exceptional brilliance and rainbow-like fire.",
    details: "D-grade diamonds are completely colorless and incredibly rare. Only 2% of all diamonds achieve this perfect colorless grade, making them the most sought-after.",
    grade: "D",
    color: "from-amber-300 via-yellow-400 to-orange-500",
    bgColor: "bg-yellow-500/5",
    image: "https://images.unsplash.com/photo-1594736797933-d0403ba1d4ad?w=800&h=600&fit=crop&auto=format",
    stats: { grade: "D", purity: "99.98%", rarity: "Ultra Rare" },
    facts: ["D is completely colorless", "Allows maximum light passage", "Less than 1% achieve D grade"],
    technical: "Color Scale: D-Z | Fluorescence: None | Tint: None"
  },
  {
    id: "clarity",
    icon: Star,
    title: "Clarity",
    subtitle: "Natural Perfection",
    description: "Clarity grades the absence of inclusions and blemishes. Flawless diamonds show no inclusions under 10x magnification, representing nature's rarest achievement.",
    details: "Our gemologists examine each diamond under 10x magnification. Flawless and Internally Flawless diamonds represent less than 1% of all gem-quality diamonds.",
    grade: "FL",
    color: "from-emerald-400 via-green-500 to-teal-600",
    bgColor: "bg-emerald-500/5",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=600&fit=crop&auto=format",
    stats: { inclusions: "None", clarity: "FL", perfection: "100%" },
    facts: ["Flawless under 10x magnification", "Formed perfectly in nature", "Less than 1% achieve FL grade"],
    technical: "Magnification: 10x | Inclusions: None | Blemishes: None"
  }
]

export default function DiamondEducation() {
  const [activeC, setActiveC] = useState("cut")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-10%" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  
  const activeItem = diamondCs.find(item => item.id === activeC) || diamondCs[0]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, opacity: fadeIn }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(255,255,255,0.05),transparent)]" />
      </motion.div>

      {/* Floating Diamonds */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Gem className="w-2 h-2 text-white/20" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Sticky Interactive Panel */}
          <motion.div 
            className="sticky top-0 h-screen flex flex-col justify-center p-8 lg:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-12">
              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mr-6 shadow-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-sm font-medium tracking-[0.2em] text-amber-400 uppercase">
                    Diamond Education
                  </h1>
                  <p className="text-xs text-slate-400 mt-1">
                    Understanding the Four C's of Excellence
                  </p>
                </div>
              </motion.div>

              <motion.h2 
                className="text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Perfection
                <br />
                <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text font-medium">
                  Defined
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-slate-300 font-light leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover the precise science and artistry behind every exceptional diamond
              </motion.p>
            </div>

            {/* Navigation Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {diamondCs.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveC(item.id)}
                  className={`
                    px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3
                    ${activeC === item.id 
                      ? `bg-gradient-to-r ${item.color} text-white border-transparent shadow-lg` 
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/10'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Active Content */}
            <motion.div
              key={activeC}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              {/* Main Card */}
              <div className={`${activeItem.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-6`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeItem.color} flex items-center justify-center shadow-lg`}>
                    <activeItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-white mb-2">{activeItem.title}</h3>
                    <p className="text-amber-400 text-lg font-medium">{activeItem.subtitle}</p>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${activeItem.color} text-white text-sm font-medium mt-3`}>
                      Grade: {activeItem.grade}
                    </div>
                  </div>
                </div>

                <p className="text-slate-200 text-base leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(activeItem.stats).map(([key, value]) => (
                    <div key={key} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-xl font-semibold text-amber-400 mb-1">{value}</div>
                      <div className="text-xs text-slate-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Details */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 mb-6">
                  <h4 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Technical Specs</h4>
                  <p className="text-slate-300 text-sm font-mono">{activeItem.technical}</p>
                </div>

                {/* Key Facts */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wide">Key Facts</h4>
                  {activeItem.facts.map((fact, index) => (
                    <motion.div
                      key={fact}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span className="text-slate-300 text-sm">{fact}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl font-medium shadow-lg flex items-center justify-center gap-3 hover:from-amber-400 hover:to-orange-400 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="px-6 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="w-4 h-4" />
                  View Collection
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Showcase */}
          <div className="relative h-screen overflow-y-auto scrollbar-hide">
            {diamondCs.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-h-screen flex items-center justify-center p-8 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${item.bgColor} opacity-30`} />
                
                <div className="relative z-10 max-w-lg mx-auto">
                  {/* Main Image */}
                  <motion.div
                    className="relative mb-8"
                    animate={{
                      scale: activeC === item.id ? [1, 1.02, 1] : 1,
                    }}
                    transition={{ 
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 relative">
                      <img 
                        src={item.image} 
                        alt={`${item.title} diamond showcase`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
                      
                      {/* Animated Shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={{
                          x: activeC === item.id ? ['-200%', '200%'] : '-200%',
                        }}
                        transition={{
                          duration: 3,
                          repeat: activeC === item.id ? Infinity : 0,
                          ease: "easeInOut",
                          repeatDelay: 1
                        }}
                      />

                      {/* Icon Overlay */}
                      <div className="absolute bottom-6 left-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Grade Badge */}
                      <div className="absolute top-6 right-6">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-lg`}>
                          {item.grade}
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white/60 rounded-full shadow-lg"
                        style={{
                          left: `${20 + (i * 60 / 6)}%`,
                          top: `${10 + Math.sin(i) * 10}%`,
                        }}
                        animate={{
                          scale: activeC === item.id ? [1, 1.5, 1] : 1,
                          opacity: activeC === item.id ? [0.6, 1, 0.6] : 0.6,
                          y: activeC === item.id ? [0, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 2 + i * 0.2,
                          repeat: activeC === item.id ? Infinity : 0,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Info Card */}
                  <motion.div
                    className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-2xl font-light text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 mb-4">{item.subtitle}</p>
                    
                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mb-4">
                      {diamondCs.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === index 
                              ? `bg-gradient-to-r ${item.color} scale-125` 
                              : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}