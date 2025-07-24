"use client"
import type React from "react"
import Link from "next/link"

const FeaturedSuppliers: React.FC = () => {
  const suppliers = [
    {
      id: 1,
      name: "BuildTech Materials",
      nameAr: "مواد بيلد تك",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.8,
      reviewCount: 1250,
      specialties: ["Cement", "Steel", "Concrete"],
      location: "Dubai, UAE",
      verified: true,
      yearsInBusiness: 15,
      totalProducts: 450,
    },
    {
      id: 2,
      name: "Steel Masters Co.",
      nameAr: "شركة أساتذة الحديد",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.9,
      reviewCount: 890,
      specialties: ["Steel", "Rebar", "Metal"],
      location: "Riyadh, KSA",
      verified: true,
      yearsInBusiness: 20,
      totalProducts: 320,
    },
    {
      id: 3,
      name: "Premium Lumber Ltd",
      nameAr: "الأخشاب المتميزة المحدودة",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.7,
      reviewCount: 650,
      specialties: ["Lumber", "Wood", "Timber"],
      location: "Cairo, Egypt",
      verified: true,
      yearsInBusiness: 12,
      totalProducts: 280,
    },
    {
      id: 4,
      name: "ElectroTech Solutions",
      nameAr: "حلول إلكترو تك",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.6,
      reviewCount: 1100,
      specialties: ["Electrical", "Cables", "Components"],
      location: "Doha, Qatar",
      verified: true,
      yearsInBusiness: 8,
      totalProducts: 680,
    },
    {
      id: 5,
      name: "FlowPro Plumbing",
      nameAr: "فلو برو للسباكة",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.8,
      reviewCount: 720,
      specialties: ["Plumbing", "Pipes", "Fittings"],
      location: "Kuwait City, Kuwait",
      verified: true,
      yearsInBusiness: 10,
      totalProducts: 390,
    },
    {
      id: 6,
      name: "ToolMaster Pro",
      nameAr: "تول ماستر برو",
      logo: "/placeholder.svg?height=80&width=120",
      rating: 4.9,
      reviewCount: 1450,
      specialties: ["Tools", "Equipment", "Machinery"],
      location: "Abu Dhabi, UAE",
      verified: true,
      yearsInBusiness: 18,
      totalProducts: 850,
    },
  ]

  return (
    <div className="rts-featured-suppliers rts-section-gap bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between mb-5">
              <div className="title-left">
                <h2 className="title">Featured Suppliers</h2>
                <p className="subtitle text-muted">Trusted partners delivering quality construction materials</p>
              </div>
              <div className="title-right">
                <Link href="/suppliers" className="btn btn-outline-primary">
                  View All Suppliers
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="col-lg-4 col-md-6">
              <div className="supplier-card bg-white rounded-4 shadow-sm h-100 p-4">
                {/* Supplier Header */}
                <div className="supplier-header d-flex align-items-start mb-3">
                  <div className="supplier-logo me-3">
                    <img
                      src={supplier.logo || "/placeholder.svg"}
                      alt={supplier.name}
                      className="img-fluid rounded"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="supplier-info flex-grow-1">
                    <div className="d-flex align-items-center mb-1">
                      <h5 className="supplier-name mb-0 me-2">{supplier.name}</h5>
                      {supplier.verified && (
                        <span className="verified-badge">
                          <i className="fa-solid fa-check-circle text-success" title="Verified Supplier"></i>
                        </span>
                      )}
                    </div>
                    <p className="supplier-name-ar text-muted small mb-1">{supplier.nameAr}</p>
                    <div className="supplier-rating d-flex align-items-center">
                      <div className="stars me-2">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-solid fa-star ${i < Math.floor(supplier.rating) ? "text-warning" : "text-muted"}`}
                          ></i>
                        ))}
                      </div>
                      <span className="rating-text small">
                        {supplier.rating} ({supplier.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Supplier Details */}
                <div className="supplier-details mb-3">
                  <div className="detail-item d-flex align-items-center mb-2">
                    <i className="fa-solid fa-map-marker-alt text-muted me-2"></i>
                    <span className="small">{supplier.location}</span>
                  </div>
                  <div className="detail-item d-flex align-items-center mb-2">
                    <i className="fa-solid fa-calendar text-muted me-2"></i>
                    <span className="small">{supplier.yearsInBusiness} years in business</span>
                  </div>
                  <div className="detail-item d-flex align-items-center mb-2">
                    <i className="fa-solid fa-box text-muted me-2"></i>
                    <span className="small">{supplier.totalProducts} products available</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="supplier-specialties mb-3">
                  <h6 className="small fw-bold mb-2">Specialties:</h6>
                  <div className="specialties-tags">
                    {supplier.specialties.map((specialty, index) => (
                      <span key={index} className="badge bg-primary me-1 mb-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supplier Actions */}
                <div className="supplier-actions">
                  <div className="row g-2">
                    <div className="col-6">
                      <Link href={`/supplier/${supplier.id}`} className="btn btn-outline-primary btn-sm w-100">
                        <i className="fa-solid fa-eye me-1"></i>
                        View Store
                      </Link>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary btn-sm w-100">
                        <i className="fa-solid fa-envelope me-1"></i>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>

                {/* Supplier Badge */}
                <div className="supplier-badge position-absolute top-0 end-0 m-3">
                  <span className="badge bg-success">
                    <i className="fa-solid fa-star me-1"></i>
                    Featured
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Supplier CTA */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="become-supplier-cta bg-primary text-white rounded-4 p-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="cta-content">
                    <h4 className="mb-2">
                      <i className="fa-solid fa-handshake me-2"></i>
                      Become a Rawasy Supplier
                    </h4>
                    <p className="mb-0">
                      Join our network of trusted suppliers and reach thousands of contractors, builders, and
                      construction professionals across the region.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <Link href="/become-supplier" className="btn btn-light btn-lg">
                    <i className="fa-solid fa-plus me-2"></i>
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSuppliers
