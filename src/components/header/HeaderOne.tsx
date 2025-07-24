"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "./CartContext"
import { useWishlist } from "./WishlistContext"
import Cart from "./Cart"
import WishList from "./WishList"
import MobileMenu from "./MobileMenu"

const HeaderOne: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [language, setLanguage] = useState("en")

  const { cartItems } = useCart()
  const { wishlistItems } = useWishlist()

  const cartCount = cartItems.filter((item) => item.active).length
  const wishlistCount = wishlistItems.length

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
    document.documentElement.dir = language === "en" ? "rtl" : "ltr"
  }

  return (
    <>
      {/* Top Header */}
      <div className="rts-header-top-area bg-primary text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header-top-left">
                <span className="me-4">
                  <i className="fa-solid fa-phone me-2"></i>
                  +1 (555) 123-4567
                </span>
                <span>
                  <i className="fa-solid fa-envelope me-2"></i>
                  info@rawasy.com
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-top-right text-end">
                <button className="btn btn-sm btn-outline-light me-3" onClick={toggleLanguage}>
                  {language === "en" ? "العربية" : "English"}
                </button>
                <Link href="/login" className="text-white me-3">
                  <i className="fa-solid fa-user me-1"></i>
                  {language === "en" ? "Login" : "تسجيل الدخول"}
                </Link>
                <Link href="/register" className="text-white">
                  {language === "en" ? "Register" : "إنشاء حساب"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="rts-header-area header-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="header-logo">
                <Link href="/">
                  <div className="construction-logo d-flex align-items-center">
                    <div className="logo-icon me-2">
                      <i className="fa-solid fa-building text-primary" style={{ fontSize: "2rem" }}></i>
                    </div>
                    <div className="logo-text">
                      <h3 className="mb-0 text-primary fw-bold">Rawasy</h3>
                      <small className="text-muted">رواسي</small>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="header-search-area">
                <form onSubmit={handleSearch} className="search-form">
                  <div className="input-group">
                    <select className="form-select construction-category-select">
                      <option value="">All Categories</option>
                      <option value="cement">Cement & Concrete</option>
                      <option value="steel">Steel & Rebar</option>
                      <option value="lumber">Lumber & Wood</option>
                      <option value="electrical">Electrical</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="tools">Tools & Equipment</option>
                      <option value="insulation">Insulation</option>
                      <option value="roofing">Roofing</option>
                      <option value="tiles">Tiles & Flooring</option>
                      <option value="paint">Paint & Coating</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={language === "en" ? "Search construction materials..." : "البحث عن مواد البناء..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-6">
              <div className="header-right-area d-flex align-items-center justify-content-end">
                {/* Bulk Quote Button */}
                <Link href="/bulk-quote" className="btn btn-outline-primary me-3 d-none d-md-block">
                  <i className="fa-solid fa-calculator me-1"></i>
                  {language === "en" ? "Bulk Quote" : "عرض سعر بالجملة"}
                </Link>

                {/* Wishlist */}
                <div className="header-cart-area me-3">
                  <button className="cart-btn position-relative" onClick={() => setIsWishlistOpen(true)}>
                    <i className="fa-regular fa-heart"></i>
                    {wishlistCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="header-cart-area me-3">
                  <button className="cart-btn position-relative" onClick={() => setIsCartOpen(true)}>
                    <i className="fa-regular fa-shopping-cart"></i>
                    {cartCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle d-lg-none" onClick={() => setIsMobileMenuOpen(true)}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="header-nav-area bg-light py-2 d-none d-lg-block">
          <div className="container">
            <nav className="main-navigation">
              <ul className="nav-menu d-flex align-items-center">
                <li>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="nav-link dropdown-toggle">
                    Categories
                  </a>
                  <ul className="dropdown-menu construction-categories">
                    <li>
                      <Link href="/category/cement">Cement & Concrete</Link>
                    </li>
                    <li>
                      <Link href="/category/steel">Steel & Rebar</Link>
                    </li>
                    <li>
                      <Link href="/category/lumber">Lumber & Wood</Link>
                    </li>
                    <li>
                      <Link href="/category/electrical">Electrical</Link>
                    </li>
                    <li>
                      <Link href="/category/plumbing">Plumbing</Link>
                    </li>
                    <li>
                      <Link href="/category/tools">Tools & Equipment</Link>
                    </li>
                    <li>
                      <Link href="/category/insulation">Insulation</Link>
                    </li>
                    <li>
                      <Link href="/category/roofing">Roofing</Link>
                    </li>
                    <li>
                      <Link href="/category/tiles">Tiles & Flooring</Link>
                    </li>
                    <li>
                      <Link href="/category/paint">Paint & Coating</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/suppliers" className="nav-link">
                    Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="/bulk-orders" className="nav-link">
                    Bulk Orders
                  </Link>
                </li>
                <li>
                  <Link href="/project-calculator" className="nav-link">
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support" className="nav-link">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Wishlist Sidebar */}
      <WishList isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default HeaderOne
