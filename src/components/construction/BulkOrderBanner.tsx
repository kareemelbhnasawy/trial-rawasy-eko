"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"

const BulkOrderBanner: React.FC = () => {
  const [language, setLanguage] = useState("en")
  const [selectedTier, setSelectedTier] = useState(1)

  const pricingTiers = [
    {
      id: 1,
      name: "Starter",
      nameAr: "المبتدئ",
      minOrder: "$1,000",
      discount: "5-10%",
      features: [
        { en: "Basic bulk pricing", ar: "أسعار جملة أساسية" },
        { en: "Standard delivery", ar: "توصيل عادي" },
        { en: "Email support", ar: "دعم بالبريد الإلكتروني" },
      ],
      color: "bg-primary",
    },
    {
      id: 2,
      name: "Professional",
      nameAr: "المحترف",
      minOrder: "$5,000",
      discount: "10-15%",
      features: [
        { en: "Enhanced bulk pricing", ar: "أسعار جملة محسنة" },
        { en: "Priority delivery", ar: "توصيل أولوية" },
        { en: "Phone & email support", ar: "دعم هاتفي وبريد إلكتروني" },
        { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
      ],
      color: "bg-success",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      nameAr: "المؤسسي",
      minOrder: "$25,000",
      discount: "15-25%",
      features: [
        { en: "Maximum bulk discounts", ar: "أقصى خصومات الجملة" },
        { en: "Same-day delivery", ar: "توصيل في نفس اليوم" },
        { en: "24/7 priority support", ar: "دعم أولوية 24/7" },
        { en: "Custom pricing agreements", ar: "اتفاقيات أسعار مخصصة" },
        { en: "Credit terms available", ar: "شروط ائتمان متاحة" },
      ],
      color: "bg-warning",
    },
  ]

  const benefits = [
    {
      icon: "fa-solid fa-percentage",
      title: { en: "Volume Discounts", ar: "خصومات الكمية" },
      description: { en: "Save up to 25% on bulk orders", ar: "وفر حتى 25% على الطلبات بالجملة" },
    },
    {
      icon: "fa-solid fa-truck-fast",
      title: { en: "Priority Delivery", ar: "توصيل أولوية" },
      description: { en: "Faster shipping for large orders", ar: "شحن أسرع للطلبات الكبيرة" },
    },
    {
      icon: "fa-solid fa-user-tie",
      title: { en: "Account Manager", ar: "مدير الحساب" },
      description: { en: "Dedicated support for your projects", ar: "دعم مخصص لمشاريعك" },
    },
    {
      icon: "fa-solid fa-credit-card",
      title: { en: "Flexible Payment", ar: "دفع مرن" },
      description: { en: "Credit terms and payment options", ar: "شروط ائتمان وخيارات دفع" },
    },
  ]

  return (
    <div className="bulk-order-banner rts-section-gap bg-gradient-primary text-white position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="construction-pattern"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bulk-content">
              {/* Badge */}
              <div className="bulk-badge mb-3">
                <span className="badge bg-white text-primary px-3 py-2 rounded-pill">
                  <i className="fa-solid fa-star me-2"></i>
                  {language === "en" ? "Bulk Orders Special" : "عروض خاصة للطلبات بالجملة"}
                </span>
              </div>

              {/* Title */}
              <h2 className="bulk-title display-5 fw-bold mb-3">
                {language === "en" ? "Save Big on Bulk Orders" : "وفر كثيراً على الطلبات بالجملة"}
              </h2>

              {/* Subtitle */}
              <p className="bulk-subtitle lead mb-4 opacity-90">
                {language === "en"
                  ? "Get wholesale pricing, priority delivery, and dedicated support for your construction projects"
                  : "احصل على أسعار الجملة والتوصيل الأولوي والدعم المخصص لمشاريع البناء الخاصة بك"}
              </p>

              {/* Benefits Grid */}
              <div className="benefits-grid row g-3 mb-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6">
                    <div className="benefit-item d-flex align-items-start">
                      <div className="benefit-icon me-3">
                        <i className={`${benefit.icon} text-white`} style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <div className="benefit-content">
                        <h6 className="benefit-title mb-1">
                          {language === "en" ? benefit.title.en : benefit.title.ar}
                        </h6>
                        <p className="benefit-description small mb-0 opacity-75">
                          {language === "en" ? benefit.description.en : benefit.description.ar}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="bulk-actions d-flex flex-wrap gap-3">
                <Link href="/bulk-quote" className="btn btn-light btn-lg px-4">
                  <i className="fa-solid fa-calculator me-2"></i>
                  {language === "en" ? "Get Bulk Quote" : "احصل على عرض سعر بالجملة"}
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  <i className="fa-solid fa-phone me-2"></i>
                  {language === "en" ? "Call Sales Team" : "اتصل بفريق المبيعات"}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bulk-quote-card bg-white text-dark rounded-4 shadow-lg p-4">
              <div className="card-header text-center mb-4">
                <h4 className="card-title mb-2">{language === "en" ? "Bulk Pricing Tiers" : "مستويات أسعار الجملة"}</h4>
                <p className="card-subtitle text-muted small mb-0">
                  {language === "en"
                    ? "Choose the tier that fits your project size"
                    : "اختر المستوى الذي يناسب حجم مشروعك"}
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="pricing-tiers">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`tier-card position-relative ${selectedTier === tier.id ? "border-primary" : "border-light"}`}
                    style={{
                      border: "2px solid",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    {tier.popular && (
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-success">{language === "en" ? "Popular" : "الأكثر شعبية"}</span>
                      </div>
                    )}

                    <div className="tier-header d-flex align-items-center mb-3">
                      <div
                        className={`tier-icon ${tier.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="fa-solid fa-layer-group"></i>
                      </div>
                      <div className="tier-info">
                        <h5 className="tier-name mb-1">{language === "en" ? tier.name : tier.nameAr}</h5>
                        <div className="tier-details">
                          <span className="tier-order small text-muted">
                            {language === "en" ? "Min Order:" : "أقل طلب:"} {tier.minOrder}
                          </span>
                          <span className="tier-discount badge bg-success ms-2">
                            {tier.discount} {language === "en" ? "OFF" : "خصم"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="tier-features">
                      <ul className="list-unstyled mb-0">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="d-flex align-items-center mb-2">
                            <i className="fa-solid fa-check text-success me-2"></i>
                            <span className="small">{language === "en" ? feature.en : feature.ar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Quote Form */}
              <div className="quick-quote-form mt-4 p-3 bg-light rounded-3">
                <h6 className="form-title mb-3">{language === "en" ? "Quick Quote Request" : "طلب عرض سعر سريع"}</h6>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder={language === "en" ? "Your Name" : "اسمك"}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder={language === "en" ? "Email Address" : "البريد الإلكتروني"}
                      />
                    </div>
                    <div className="col-12">
                      <select className="form-select form-select-sm">
                        <option value="">{language === "en" ? "Select Category" : "اختر الفئة"}</option>
                        <option value="cement">{language === "en" ? "Cement & Concrete" : "الأسمنت والخرسانة"}</option>
                        <option value="steel">{language === "en" ? "Steel & Rebar" : "الحديد والتسليح"}</option>
                        <option value="lumber">{language === "en" ? "Lumber & Wood" : "الأخشاب والألواح"}</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control form-control-sm"
                        rows={3}
                        placeholder={
                          language === "en"
                            ? "Project details and quantity needed..."
                            : "تفاصيل المشروع والكمية المطلوبة..."
                        }
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-sm w-100">
                        <i className="fa-solid fa-paper-plane me-2"></i>
                        {language === "en" ? "Request Quote" : "اطلب عرض سعر"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bulk-stats mt-5">
          <div className="row g-4 text-center">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon mb-2">
                  <i className="fa-solid fa-handshake" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold mb-1">2,500+</h3>
                <p className="stat-label mb-0 opacity-75">
                  {language === "en" ? "Bulk Orders Completed" : "طلب بالجملة مكتمل"}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon mb-2">
                  <i className="fa-solid fa-dollar-sign" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold mb-1">$50M+</h3>
                <p className="stat-label mb-0 opacity-75">
                  {language === "en" ? "Total Savings Generated" : "إجمالي الوفورات المحققة"}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon mb-2">
                  <i className="fa-solid fa-clock" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold mb-1">24h</h3>
                <p className="stat-label mb-0 opacity-75">
                  {language === "en" ? "Average Quote Response" : "متوسط الرد على العروض"}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon mb-2">
                  <i className="fa-solid fa-star" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold mb-1">4.9/5</h3>
                <p className="stat-label mb-0 opacity-75">
                  {language === "en" ? "Customer Satisfaction" : "رضا العملاء"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkOrderBanner
