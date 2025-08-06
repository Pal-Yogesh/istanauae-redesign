"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, CreditCard, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-stone-50 border-l border-stone-200 z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-stone-700" />
                <h2 className="text-xl font-serif text-stone-900">Your Cart</h2>
                {items.length > 0 && (
                  <Badge className="bg-stone-900 text-stone-50">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                  <p className="text-stone-500 mb-6 font-light">Your cart is empty</p>
                  <Button 
                    onClick={onClose}
                    className="bg-stone-900 text-stone-50 hover:bg-stone-800 font-light"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm"
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <img 
                        src={item.image || "/placeholder.svg?height=80&width=80&query=luxury jewelry"} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-stone-900 mb-1">{item.name}</h3>
                        <p className="text-stone-600 font-light">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 hover:bg-stone-100"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-stone-900 font-light">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 hover:bg-stone-100"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-200 p-6 space-y-4 bg-white">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-stone-900 font-serif">Total</span>
                  <span className="text-stone-900 font-light">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <Button 
                  className="w-full bg-stone-900 text-stone-50 hover:bg-stone-800 py-4 font-light tracking-wide"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-stone-500 text-center font-light">
                  Secure checkout • Complimentary shipping on orders over $10,000
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
