"use client"




import {  useState } from "react"
import { motion, useScroll } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import BrandShowcase from "@/components/brand-showcase"
import ParallaxStory from "@/components/parallax-story"
import StackedCardFeature from "@/components/stacked-card-feature"
import DiamondEducation from "@/components/diamond-education"
import LegacyTimeline from "@/components/legacy-timeline"
import Footer from "@/components/footer"
import CartDrawer from "@/components/cart-drawer"
import { useCart } from "@/hooks/use-cart"

export default function HomePage() {
  const [currentSection] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const { items } = useCart()


 

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <Navigation 
        currentSection={currentSection}
     
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={items.length}
      />


      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 z-50 origin-left"
        style={{ 
          scaleX: scrollYProgress,
        }}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen relative">
          <HeroSection />
        </section>

        {/* Brand Showcase */}
        <section id="brands" className="min-h-screen relative">
          <BrandShowcase />
        </section>

        {/* Parallax Story */}
        <section id="story" className="min-h-screen relative">
          <ParallaxStory />
        </section>

        {/* Stacked Card Feature */}
        <section id="featured" className="min-h-screen relative">
          <StackedCardFeature />
        </section>

        {/* Diamond Education */}
        <section id="diamonds" className=" sticky top-0 z-10">
          <DiamondEducation />
        </section>

        {/* Legacy Timeline */}
        <section id="legacy" className="relative">
          <LegacyTimeline />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
