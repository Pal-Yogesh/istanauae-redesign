"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { MapPin, Award, Globe, Users, Calendar, Building, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const timelineEvents = [
  {
    year: "1924",
    title: "Founded in Dubai",
    description: "Istana Jewellers begins its journey in the heart of the UAE, establishing the foundation of excellence that continues today. Starting as a small family business in the bustling souks of old Dubai.",
    icon: MapPin,
    location: "Dubai, UAE",
    image: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    milestone: "Foundation",
    details: "Our founder, Ahmed Al-Mansouri, opened the first Istana boutique with a vision to bring the finest jewelry to the Middle East."
  },
  {
    year: "1965",
    title: "London Expansion",
    description: "Opening our first international boutique in Mayfair, bringing Middle Eastern craftsmanship to European luxury markets. This marked our entry into the global luxury jewelry scene.",
    icon: Globe,
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    milestone: "International Growth",
    details: "The London boutique became a bridge between Eastern and Western jewelry traditions, attracting royalty and celebrities."
  },
  {
    year: "1987",
    title: "Hong Kong Presence",
    description: "Establishing our Asian headquarters in Central Hong Kong, connecting Eastern and Western jewelry traditions. This strategic location opened doors to the Asian luxury market.",
    icon: Building,
    location: "Hong Kong",
    image: "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    milestone: "Asian Expansion",
    details: "Our Hong Kong boutique became the gateway to Asia, serving discerning clients across the continent."
  },
  {
    year: "2024",
    title: "Centennial Legacy",
    description: "Celebrating 100 years of excellence, innovation, and serving discerning clients across three continents. Today, we continue to set new standards in luxury jewelry.",
    icon: Award,
    location: "Worldwide",
    image: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
    milestone: "Century of Excellence",
    details: "With boutiques in major cities worldwide, we remain committed to our founding principles of quality and craftsmanship."
  }
]

export default function LegacyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-10%" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const timelineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <div ref={containerRef} className="relative bg-gradient-to-br from-stone-100 to-stone-200 py-20 lg:py-32">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-[120%] bg-[url('/heritage-pattern.png')] bg-repeat bg-center" />
      </motion.div>

      {/* Header */}
      <motion.div 
        className="text-center mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6">
          A Century of
          <br />
          <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text">
            Excellence
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
          From Dubai to the world - our journey through time, marked by milestones 
          of craftsmanship, innovation, and unwavering commitment to excellence.
        </p>
      </motion.div>

      {/* Timeline Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-px h-full bg-stone-300">
          <motion.div
            className="w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 origin-top"
            style={{ scaleY: timelineProgress }}
          />
        </div>

        {/* Timeline Events */}
        <div className="space-y-16 lg:space-y-24">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex items-center ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } flex-col sm:flex-row`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content Card */}
              <div className={`w-full sm:w-5/12 ${
                index % 2 === 0 ? 'sm:pr-8 lg:pr-12 sm:text-right' : 'sm:pl-8 lg:pl-12 sm:text-left'
              } mb-8 sm:mb-0`}>
                <motion.div
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Image */}
                  <div className="h-32 sm:h-40 mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={event.image || "/placeholder.svg?height=160&width=400&query=vintage jewelry store"} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex items-center mb-4">
                    <event.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mr-3" />
                    <span className="text-sm text-stone-500 font-light">{event.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-light mb-3">
                      {event.milestone}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-stone-900 mb-2">{event.title}</h3>
                    <p className="text-stone-600 font-light leading-relaxed mb-3 text-sm sm:text-base">
                      {event.description}
                    </p>
                    <p className="text-stone-500 font-light text-xs sm:text-sm italic">
                      {event.details}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-serif text-amber-600">{event.year}</div>
                    <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-900">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="w-full sm:w-2/12 flex justify-center relative z-20 mb-8 sm:mb-0">
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 mb-6">
              Be Part of Our Story
            </h3>
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Visit our boutiques in Dubai, London, or Hong Kong to experience a century of craftsmanship 
              and create your own legacy piece that will be treasured for generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-stone-900 text-stone-50 hover:bg-stone-800 px-8 sm:px-12 py-3 sm:py-4 font-light tracking-wide"
              >
                Find a Boutique
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 px-8 sm:px-12 py-3 sm:py-4 font-light tracking-wide"
              >
                Book Private Appointment
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
