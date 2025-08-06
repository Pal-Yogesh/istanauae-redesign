import type { Metadata } from "next"
import { Playfair_Display, Inter } from 'next/font/google'
import "./globals.css"
import { CartProvider } from "@/hooks/use-cart"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Istana Jewellers - Where Dreams Take Form",
  description: "Discover extraordinary jewelry crafted with passion, precision, and a century of heritage. Each piece tells a story as unique as yours.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
