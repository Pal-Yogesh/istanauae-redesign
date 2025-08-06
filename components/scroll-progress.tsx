"use client"

import { motion } from "framer-motion"

interface ScrollProgressProps {
  sections: Array<{ id: string; name: string }>
  currentSection: number
}

export default function ScrollProgress({ sections, currentSection }: ScrollProgressProps) {
  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-6">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className="flex items-center group cursor-pointer"
          onClick={() => scrollToSection(index)}
          whileHover={{ scale: 1.1 }}
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSection 
                ? 'bg-amber-500 border-amber-500 scale-125' 
                : 'bg-transparent border-stone-400 hover:border-stone-600'
            }`}
          />
          
          {/* Label */}
          <motion.span
            className={`ml-4 text-sm font-light tracking-wide transition-all duration-300 ${
              index === currentSection 
                ? 'text-stone-900 opacity-100' 
                : 'text-stone-600 opacity-0 group-hover:opacity-100'
            }`}
            initial={{ x: -10, opacity: 0 }}
            animate={{ 
              x: index === currentSection ? 0 : -10,
              opacity: index === currentSection ? 1 : 0
            }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            {section.name}
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}
