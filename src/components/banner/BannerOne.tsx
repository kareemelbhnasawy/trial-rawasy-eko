"use client"
import type React from "react"
import Link from "next/link"

const BannerOne: React.FC = () => {
  return (
    <div className="rts-banner-area construction-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <div className="banner-badge mb-3">
                <span className="badge bg-primary text-white px-3 py-2">
                  <i className="fa-solid fa-hard-hat me-2"></i>
                  Professional Construction Materials
                </span>
              </div>

              <h1 className="banner-title mb-4">
                Build Your Dreams with
                <span className="text-primary d-block">Rawasy رواسي</span>
              </h1>

              <p className="banner-description mb-4">
                Your trusted B2B/B2C marketplace for premium construction materials, building supplies, and professional
                tools. Serving contractors, builders, architects, and DIY enthusiasts with quality materials and
                competitive prices.
              </p>

              <div className="banner-features mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center mb-2">
                      <i className="fa-solid fa-check-circle text-success me-2"></i>
                      <span>Bulk Pricing Available</span>
                    </div>
                    <div className="feature-item d-flex align-items-center mb-2">
                      <i className="fa-solid fa-check-circle text-success me-2"></i>
                      <span>Fast Delivery</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-item d-flex align-items-center mb-2">
                      <i className="fa-solid fa-check-circle text-success me-2"></i>
                      <span>Technical Support</span>
                    </div>
                    <div className="feature-item d-flex align-items-center mb-2">
                      <i className="fa-solid fa-check-circle text-success me-2"></i>
                      <span>Quality Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-actions">
                <Link href="/shop" className="btn btn-primary btn-lg me-3">
                  <i className="fa-solid fa-shopping-cart me-2"></i>
                  Shop Now
                </Link>
                <Link href="/bulk-quote" className="btn btn-outline-primary btn-lg">
                  <i className="fa-solid fa-calculator me-2"></i>
                  Get Bulk Quote
                </Link>
              </div>

              <div className="banner-stats mt-4">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h4 className="text-primary mb-1">500+</h4>
                      <small className="text-muted">Suppliers</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h4 className="text-primary mb-1">10K+</h4>
                      <small className="text-muted">Products</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h4 className="text-primary mb-1">50K+</h4>
                      <small className="text-muted">Happy Customers</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-image">
              <div className="construction-hero-image position-relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Construction Site"
                  className="img-fluid rounded-3 shadow-lg"
                />

                {/* Floating Elements */}
                <div className="floating-element position-absolute" style={{ top: "20px", right: "20px" }}>
                  <div className="bg-white rounded-3 p-3 shadow">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-truck text-primary me-2"></i>
                      <div>
                        <small className="text-muted d-block">Fast Delivery</small>
                        <strong>Same Day</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-element position-absolute" style={{ bottom: "20px", left: "20px" }}>
                  <div className="bg-primary text-white rounded-3 p-3 shadow">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-percentage me-2"></i>
                      <div>
                        <small className="opacity-75 d-block">Bulk Discount</small>
                        <strong>Up to 30% Off</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="banner-bg-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
      </div>
    </div>
  )
}

export default BannerOne
