"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X, Search, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

interface NavigationProps {
  currentSection: number
  // sections: Array<{ id: string; name: string }>
  onCartClick: () => void
  cartItemCount: number
}

export default function Navigation({ currentSection,  onCartClick, cartItemCount }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-stone-50/95 backdrop-blur-xl border-b border-stone-200/50 py-3' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`text-xl sm:text-2xl font-serif tracking-wider transition-colors ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}>
              ISTANA
            </div>
            <div className={`text-xs font-light tracking-[0.2em] -mt-1 transition-colors ${
              isScrolled ? 'text-stone-600' : 'text-white/80'
            }`}>
              اسـتـانـا
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {["BRANDS & COLLECTIONS", "BESPOKE SERVICES", "ABOUT US", "LOCATIONS"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className={`text-sm font-light tracking-wide transition-colors relative group ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-stone-900' 
                    : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ y: -1 }}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-stone-900' : 'bg-white'
                }`} />
              </motion.a>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-stone-600' : 'text-white/80'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="font-light">+971 4 265 1111</span>
            </div>
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-stone-600' : 'text-white/80'
            }`}>
              <MapPin className="w-4 h-4" />
              <span className="font-light">Dubai • London • Hong Kong</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`hover:bg-stone-100/20 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className={`relative hover:bg-stone-100/20 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-amber-500 text-white text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`xl:hidden hover:bg-stone-100/20 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-stone-50/98 backdrop-blur-xl z-40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {["BRANDS & COLLECTIONS", "BESPOKE SERVICES", "ABOUT US", "LOCATIONS"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-xl sm:text-2xl font-light tracking-wide text-stone-700 hover:text-stone-900 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-8 space-y-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-stone-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-light">+971 4 265 1111</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-stone-600">
                  <MapPin className="w-4 h-4" />
                  <span className="font-light">Dubai • London • Hong Kong</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
