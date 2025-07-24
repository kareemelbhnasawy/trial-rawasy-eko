import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/header/CartContext"
import { WishlistProvider } from "@/components/header/WishlistContext"
import { CompareProvider } from "@/components/header/CompareContext"
import BackToTop from "@/components/common/BackToTop"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rawasy رواسي - Construction Materials Marketplace",
  description:
    "Your trusted B2B/B2C marketplace for construction materials, building supplies, and professional tools. Serving contractors, builders, and DIY enthusiasts.",
  keywords:
    "construction materials, building supplies, cement, steel, lumber, electrical, plumbing, tools, contractors, builders",
  icons: {
    icon: [
      {
        url: "/assets/images/fav.png",
        type: "image/x-icon",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <CompareProvider>
              {children}
              <BackToTop />
              <ToastContainer />
            </CompareProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
