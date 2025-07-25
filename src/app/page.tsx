"use client"

import type React from "react"
import { useState, useEffect } from "react"
import HeaderOne from "@/components/header/HeaderOne"
import FooterOne from "@/components/footer/FooterOne"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Placeholder Images
const cementImage = "/placeholder.svg?height=300&width=400&text=Cement+and+Concrete"
const steelImage = "/placeholder.svg?height=300&width=400&text=Steel+and+Rebar"
const lumberImage = "/placeholder.svg?height=300&width=400&text=Lumber+and+Wood"
const electricalImage = "/placeholder.svg?height=300&width=400&text=Electrical+Supplies"
const plumbingImage = "/placeholder.svg?height=300&width=400&text=Plumbing+Materials"
const toolsImage = "/placeholder.svg?height=300&width=400&text=Tools+and+Equipment"

const constructionMaterials = [
  { id: 1, name: "Cement & Concrete", image: cementImage, link: "/category/cement" },
  { id: 2, name: "Steel & Rebar", image: steelImage, link: "/category/steel" },
  { id: 3, name: "Lumber & Wood", image: lumberImage, link: "/category/lumber" },
  { id: 4, name: "Electrical", image: electricalImage, link: "/category/electrical" },
  { id: 5, name: "Plumbing", image: plumbingImage, link: "/category/plumbing" },
  { id: 6, name: "Tools & Equipment", image: toolsImage, link: "/category/tools" },
]

const featuredProducts = [
  { id: 101, name: "High Strength Cement", price: "$9.99", image: cementImage, link: "/product/cement-strength" },
  { id: 102, name: "Reinforced Steel Bars", price: "$7.49", image: steelImage, link: "/product/steel-bars" },
  { id: 103, name: "Treated Pine Lumber", price: "$5.99", image: lumberImage, link: "/product/pine-lumber" },
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
    <div className="rawasy-construction-marketplace">
      <HeaderOne />

      {/* Hero Section */}
      <section className="hero-section bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Rawasy رواسي</h1>
          <p className="text-lg text-gray-600 mb-8">Your trusted marketplace for construction materials.</p>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
              Shop Now
            </a>
            <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {constructionMaterials.map((material) => (
              <div key={material.id} className="p-4 bg-white rounded-lg shadow-md">
                <a href={material.link} className="block">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    className="mx-auto mb-4"
                    style={{ maxWidth: "100px" }}
                  />
                  <h3 className="text-lg font-semibold text-gray-700 text-center">{material.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="p-6 bg-white rounded-lg shadow-md">
                <a href={product.link} className="block">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="mx-auto mb-4"
                    style={{ maxWidth: "200px" }}
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
      <section className="vendor-spotlight-section py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Vendor Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">BuildTech Materials</h3>
              <p className="text-gray-600">Your reliable source for quality cement and concrete.</p>
              <a href="/vendor/buildtech" className="text-blue-500 hover:underline">
                View Store
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Steel Masters Co.</h3>
              <p className="text-gray-600">Providing high-strength steel rebar for all construction needs.</p>
              <a href="/vendor/steelmasters" className="text-blue-500 hover:underline">
                View Store
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Premium Lumber Ltd</h3>
              <p className="text-gray-600">Sustainable lumber and wood products for your projects.</p>
              <a href="/vendor/premiumlumber" className="text-blue-500 hover:underline">
                View Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterOne />
    </div>
  )
}

export default HomePage
