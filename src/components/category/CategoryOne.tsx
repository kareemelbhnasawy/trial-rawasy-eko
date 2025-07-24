"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"

const CategoryOne: React.FC = () => {
  const [language, setLanguage] = useState("en")

  const categories = [
    {
      id: 1,
      name: "Cement & Concrete",
      nameAr: "الأسمنت والخرسانة",
      icon: "fa-solid fa-cube",
      image: "/placeholder.svg?height=200&width=300&text=Cement+Bags",
      productCount: 1250,
      description: "Portland cement, ready-mix concrete, additives",
      descriptionAr: "أسمنت بورتلاند، خرسانة جاهزة، إضافات",
      color: "bg-primary",
      slug: "cement-concrete",
    },
    {
      id: 2,
      name: "Steel & Rebar",
      nameAr: "الحديد والتسليح",
      icon: "fa-solid fa-industry",
      image: "/placeholder.svg?height=200&width=300&text=Steel+Rebar",
      productCount: 890,
      description: "Reinforcement bars, structural steel, mesh",
      descriptionAr: "قضبان التسليح، الحديد الإنشائي، الشبك",
      color: "bg-secondary",
      slug: "steel-rebar",
    },
    {
      id: 3,
      name: "Lumber & Wood",
      nameAr: "الأخشاب والألواح",
      icon: "fa-solid fa-tree",
      image: "/placeholder.svg?height=200&width=300&text=Lumber+Wood",
      productCount: 650,
      description: "Timber, plywood, engineered wood",
      descriptionAr: "الأخشاب، الخشب الرقائقي، الخشب المهندس",
      color: "bg-success",
      slug: "lumber-wood",
    },
    {
      id: 4,
      name: "Electrical",
      nameAr: "الكهربائيات",
      icon: "fa-solid fa-bolt",
      image: "/placeholder.svg?height=200&width=300&text=Electrical+Cables",
      productCount: 2100,
      description: "Cables, switches, panels, conduits",
      descriptionAr: "الكابلات، المفاتيح، اللوحات، المواسير",
      color: "bg-warning",
      slug: "electrical",
    },
    {
      id: 5,
      name: "Plumbing",
      nameAr: "السباكة",
      icon: "fa-solid fa-faucet",
      image: "/placeholder.svg?height=200&width=300&text=Plumbing+Pipes",
      productCount: 1450,
      description: "Pipes, fittings, valves, fixtures",
      descriptionAr: "الأنابيب، التركيبات، الصمامات، التجهيزات",
      color: "bg-info",
      slug: "plumbing",
    },
    {
      id: 6,
      name: "Tools & Equipment",
      nameAr: "الأدوات والمعدات",
      icon: "fa-solid fa-hammer",
      image: "/placeholder.svg?height=200&width=300&text=Construction+Tools",
      productCount: 3200,
      description: "Power tools, hand tools, machinery",
      descriptionAr: "الأدوات الكهربائية، الأدوات اليدوية، الآلات",
      color: "bg-danger",
      slug: "tools-equipment",
    },
    {
      id: 7,
      name: "Insulation",
      nameAr: "العزل",
      icon: "fa-solid fa-shield-alt",
      image: "/placeholder.svg?height=200&width=300&text=Insulation+Materials",
      productCount: 420,
      description: "Thermal, acoustic, moisture barriers",
      descriptionAr: "العزل الحراري، الصوتي، حواجز الرطوبة",
      color: "bg-dark",
      slug: "insulation",
    },
    {
      id: 8,
      name: "Roofing",
      nameAr: "مواد التسقيف",
      icon: "fa-solid fa-home",
      image: "/placeholder.svg?height=200&width=300&text=Roofing+Materials",
      productCount: 780,
      description: "Tiles, sheets, membranes, gutters",
      descriptionAr: "البلاط، الألواح، الأغشية، المزاريب",
      color: "bg-primary",
      slug: "roofing",
    },
    {
      id: 9,
      name: "Tiles & Flooring",
      nameAr: "البلاط والأرضيات",
      icon: "fa-solid fa-th-large",
      image: "/placeholder.svg?height=200&width=300&text=Floor+Tiles",
      productCount: 1680,
      description: "Ceramic, porcelain, natural stone",
      descriptionAr: "السيراميك، البورسلين، الحجر الطبيعي",
      color: "bg-success",
      slug: "tiles-flooring",
    },
    {
      id: 10,
      name: "Paint & Coating",
      nameAr: "الدهانات والطلاء",
      icon: "fa-solid fa-paint-brush",
      image: "/placeholder.svg?height=200&width=300&text=Paint+Buckets",
      productCount: 950,
      description: "Interior, exterior, primers, sealers",
      descriptionAr: "الداخلي، الخارجي، البرايمر، المانعات",
      color: "bg-info",
      slug: "paint-coating",
    },
  ]

  return (
    <div className="rts-construction-categories rts-section-gap bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between mb-5">
              <div className="title-left text-center">
                <h2 className="title">{language === "en" ? "Construction Categories" : "فئات البناء"}</h2>
                <p className="subtitle text-muted">
                  {language === "en"
                    ? "Find everything you need for your construction project"
                    : "اعثر على كل ما تحتاجه لمشروع البناء الخاص بك"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="construction-categories">
          <div className="row g-4">
            {categories.map((category) => (
              <div key={category.id} className="col-lg-3 col-md-4 col-sm-6">
                <Link href={`/category/${category.slug}`} className="text-decoration-none">
                  <div className="single-category-card h-100">
                    {/* Category Image */}
                    <div className="category-image-wrapper">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={language === "en" ? category.name : category.nameAr}
                        className="category-image"
                      />
                      <div className="category-overlay">
                        <i className={`${category.icon} category-icon`}></i>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="category-content p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div
                          className={`category-icon-badge ${category.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className={category.icon}></i>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="category-name mb-1">{language === "en" ? category.name : category.nameAr}</h5>
                          <span className="product-count small text-muted">
                            {category.productCount.toLocaleString()} {language === "en" ? "products" : "منتج"}
                          </span>
                        </div>
                      </div>

                      <p className="category-description small text-muted mb-3">
                        {language === "en" ? category.description : category.descriptionAr}
                      </p>

                      {/* Category Stats */}
                      <div className="category-stats d-flex justify-content-between align-items-center">
                        <div className="stat-item">
                          <i className="fa-solid fa-store text-muted me-1"></i>
                          <span className="small text-muted">
                            {Math.floor(category.productCount / 50)} {language === "en" ? "suppliers" : "مورد"}
                          </span>
                        </div>
                        <div className="view-all-link">
                          <span className="small text-primary fw-bold">
                            {language === "en" ? "View All" : "عرض الكل"}
                            <i className="fa-solid fa-arrow-right ms-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="category-hover-effect">
                      <span className="fw-bold">{language === "en" ? "Explore Category" : "استكشف الفئة"}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category Features */}
        <div className="category-features mt-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-certificate text-primary" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="feature-title mb-2">{language === "en" ? "Certified Quality" : "جودة معتمدة"}</h5>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "All materials meet international standards and certifications"
                    : "جميع المواد تلبي المعايير والشهادات الدولية"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-shipping-fast text-success" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="feature-title mb-2">{language === "en" ? "Fast Delivery" : "توصيل سريع"}</h5>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Same-day delivery available for urgent construction needs"
                    : "توصيل في نفس اليوم متاح لاحتياجات البناء العاجلة"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-calculator text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="feature-title mb-2">{language === "en" ? "Bulk Pricing" : "أسعار الجملة"}</h5>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Special wholesale rates for contractors and large projects"
                    : "أسعار جملة خاصة للمقاولين والمشاريع الكبيرة"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-headset text-info" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="feature-title mb-2">{language === "en" ? "Expert Support" : "دعم الخبراء"}</h5>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Technical consultation and project planning assistance"
                    : "استشارة فنية ومساعدة في تخطيط المشاريع"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="popular-searches mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="popular-searches-wrapper bg-white rounded-3 shadow-sm p-4">
                <h6 className="mb-3">{language === "en" ? "Popular Searches:" : "البحث الشائع:"}</h6>
                <div className="popular-tags d-flex flex-wrap gap-2">
                  {[
                    { en: "Portland Cement", ar: "أسمنت بورتلاند" },
                    { en: "Steel Rebar 12mm", ar: "حديد تسليح 12 مم" },
                    { en: "PVC Pipes", ar: "أنابيب PVC" },
                    { en: "Ceramic Tiles", ar: "بلاط سيراميك" },
                    { en: "Power Tools", ar: "أدوات كهربائية" },
                    { en: "Insulation Foam", ar: "رغوة العزل" },
                    { en: "Roof Tiles", ar: "بلاط السقف" },
                    { en: "Electrical Cables", ar: "كابلات كهربائية" },
                  ].map((tag, index) => (
                    <Link
                      key={index}
                      href={`/search?q=${encodeURIComponent(tag.en)}`}
                      className="badge bg-light text-dark text-decoration-none px-3 py-2 rounded-pill border"
                    >
                      {language === "en" ? tag.en : tag.ar}
                    </Link>
                  ))}
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
