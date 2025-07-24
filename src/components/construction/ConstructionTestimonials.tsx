"use client"
import type React from "react"
import { useState } from "react"

const ConstructionTestimonials: React.FC = () => {
  const [language, setLanguage] = useState("en")
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      position: "Construction Manager",
      positionAr: "مدير البناء",
      company: "Al-Rashid Construction Co.",
      companyAr: "شركة الراشد للإنشاءات",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      avatar: "/placeholder.svg?height=80&width=80&text=AR",
      rating: 5,
      testimonial: {
        en: "Rawasy has transformed how we source construction materials. The bulk pricing and reliable delivery have saved us both time and money on multiple projects. Their technical support team is exceptional.",
        ar: "لقد غيرت رواسي طريقة حصولنا على مواد البناء. أسعار الجملة والتوصيل الموثوق وفرا علينا الوقت والمال في مشاريع متعددة. فريق الدعم الفني لديهم استثنائي.",
      },
      projectType: "Commercial Complex",
      projectTypeAr: "مجمع تجاري",
      orderValue: "$250,000",
      yearsUsing: 3,
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      nameAr: "سارة ميتشل",
      position: "Project Engineer",
      positionAr: "مهندسة مشاريع",
      company: "Mitchell Engineering Ltd",
      companyAr: "شركة ميتشل للهندسة المحدودة",
      location: "London, UK",
      locationAr: "لندن، المملكة المتحدة",
      avatar: "/placeholder.svg?height=80&width=80&text=SM",
      rating: 5,
      testimonial: {
        en: "The quality of materials from Rawasy is consistently excellent. Their project calculator helped us estimate materials accurately, and the delivery was always on schedule. Highly recommended for any construction project.",
        ar: "جودة المواد من رواسي ممتازة باستمرار. ساعدتنا حاسبة المشروع في تقدير المواد بدقة، وكان التسليم دائماً في الموعد المحدد. أوصي بها بشدة لأي مشروع بناء.",
      },
      projectType: "Residential Development",
      projectTypeAr: "تطوير سكني",
      orderValue: "$180,000",
      yearsUsing: 2,
    },
    {
      id: 3,
      name: "Mohammad Hassan",
      nameAr: "محمد حسن",
      position: "General Contractor",
      positionAr: "مقاول عام",
      company: "Hassan Contracting",
      companyAr: "مقاولات حسن",
      location: "Riyadh, KSA",
      locationAr: "الرياض، السعودية",
      avatar: "/placeholder.svg?height=80&width=80&text=MH",
      rating: 5,
      testimonial: {
        en: "As a contractor working on multiple sites, I need reliable suppliers. Rawasy delivers quality materials on time, every time. Their bulk discounts have significantly improved our project margins.",
        ar: "كمقاول يعمل في مواقع متعددة، أحتاج إلى موردين موثوقين. تقدم رواسي مواد عالية الجودة في الوقت المحدد، في كل مرة. خصومات الجملة لديهم حسنت هوامش مشاريعنا بشكل كبير.",
      },
      projectType: "Infrastructure Project",
      projectTypeAr: "مشروع بنية تحتية",
      orderValue: "$500,000",
      yearsUsing: 4,
    },
    {
      id: 4,
      name: "Lisa Chen",
      nameAr: "ليزا تشين",
      position: "Architect",
      positionAr: "مهندسة معمارية",
      company: "Chen Architecture Studio",
      companyAr: "استوديو تشين للعمارة",
      location: "Singapore",
      locationAr: "سنغافورة",
      avatar: "/placeholder.svg?height=80&width=80&text=LC",
      rating: 4,
      testimonial: {
        en: "Rawasy's extensive catalog and detailed product specifications make material selection easy for our architectural projects. The quality assurance and certification documentation is comprehensive.",
        ar: "كتالوج رواسي الواسع ومواصفات المنتجات التفصيلية تجعل اختيار المواد سهلاً لمشاريعنا المعمارية. ضمان الجودة ووثائق الشهادات شاملة.",
      },
      projectType: "Luxury Villa",
      projectTypeAr: "فيلا فاخرة",
      orderValue: "$120,000",
      yearsUsing: 1,
    },
    {
      id: 5,
      name: "Omar Al-Zahra",
      nameAr: "عمر الزهراء",
      position: "Site Supervisor",
      positionAr: "مشرف موقع",
      company: "Al-Zahra Construction",
      companyAr: "إنشاءات الزهراء",
      location: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      avatar: "/placeholder.svg?height=80&width=80&text=OZ",
      rating: 5,
      testimonial: {
        en: "The mobile app makes ordering materials from the construction site incredibly convenient. Same-day delivery has saved our projects multiple times when we needed urgent supplies.",
        ar: "تطبيق الهاتف المحمول يجعل طلب المواد من موقع البناء مريحاً بشكل لا يصدق. التوصيل في نفس اليوم أنقذ مشاريعنا عدة مرات عندما احتجنا إلى إمدادات عاجلة.",
      },
      projectType: "Office Building",
      projectTypeAr: "مبنى مكاتب",
      orderValue: "$320,000",
      yearsUsing: 2,
    },
    {
      id: 6,
      name: "Jennifer Rodriguez",
      nameAr: "جينيفر رودريغيز",
      position: "DIY Homeowner",
      positionAr: "صاحبة منزل تفعل بنفسها",
      company: "Personal Project",
      companyAr: "مشروع شخصي",
      location: "Miami, USA",
      locationAr: "ميامي، الولايات المتحدة",
      avatar: "/placeholder.svg?height=80&width=80&text=JR",
      rating: 5,
      testimonial: {
        en: "Even as a DIY homeowner, Rawasy made it easy to find quality materials for my home renovation. The project calculator was incredibly helpful, and the customer service was patient with all my questions.",
        ar: "حتى كصاحبة منزل تفعل بنفسها، جعلت رواسي من السهل العثور على مواد عالية الجودة لتجديد منزلي. كانت حاسبة المشروع مفيدة بشكل لا يصدق، وكانت خدمة العملاء صبورة مع جميع أسئلتي.",
      },
      projectType: "Home Renovation",
      projectTypeAr: "تجديد المنزل",
      orderValue: "$15,000",
      yearsUsing: 1,
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <div className="construction-testimonials rts-section-gap bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between mb-5">
              <div className="title-left text-center">
                <h2 className="title">{language === "en" ? "What Our Customers Say" : "ماذا يقول عملاؤنا"}</h2>
                <p className="subtitle text-muted">
                  {language === "en"
                    ? "Trusted by contractors, builders, and DIY enthusiasts worldwide"
                    : "موثوق من قبل المقاولين والبناة وعشاق الأعمال اليدوية في جميع أنحاء العالم"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="main-testimonial bg-white rounded-4 shadow-lg p-5 position-relative">
              {/* Quote Icon */}
              <div className="quote-icon position-absolute top-0 start-0 m-4">
                <i className="fa-solid fa-quote-left text-primary opacity-25" style={{ fontSize: "3rem" }}></i>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-8">
                  {/* Testimonial Content */}
                  <div className="testimonial-content">
                    {/* Rating */}
                    <div className="testimonial-rating mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${i < currentTestimonial.rating ? "text-warning" : "text-muted"}`}
                        ></i>
                      ))}
                      <span className="rating-text ms-2 text-muted">{currentTestimonial.rating}/5</span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="testimonial-text h5 mb-4 text-dark">
                      "{language === "en" ? currentTestimonial.testimonial.en : currentTestimonial.testimonial.ar}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="project-info mb-3">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="info-item d-flex align-items-center">
                            <i className="fa-solid fa-building text-primary me-2"></i>
                            <div>
                              <small className="text-muted">
                                {language === "en" ? "Project Type:" : "نوع المشروع:"}
                              </small>
                              <div className="fw-bold">
                                {language === "en" ? currentTestimonial.projectType : currentTestimonial.projectTypeAr}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-item d-flex align-items-center">
                            <i className="fa-solid fa-dollar-sign text-success me-2"></i>
                            <div>
                              <small className="text-muted">{language === "en" ? "Order Value:" : "قيمة الطلب:"}</small>
                              <div className="fw-bold">{currentTestimonial.orderValue}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  {/* Customer Info */}
                  <div className="customer-info text-center">
                    <div className="customer-avatar mb-3">
                      <img
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={language === "en" ? currentTestimonial.name : currentTestimonial.nameAr}
                        className="rounded-circle"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </div>
                    <h5 className="customer-name mb-1">
                      {language === "en" ? currentTestimonial.name : currentTestimonial.nameAr}
                    </h5>
                    <p className="customer-position text-primary mb-1">
                      {language === "en" ? currentTestimonial.position : currentTestimonial.positionAr}
                    </p>
                    <p className="customer-company text-muted mb-2">
                      {language === "en" ? currentTestimonial.company : currentTestimonial.companyAr}
                    </p>
                    <div className="customer-location d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-map-marker-alt text-muted me-1"></i>
                      <small className="text-muted">
                        {language === "en" ? currentTestimonial.location : currentTestimonial.locationAr}
                      </small>
                    </div>
                    <div className="customer-experience mt-2">
                      <span className="badge bg-primary">
                        {currentTestimonial.yearsUsing} {language === "en" ? "years with Rawasy" : "سنوات مع رواسي"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className="testimonial-nav prev position-absolute top-50 start-0 translate-middle-y btn btn-primary btn-sm rounded-circle ms-3"
                onClick={prevTestimonial}
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="testimonial-nav next position-absolute top-50 end-0 translate-middle-y btn btn-primary btn-sm rounded-circle me-3"
                onClick={nextTestimonial}
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="testimonial-thumbnails">
          <div className="row g-3 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="col-lg-2 col-md-3 col-4">
                <div
                  className={`testimonial-thumb text-center p-3 rounded-3 cursor-pointer transition-all ${
                    index === activeTestimonial ? "bg-primary text-white" : "bg-white"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={language === "en" ? testimonial.name : testimonial.nameAr}
                    className="rounded-circle mb-2"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                  <h6 className="thumb-name small mb-1">
                    {language === "en" ? testimonial.name.split(" ")[0] : testimonial.nameAr.split(" ")[0]}
                  </h6>
                  <div className="thumb-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ fontSize: "0.7rem" }}></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Stats */}
        <div className="testimonial-stats mt-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <div className="stat-icon mb-3">
                  <i className="fa-solid fa-users text-primary" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold text-primary mb-1">10,000+</h3>
                <p className="stat-label text-muted mb-0">{language === "en" ? "Happy Customers" : "عميل سعيد"}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <div className="stat-icon mb-3">
                  <i className="fa-solid fa-star text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold text-warning mb-1">4.9/5</h3>
                <p className="stat-label text-muted mb-0">{language === "en" ? "Average Rating" : "متوسط التقييم"}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <div className="stat-icon mb-3">
                  <i className="fa-solid fa-box text-success" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold text-success mb-1">500K+</h3>
                <p className="stat-label text-muted mb-0">{language === "en" ? "Orders Delivered" : "طلب تم تسليمه"}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <div className="stat-icon mb-3">
                  <i className="fa-solid fa-clock text-info" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="stat-number display-6 fw-bold text-info mb-1">24h</h3>
                <p className="stat-label text-muted mb-0">{language === "en" ? "Average Delivery" : "متوسط التوصيل"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="testimonial-cta mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-card bg-primary text-white rounded-4 p-5 text-center">
                <h4 className="cta-title mb-3">
                  {language === "en" ? "Join Thousands of Satisfied Customers" : "انضم إلى آلاف العملاء الراضين"}
                </h4>
                <p className="cta-description mb-4 opacity-90">
                  {language === "en"
                    ? "Experience the difference with quality materials, competitive pricing, and exceptional service"
                    : "اختبر الفرق مع المواد عالية الجودة والأسعار التنافسية والخدمة الاستثنائية"}
                </p>
                <div className="cta-actions d-flex flex-wrap justify-content-center gap-3">
                  <button className="btn btn-light btn-lg px-4">
                    <i className="fa-solid fa-shopping-cart me-2"></i>
                    {language === "en" ? "Start Shopping" : "ابدأ التسوق"}
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4">
                    <i className="fa-solid fa-calculator me-2"></i>
                    {language === "en" ? "Get Quote" : "احصل على عرض سعر"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructionTestimonials
