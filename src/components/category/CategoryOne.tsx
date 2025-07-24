"use client"
import type React from "react"
import Link from "next/link"

const CategoryOne: React.FC = () => {
  const constructionCategories = [
    {
      id: 1,
      name: "Cement & Concrete",
      nameAr: "الأسمنت والخرسانة",
      icon: "fa-solid fa-cube",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 1250,
      slug: "cement-concrete",
      color: "#6c757d",
    },
    {
      id: 2,
      name: "Steel & Rebar",
      nameAr: "الحديد والتسليح",
      icon: "fa-solid fa-industry",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 890,
      slug: "steel-rebar",
      color: "#495057",
    },
    {
      id: 3,
      name: "Lumber & Wood",
      nameAr: "الأخشاب والألواح",
      icon: "fa-solid fa-tree",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 650,
      slug: "lumber-wood",
      color: "#8b4513",
    },
    {
      id: 4,
      name: "Electrical",
      nameAr: "الكهربائيات",
      icon: "fa-solid fa-bolt",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 2100,
      slug: "electrical",
      color: "#ffc107",
    },
    {
      id: 5,
      name: "Plumbing",
      nameAr: "السباكة",
      icon: "fa-solid fa-wrench",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 1450,
      slug: "plumbing",
      color: "#0d6efd",
    },
    {
      id: 6,
      name: "Tools & Equipment",
      nameAr: "الأدوات والمعدات",
      icon: "fa-solid fa-hammer",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 3200,
      slug: "tools-equipment",
      color: "#dc3545",
    },
    {
      id: 7,
      name: "Insulation",
      nameAr: "العزل",
      icon: "fa-solid fa-shield-alt",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 420,
      slug: "insulation",
      color: "#20c997",
    },
    {
      id: 8,
      name: "Roofing",
      nameAr: "مواد التسقيف",
      icon: "fa-solid fa-home",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 780,
      slug: "roofing",
      color: "#6f42c1",
    },
    {
      id: 9,
      name: "Tiles & Flooring",
      nameAr: "البلاط والأرضيات",
      icon: "fa-solid fa-th-large",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 1680,
      slug: "tiles-flooring",
      color: "#fd7e14",
    },
    {
      id: 10,
      name: "Paint & Coating",
      nameAr: "الدهانات والطلاء",
      icon: "fa-solid fa-paint-brush",
      image: "/placeholder.svg?height=200&width=200",
      productCount: 950,
      slug: "paint-coating",
      color: "#e83e8c",
    },
  ]

  return (
    <div className="rts-category-area construction-categories rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between mb-5">
              <div className="title-left">
                <h2 className="title">Construction Categories</h2>
                <p className="subtitle text-muted">Browse our comprehensive range of construction materials</p>
              </div>
              <div className="title-right">
                <Link href="/categories" className="btn btn-outline-primary">
                  View All Categories
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {constructionCategories.map((category) => (
            <div key={category.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <Link href={`/category/${category.slug}`}>
                <div className="single-category-card construction-category">
                  <div className="category-image-wrapper position-relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="category-image img-fluid"
                    />
                    <div className="category-overlay">
                      <div className="category-icon" style={{ color: category.color }}>
                        <i className={category.icon}></i>
                      </div>
                    </div>
                  </div>

                  <div className="category-content text-center mt-3">
                    <h5 className="category-title mb-1">{category.name}</h5>
                    <p className="category-title-ar text-muted small mb-2">{category.nameAr}</p>
                    <span className="product-count badge bg-light text-dark">
                      {category.productCount.toLocaleString()} Products
                    </span>
                  </div>

                  <div className="category-hover-effect">
                    <div className="hover-content">
                      <span className="btn btn-primary btn-sm">
                        Shop Now
                        <i className="fa-solid fa-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="construction-offers-banner bg-primary text-white rounded-3 p-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="offer-content">
                    <h3 className="mb-2">
                      <i className="fa-solid fa-fire me-2"></i>
                      Special Construction Package Deals
                    </h3>
                    <p className="mb-0">
                      Save up to 25% on bulk orders. Perfect for contractors and large projects. Get instant quotes for
                      quantities over 1000 units.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <Link href="/bulk-deals" className="btn btn-light btn-lg">
                    <i className="fa-solid fa-tags me-2"></i>
                    View Deals
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

export default CategoryOne
