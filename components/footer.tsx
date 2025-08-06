"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[url('/ring-bw.webp')] bg-cover bg-center w-full h-auto text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/footer-pattern.png')] bg-repeat" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="border-b border-stone-800 py-16 lg:py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
              Stay Connected
            </h3>
            <p className="text-lg sm:text-xl text-stone-300 font-light mb-8 max-w-2xl mx-auto">
              Be the first to discover our latest collections, exclusive events, and jewelry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-400 flex-1"
              />
              <Button className="bg-amber-500 text-stone-900 hover:bg-amber-400 px-8">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-start mb-6">
                  <div className="text-2xl font-serif tracking-wider text-white mb-1">
                    ISTANA
                  </div>
                  <div className="text-sm font-light tracking-[0.2em] text-stone-400">
                    اسـتـانـا
                  </div>
                </div>
                <p className="text-stone-300 font-light leading-relaxed mb-6">
                  For a century, Istana Jewellers has been crafting extraordinary pieces that tell unique stories.
                  Each creation reflects our commitment to excellence and timeless beauty.
                </p>
                <div className="flex space-x-4">
                  {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Collections */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif text-white mb-6">Collections</h4>
                <ul className="space-y-3">
                  {[
                    "Bridal Collection",
                    "High Jewelry",
                    "Men's Collection",
                    "Watches",
                    "Precious Stones",
                    "Custom Design"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-stone-300 hover:text-white transition-colors font-light">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Bespoke Design",
                    "Jewelry Repair",
                    "Appraisal Services",
                    "Consultation",
                    "After-Sales Care",
                    "Investment Guidance"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-stone-300 hover:text-white transition-colors font-light">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-serif text-white mb-6">Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-stone-300 font-light text-sm">Dubai Flagship</p>
                      <p className="text-stone-400 font-light text-sm">Gold Souk, Deira, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-stone-300 font-light text-sm">+971 4 123 4567</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-stone-300 font-light text-sm">info@istanajewellers.com</p>
                  </div>
                </div>

                {/* Other Locations */}
                <div className="mt-6 pt-6 border-t border-stone-800">
                  <p className="text-stone-400 font-light text-sm mb-2">Other Locations:</p>
                  <p className="text-stone-300 font-light text-sm">London • Hong Kong</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-stone-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-stone-400 font-light text-sm text-center sm:text-left">
                © 2024 Istana Jewellers. All rights reserved. Crafting excellence since 1924.
              </p>
              <div className="flex space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <a key={item} href="#" className="text-stone-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
