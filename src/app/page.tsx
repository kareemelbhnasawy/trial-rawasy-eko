"use client"

import type React from "react"
import { useState, useEffect } from "react"
import HeaderOne from "@/components/header/HeaderOne"
import FooterOne from "@/components/footer/FooterOne"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Updated Images
const cementImage = "/placeholder.svg?height=300&width=400&text=High+Quality+Cement"
const steelImage = "/placeholder.svg?height=300&width=400&text=Durable+Steel+Rebar"
const lumberImage = "/placeholder.svg?height=300&width=400&text=Kiln-Dried+Lumber"
const electricalImage = "/placeholder.svg?height=300&width=400&text=Reliable+Electrical+Wiring"
const plumbingImage = "/placeholder.svg?height=300&width=400&text=High-Pressure+Plumbing+Pipes"
const toolsImage = "/placeholder.svg?height=300&width=400&text=Professional-Grade+Construction+Tools"

const constructionMaterials = [
  { id: 1, name: "Cement & Concrete", image: cementImage, link: "/category/cement" },
  { id: 2, name: "Steel & Rebar", image: steelImage, link: "/category/steel" },
  { id: 3, name: "Lumber & Wood", image: lumberImage, link: "/category/lumber" },
  { id: 4, name: "Electrical", image: electricalImage, link: "/category/electrical" },
  { id: 5, name: "Plumbing", image: plumbingImage, link: "/category/plumbing" },
  { id: 6, name: "Tools & Equipment", image: toolsImage, link: "/category/tools" },
]

const featuredProducts = [
  {
    id: 101,
    name: "High Strength Cement - 50kg Bag",
    price: "$9.99",
    image: cementImage,
    link: "/product/cement-strength",
  },
  {
    id: 102,
    name: "Reinforced Steel Bars - 12mm x 6m",
    price: "$7.49",
    image: steelImage,
    link: "/product/steel-bars",
  },
  { id: 103, name: "Treated Pine Lumber - 2x4", price: "$5.99", image: lumberImage, link: "/product/pine-lumber" },
]

const topVendors = [
  {
    id: 201,
    name: "BuildTech Materials",
    description: "Quality cement and concrete solutions.",
    logo: "/placeholder.svg?height=100&width=150&text=BuildTech+Logo",
    link: "/vendor/buildtech",
  },
  {
    id: 202,
    name: "Steel Masters Co.",
    description: "High-strength steel rebar for construction.",
    logo: "/placeholder.svg?height=100&width=150&text=SteelMasters+Logo",
    link: "/vendor/steelmasters",
  },
  {
    id: 203,
    name: "Premium Lumber Ltd",
    description: "Sustainable lumber and wood products.",
    logo: "/placeholder.svg?height=100&width=150&text=PremiumLumber+Logo",
    link: "/vendor/premiumlumber",
  },
]

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="rawasy-construction-marketplace font-barlow">
      <HeaderOne />

      {/* Hero Section */}
      <section className="hero-section bg-green-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            رواسي <span className="text-gray-700">Rawasy</span>
          </h1>
          <p className="text-xl text-gray-700 mb-12">Your Premier Online Marketplace for Construction Materials</p>
          <div className="flex justify-center gap-6">
            <a
              href="/shop"
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
            >
              Explore Materials
            </a>
            <a
              href="/vendors"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Vendors
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {constructionMaterials.map((material) => (
              <div
                key={material.id}
                className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <a href={material.link} className="block">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    className="mx-auto mb-4"
                    style={{ maxWidth: "80px", maxHeight: "80px" }}
                  />
                  <h3 className="text-lg font-semibold text-gray-700 text-center">{material.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <a href={product.link} className="block">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="mx-auto mb-4"
                    style={{ maxWidth: "200px", maxHeight: "150px" }}
                  />
                  <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Spotlight Section */}
      <section className="vendor-spotlight-section py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Top Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <a href={vendor.link} className="block">
                  <img
                    src={vendor.logo || "/placeholder.svg"}
                    alt={vendor.name}
                    className="mx-auto mb-4"
                    style={{ maxWidth: "150px", maxHeight: "100px" }}
                  />
                  <h3 className="text-xl font-semibold text-gray-700">{vendor.name}</h3>
                  <p className="text-gray-600">{vendor.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </div>
  )
}

export default HomePage
