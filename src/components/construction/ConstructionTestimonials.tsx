"use client"
import type React from "react"

const ConstructionTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      position: "Construction Manager",
      positionAr: "مدير البناء",
      company: "Al-Rashid Construction",
      companyAr: "شركة الراشد للإنشاءات",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Rawasy has been our go-to supplier for over 3 years. Their bulk pricing and reliable delivery have saved us both time and money on major projects. The quality of materials is consistently excellent.",
      testimonialAr:
        "رواسي هو المورد المفضل لدينا لأكثر من 3 سنوات. أسعار الجملة والتسليم الموثوق وفر علينا الوقت والمال في المشاريع الكبيرة.",
      projectType: "Commercial Buildings",
      location: "Dubai, UAE",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      nameAr: "سارة ميتشل",
      position: "Project Architect",
      positionAr: "مهندسة معمارية",
      company: "Mitchell Design Studio",
      companyAr: "استوديو ميتشل للتصميم",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The technical support team at Rawasy is outstanding. They helped us select the right materials for our sustainable building project and provided detailed specifications that met all our requirements.",
      testimonialAr: "فريق الدعم الفني في رواسي ممتاز. ساعدونا في اختيار المواد المناسبة لمشروع البناء المستدام.",
      projectType: "Sustainable Architecture",
      location: "Abu Dhabi, UAE",
    },
    {
      id: 3,
      name: "Mohammad Hassan",
      nameAr: "محمد حسان",
      position: "General Contractor",
      positionAr: "مقاول عام",
      company: "Hassan Brothers Contracting",
      companyAr: "مقاولات الأخوة حسان",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Fast delivery and competitive prices make Rawasy our preferred supplier. The project calculator tool is incredibly useful for estimating materials, and their bulk discounts help us stay within budget.",
      testimonialAr:
        "التسليم السريع والأسعار التنافسية تجعل رواسي المورد المفضل لدينا. أداة حاسبة المشروع مفيدة جداً لتقدير المواد.",
      projectType: "Residential Projects",
      location: "Riyadh, KSA",
    },
    {
      id: 4,
      name: "Jennifer Thompson",
      nameAr: "جينيفر تومسون",
      position: "DIY Enthusiast",
      positionAr: "هاوية أعمال يدوية",
      company: "Home Renovator",
      companyAr: "مجددة منازل",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      testimonial:
        "As a DIY enthusiast, I appreciate Rawasy's user-friendly website and detailed product descriptions. Even small orders are handled professionally, and the delivery is always on time.",
      testimonialAr:
        "كهاوية أعمال يدوية، أقدر موقع رواسي سهل الاستخدام ووصف المنتجات المفصل. حتى الطلبات الصغيرة تُعامل بمهنية.",
      projectType: "Home Renovation",
      location: "Cairo, Egypt",
    },
    {
      id: 5,
      name: "Khalid Al-Mansouri",
      nameAr: "خالد المنصوري",
      position: "Site Engineer",
      positionAr: "مهندس موقع",
      company: "Gulf Engineering Solutions",
      companyAr: "حلول الخليج الهندسية",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The quality certification and compliance documentation provided by Rawasy suppliers gives us confidence in our material choices. Their mobile app makes ordering from construction sites very convenient.",
      testimonialAr:
        "شهادات الجودة ووثائق الامتثال المقدمة من موردي رواسي تعطينا الثقة في اختيار المواد. تطبيق الهاتف المحمول يجعل الطلب من مواقع البناء مريحاً جداً.",
      projectType: "Infrastructure Projects",
      location: "Doha, Qatar",
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      nameAr: "ليزا رودريغيز",
      position: "Interior Designer",
      positionAr: "مصممة داخلية",
      company: "Rodriguez Interiors",
      companyAr: "رودريغيز للتصميم الداخلي",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      testimonial:
        "Rawasy's extensive selection of tiles, flooring, and finishing materials makes it easy to find exactly what my clients need. The comparison tool helps me present options effectively to clients.",
      testimonialAr:
        "مجموعة رواسي الواسعة من البلاط والأرضيات ومواد التشطيب تجعل من السهل العثور على ما يحتاجه عملائي بالضبط.",
      projectType: "Interior Design",
      location: "Kuwait City, Kuwait",
    },
  ]

  return (
    <div className="rts-construction-testimonials rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-center mb-5">
              <h2 className="title">What Our Customers Say</h2>
              <p className="subtitle text-muted">
                Trusted by contractors, builders, architects, and DIY enthusiasts across the region
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card bg-white rounded-4 shadow-sm h-100 p-4">
                {/* Rating Stars */}
                <div className="testimonial-rating mb-3">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < testimonial.rating ? "text-warning" : "text-muted"}`}
                      ></i>
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="testimonial-content mb-4">
                  <p className="testimonial-text mb-0">"{testimonial.testimonial}"</p>
                </div>

                {/* Customer Info */}
                <div className="customer-info d-flex align-items-center">
                  <div className="customer-avatar me-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="customer-details">
                    <h6 className="customer-name mb-0">{testimonial.name}</h6>
                    <p className="customer-name-ar text-muted small mb-1">{testimonial.nameAr}</p>
                    <p className="customer-position small text-muted mb-0">
                      {testimonial.position} at {testimonial.company}
                    </p>
                    <div className="customer-meta small text-muted">
                      <i className="fa-solid fa-briefcase me-1"></i>
                      {testimonial.projectType}
                      <span className="mx-2">•</span>
                      <i className="fa-solid fa-map-marker-alt me-1"></i>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="project-badge position-absolute top-0 end-0 m-3">
                  <span className="badge bg-light text-dark">{testimonial.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="testimonial-stats bg-primary text-white rounded-4 p-4">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="stat-item">
                    <h3 className="stat-number mb-1">4.8/5</h3>
                    <p className="stat-label mb-0">Average Rating</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="stat-item">
                    <h3 className="stat-number mb-1">15,000+</h3>
                    <p className="stat-label mb-0">Happy Customers</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="stat-item">
                    <h3 className="stat-number mb-1">98%</h3>
                    <p className="stat-label mb-0">On-Time Delivery</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="stat-item">
                    <h3 className="stat-number mb-1">24/7</h3>
                    <p className="stat-label mb-0">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <div className="testimonial-cta">
              <h4 className="mb-3">Ready to Experience Rawasy Quality?</h4>
              <p className="text-muted mb-4">
                Join thousands of satisfied customers who trust us for their construction material needs
              </p>
              <div className="cta-buttons">
                <a href="/shop" className="btn btn-primary btn-lg me-3">
                  <i className="fa-solid fa-shopping-cart me-2"></i>
                  Start Shopping
                </a>
                <a href="/contact" className="btn btn-outline-primary btn-lg">
                  <i className="fa-solid fa-phone me-2"></i>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructionTestimonials
