"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

const BannerOne: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState("en")

  const slides = [
    {
      id: 1,
      title: "Build Your Dreams with Quality Materials",
      titleAr: "ابن أحلامك بمواد عالية الجودة",
      subtitle: "Your trusted B2B/B2C marketplace for construction materials",
      subtitleAr: "السوق الموثوق للمواد الإنشائية للشركات والأفراد",
      description: "From cement to steel, lumber to tools - find everything you need for your construction projects",
      descriptionAr: "من الأسمنت إلى الحديد، من الأخشاب إلى الأدوات - اعثر على كل ما تحتاجه لمشاريع البناء",
      image: "/placeholder.svg?height=600&width=800&text=Construction+Site",
      cta1: "Shop Materials",
      cta1Ar: "تسوق المواد",
      cta2: "Get Bulk Quote",
      cta2Ar: "احصل على عرض سعر بالجملة",
      bgColor: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      title: "Professional Tools & Equipment",
      titleAr: "أدوات ومعدات احترافية",
      subtitle: "Power tools, hand tools, and heavy machinery",
      subtitleAr: "أدوات كهربائية ويدوية ومعدات ثقيلة",
      description: "Equip your team with professional-grade tools from trusted brands",
      descriptionAr: "جهز فريقك بأدوات احترافية من علامات تجارية موثوقة",
      image: "/placeholder.svg?height=600&width=800&text=Construction+Tools",
      cta1: "Browse Tools",
      cta1Ar: "تصفح الأدوات",
      cta2: "Compare Prices",
      cta2Ar: "قارن الأسعار",
      bgColor: "from-orange-600 to-red-600",
    },
    {
      id: 3,
      title: "Bulk Orders & Wholesale Pricing",
      titleAr: "طلبات بالجملة وأسعار الجملة",
      subtitle: "Special rates for contractors and large projects",
      subtitleAr: "أسعار خاصة للمقاولين والمشاريع الكبيرة",
      description: "Save more with our bulk pricing tiers and dedicated account management",
      descriptionAr: "وفر أكثر مع مستويات أسعار الجملة وإدارة الحسابات المخصصة",
      image: "/placeholder.svg?height=600&width=800&text=Bulk+Materials",
      cta1: "Request Quote",
      cta1Ar: "اطلب عرض سعر",
      cta2: "Contact Sales",
      cta2Ar: "اتصل بالمبيعات",
      bgColor: "from-green-600 to-teal-600",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="construction-banner position-relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-element bg-element-1"></div>
      <div className="bg-element bg-element-2"></div>

      {/* Animated Background Gradient */}
      <div
        className={`position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r ${currentSlideData.bgColor} opacity-10`}
      ></div>

      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6">
            <div className="banner-content position-relative z-2">
              {/* Badge */}
              <div className="banner-badge mb-3">
                <span className="badge bg-primary px-3 py-2 rounded-pill">
                  <i className="fa-solid fa-building me-2"></i>
                  {language === "en" ? "Trusted by 10,000+ Contractors" : "موثوق من قبل أكثر من 10,000 مقاول"}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="banner-title display-4 fw-bold text-dark mb-3">
                {language === "en" ? currentSlideData.title : currentSlideData.titleAr}
              </h1>

              {/* Subtitle */}
              <h2 className="banner-subtitle h4 text-muted mb-3">
                {language === "en" ? currentSlideData.subtitle : currentSlideData.subtitleAr}
              </h2>

              {/* Description */}
              <p className="banner-description lead text-secondary mb-4">
                {language === "en" ? currentSlideData.description : currentSlideData.descriptionAr}
              </p>

              {/* Features List */}
              <div className="banner-features mb-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center">
                      <i className="fa-solid fa-check-circle text-success me-2"></i>
                      <span className="small">{language === "en" ? "Quality Guaranteed" : "جودة مضمونة"}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center">
                      <i className="fa-solid fa-truck text-success me-2"></i>
                      <span className="small">{language === "en" ? "Fast Delivery" : "توصيل سريع"}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center">
                      <i className="fa-solid fa-shield-alt text-success me-2"></i>
                      <span className="small">{language === "en" ? "Certified Suppliers" : "موردون معتمدون"}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center">
                      <i className="fa-solid fa-headset text-success me-2"></i>
                      <span className="small">{language === "en" ? "24/7 Support" : "دعم 24/7"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="banner-actions d-flex flex-wrap gap-3">
                <Link href="/shop" className="btn btn-primary btn-lg px-4 py-3">
                  <i className="fa-solid fa-shopping-cart me-2"></i>
                  {language === "en" ? currentSlideData.cta1 : currentSlideData.cta1Ar}
                </Link>
                <Link href="/bulk-quote" className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fa-solid fa-calculator me-2"></i>
                  {language === "en" ? currentSlideData.cta2 : currentSlideData.cta2Ar}
                </Link>
              </div>

              {/* Stats */}
              <div className="banner-stats mt-5">
                <div className="row g-4">
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="stat-number h4 fw-bold text-primary mb-1">50K+</h3>
                      <p className="stat-label small text-muted mb-0">{language === "en" ? "Products" : "منتج"}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="stat-number h4 fw-bold text-primary mb-1">500+</h3>
                      <p className="stat-label small text-muted mb-0">{language === "en" ? "Suppliers" : "مورد"}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="stat-number h4 fw-bold text-primary mb-1">24h</h3>
                      <p className="stat-label small text-muted mb-0">{language === "en" ? "Delivery" : "توصيل"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-image position-relative">
              {/* Main Image */}
              <div className="image-wrapper position-relative">
                <img
                  src={currentSlideData.image || "/placeholder.svg"}
                  alt="Construction Materials"
                  className="img-fluid rounded-4 shadow-lg"
                />

                {/* Floating Elements */}
                <div className="floating-element position-absolute top-0 end-0 m-3">
                  <div className="bg-white rounded-3 shadow p-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star text-warning me-2"></i>
                      <div>
                        <div className="fw-bold">4.9/5</div>
                        <div className="small text-muted">Customer Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-element position-absolute bottom-0 start-0 m-3">
                  <div className="bg-primary text-white rounded-3 shadow p-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-truck me-2"></i>
                      <div>
                        <div className="fw-bold">Free Delivery</div>
                        <div className="small opacity-75">Orders over $500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="slider-controls position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-outline-primary btn-sm rounded-circle"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="slider-dots d-flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: index === currentSlide ? "#0d6efd" : "#dee2e6",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="btn btn-outline-primary btn-sm rounded-circle"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <div className="search-overlay position-absolute bottom-0 start-0 w-100 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="search-card bg-white rounded-4 shadow-lg p-4">
                <form className="search-form">
                  <div className="row g-3 align-items-end">
                    <div className="col-md-4">
                      <label className="form-label small fw-bold">Category</label>
                      <select className="form-select">
                        <option value="">All Categories</option>
                        <option value="cement">Cement & Concrete</option>
                        <option value="steel">Steel & Rebar</option>
                        <option value="lumber">Lumber & Wood</option>
                        <option value="electrical">Electrical</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="tools">Tools & Equipment</option>
                      </select>
                    </div>
                    <div className="col-md-5">
                      <label className="form-label small fw-bold">Search Materials</label>
                      <input type="text" className="form-control" placeholder="e.g., Portland cement, steel rebar..." />
                    </div>
                    <div className="col-md-3">
                      <button type="submit" className="btn btn-primary w-100">
                        <i className="fa-solid fa-search me-2"></i>
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerOne
