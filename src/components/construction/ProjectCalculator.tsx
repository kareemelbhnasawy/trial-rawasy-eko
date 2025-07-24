"use client"
import type React from "react"
import { useState } from "react"

const ProjectCalculator: React.FC = () => {
  const [language, setLanguage] = useState("en")
  const [projectType, setProjectType] = useState("")
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
    area: "",
  })
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const projectTypes = [
    {
      id: "foundation",
      name: { en: "Foundation", ar: "الأساس" },
      icon: "fa-solid fa-home-lg-alt",
      description: { en: "Calculate materials for foundation work", ar: "احسب المواد لأعمال الأساس" },
    },
    {
      id: "wall",
      name: { en: "Wall Construction", ar: "بناء الجدران" },
      icon: "fa-solid fa-wall-brick",
      description: { en: "Estimate materials for wall building", ar: "قدر المواد لبناء الجدران" },
    },
    {
      id: "roofing",
      name: { en: "Roofing", ar: "التسقيف" },
      icon: "fa-solid fa-home",
      description: { en: "Calculate roofing materials needed", ar: "احسب مواد التسقيف المطلوبة" },
    },
    {
      id: "flooring",
      name: { en: "Flooring", ar: "الأرضيات" },
      icon: "fa-solid fa-th-large",
      description: { en: "Estimate flooring materials", ar: "قدر مواد الأرضيات" },
    },
  ]

  const calculateMaterials = () => {
    setLoading(true)

    // Simulate calculation
    setTimeout(() => {
      const area = Number.parseFloat(dimensions.length) * Number.parseFloat(dimensions.width)
      const volume = area * Number.parseFloat(dimensions.height || "0.15")

      let materials: any = {}

      switch (projectType) {
        case "foundation":
          materials = {
            concrete: {
              name: { en: "Ready-Mix Concrete", ar: "خرسانة جاهزة" },
              quantity: Math.ceil(volume * 1.1), // 10% waste factor
              unit: { en: "m³", ar: "متر مكعب" },
              estimatedCost: Math.ceil(volume * 1.1) * 120,
              icon: "fa-solid fa-cube",
            },
            rebar: {
              name: { en: "Steel Rebar", ar: "حديد التسليح" },
              quantity: Math.ceil(area * 8), // 8kg per m²
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil(area * 8) * 1.2,
              icon: "fa-solid fa-industry",
            },
            cement: {
              name: { en: "Portland Cement", ar: "أسمنت بورتلاند" },
              quantity: Math.ceil(volume * 350), // 350kg per m³
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil((volume * 350) / 50) * 12.5,
              icon: "fa-solid fa-cube",
            },
          }
          break
        case "wall":
          materials = {
            blocks: {
              name: { en: "Concrete Blocks", ar: "بلوك خرساني" },
              quantity: Math.ceil(area * 12.5), // 12.5 blocks per m²
              unit: { en: "pieces", ar: "قطعة" },
              estimatedCost: Math.ceil(area * 12.5) * 2.5,
              icon: "fa-solid fa-cube",
            },
            mortar: {
              name: { en: "Mortar Mix", ar: "خلطة المونة" },
              quantity: Math.ceil(area * 0.02 * 1000), // 20L per m²
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil((area * 0.02 * 1000) / 25) * 8,
              icon: "fa-solid fa-trowel",
            },
            rebar: {
              name: { en: "Steel Rebar", ar: "حديد التسليح" },
              quantity: Math.ceil(area * 3), // 3kg per m²
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil(area * 3) * 1.2,
              icon: "fa-solid fa-industry",
            },
          }
          break
        case "roofing":
          materials = {
            tiles: {
              name: { en: "Roof Tiles", ar: "بلاط السقف" },
              quantity: Math.ceil(area * 15), // 15 tiles per m²
              unit: { en: "pieces", ar: "قطعة" },
              estimatedCost: Math.ceil(area * 15) * 3.25,
              icon: "fa-solid fa-home",
            },
            insulation: {
              name: { en: "Roof Insulation", ar: "عزل السقف" },
              quantity: Math.ceil(area * 1.1), // 10% waste
              unit: { en: "m²", ar: "متر مربع" },
              estimatedCost: Math.ceil(area * 1.1) * 28,
              icon: "fa-solid fa-shield-alt",
            },
            membrane: {
              name: { en: "Waterproof Membrane", ar: "غشاء مقاوم للماء" },
              quantity: Math.ceil(area * 1.05), // 5% overlap
              unit: { en: "m²", ar: "متر مربع" },
              estimatedCost: Math.ceil(area * 1.05) * 15,
              icon: "fa-solid fa-tint",
            },
          }
          break
        case "flooring":
          materials = {
            tiles: {
              name: { en: "Floor Tiles", ar: "بلاط الأرضية" },
              quantity: Math.ceil(area * 1.1), // 10% waste
              unit: { en: "m²", ar: "متر مربع" },
              estimatedCost: Math.ceil(area * 1.1) * 15.5,
              icon: "fa-solid fa-th-large",
            },
            adhesive: {
              name: { en: "Tile Adhesive", ar: "لاصق البلاط" },
              quantity: Math.ceil(area * 3), // 3kg per m²
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil((area * 3) / 25) * 18,
              icon: "fa-solid fa-paste",
            },
            grout: {
              name: { en: "Tile Grout", ar: "جص البلاط" },
              quantity: Math.ceil(area * 0.5), // 0.5kg per m²
              unit: { en: "kg", ar: "كيلو" },
              estimatedCost: Math.ceil((area * 0.5) / 5) * 12,
              icon: "fa-solid fa-fill",
            },
          }
          break
      }

      setResults({
        projectArea: area,
        materials: materials,
        totalCost: Object.values(materials).reduce((sum: number, material: any) => sum + material.estimatedCost, 0),
      })
      setLoading(false)
    }, 1500)
  }

  const resetCalculator = () => {
    setProjectType("")
    setDimensions({ length: "", width: "", height: "", area: "" })
    setResults(null)
  }

  return (
    <div className="project-calculator rts-section-gap bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between mb-5">
              <div className="title-left text-center">
                <h2 className="title">{language === "en" ? "Project Material Calculator" : "حاسبة مواد المشروع"}</h2>
                <p className="subtitle text-muted">
                  {language === "en"
                    ? "Estimate the materials and costs for your construction project"
                    : "قدر المواد والتكاليف لمشروع البناء الخاص بك"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="calculator-wrapper bg-light rounded-4 p-5">
              {/* Step 1: Project Type Selection */}
              <div className="calculator-step mb-4">
                <h4 className="step-title mb-3">
                  <span className="step-number badge bg-primary me-2">1</span>
                  {language === "en" ? "Select Project Type" : "اختر نوع المشروع"}
                </h4>

                <div className="project-types row g-3">
                  {projectTypes.map((type) => (
                    <div key={type.id} className="col-md-6 col-lg-3">
                      <div className="project-type-option">
                        <input
                          type="radio"
                          id={type.id}
                          name="projectType"
                          value={type.id}
                          checked={projectType === type.id}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="d-none"
                        />
                        <label htmlFor={type.id} className="w-100 text-center p-3 rounded-3 cursor-pointer">
                          <div className="type-icon mb-2">
                            <i className={`${type.icon} text-primary`} style={{ fontSize: "2rem" }}></i>
                          </div>
                          <h6 className="type-name mb-1">{language === "en" ? type.name.en : type.name.ar}</h6>
                          <p className="type-description small text-muted mb-0">
                            {language === "en" ? type.description.en : type.description.ar}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Dimensions Input */}
              {projectType && (
                <div className="calculator-step mb-4">
                  <h4 className="step-title mb-3">
                    <span className="step-number badge bg-primary me-2">2</span>
                    {language === "en" ? "Enter Dimensions" : "أدخل الأبعاد"}
                  </h4>

                  <div className="dimensions-input row g-3">
                    <div className="col-md-3">
                      <label className="form-label">{language === "en" ? "Length (m)" : "الطول (متر)"}</label>
                      <input
                        type="number"
                        className="form-control"
                        value={dimensions.length}
                        onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                        placeholder="0.00"
                        step="0.1"
                        min="0"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">{language === "en" ? "Width (m)" : "العرض (متر)"}</label>
                      <input
                        type="number"
                        className="form-control"
                        value={dimensions.width}
                        onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                        placeholder="0.00"
                        step="0.1"
                        min="0"
                      />
                    </div>
                    {(projectType === "foundation" || projectType === "wall") && (
                      <div className="col-md-3">
                        <label className="form-label">{language === "en" ? "Height (m)" : "الارتفاع (متر)"}</label>
                        <input
                          type="number"
                          className="form-control"
                          value={dimensions.height}
                          onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                          placeholder="0.00"
                          step="0.1"
                          min="0"
                        />
                      </div>
                    )}
                    <div className="col-md-3">
                      <label className="form-label">{language === "en" ? "Area (m²)" : "المساحة (متر مربع)"}</label>
                      <input
                        type="number"
                        className="form-control bg-light"
                        value={
                          dimensions.length && dimensions.width
                            ? (Number.parseFloat(dimensions.length) * Number.parseFloat(dimensions.width)).toFixed(2)
                            : ""
                        }
                        readOnly
                        placeholder="Auto calculated"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Calculate Button */}
              {projectType && dimensions.length && dimensions.width && (
                <div className="calculator-step mb-4">
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-primary btn-lg px-5" onClick={calculateMaterials} disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          {language === "en" ? "Calculating..." : "جاري الحساب..."}
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-calculator me-2"></i>
                          {language === "en" ? "Calculate Materials" : "احسب المواد"}
                        </>
                      )}
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-4" onClick={resetCalculator}>
                      <i className="fa-solid fa-refresh me-2"></i>
                      {language === "en" ? "Reset" : "إعادة تعيين"}
                    </button>
                  </div>
                </div>
              )}

              {/* Results Section */}
              {results && (
                <div className="calculator-results">
                  <h4 className="results-title mb-4">
                    <span className="step-number badge bg-success me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    {language === "en" ? "Material Estimation Results" : "نتائج تقدير المواد"}
                  </h4>

                  {/* Project Summary */}
                  <div className="project-summary bg-white rounded-3 p-4 mb-4">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="summary-item text-center">
                          <i
                            className="fa-solid fa-ruler-combined text-primary mb-2"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <h6 className="summary-label mb-1">{language === "en" ? "Project Area" : "مساحة المشروع"}</h6>
                          <p className="summary-value h5 mb-0 text-primary">
                            {results.projectArea.toFixed(2)} {language === "en" ? "m²" : "متر مربع"}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="summary-item text-center">
                          <i className="fa-solid fa-boxes text-warning mb-2" style={{ fontSize: "1.5rem" }}></i>
                          <h6 className="summary-label mb-1">
                            {language === "en" ? "Material Types" : "أنواع المواد"}
                          </h6>
                          <p className="summary-value h5 mb-0 text-warning">
                            {Object.keys(results.materials).length} {language === "en" ? "items" : "عنصر"}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="summary-item text-center">
                          <i className="fa-solid fa-dollar-sign text-success mb-2" style={{ fontSize: "1.5rem" }}></i>
                          <h6 className="summary-label mb-1">
                            {language === "en" ? "Estimated Cost" : "التكلفة المقدرة"}
                          </h6>
                          <p className="summary-value h5 mb-0 text-success">${results.totalCost.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Materials List */}
                  <div className="materials-list">
                    <h5 className="materials-title mb-3">
                      {language === "en" ? "Required Materials:" : "المواد المطلوبة:"}
                    </h5>
                    <div className="row g-3">
                      {Object.entries(results.materials).map(([key, material]: [string, any]) => (
                        <div key={key} className="col-md-6 col-lg-4">
                          <div className="material-item bg-white rounded-3 p-4 h-100 border">
                            <div className="material-header d-flex align-items-center mb-3">
                              <div
                                className="material-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{ width: "50px", height: "50px" }}
                              >
                                <i className={material.icon}></i>
                              </div>
                              <div className="material-info">
                                <h6 className="material-name mb-1">
                                  {language === "en" ? material.name.en : material.name.ar}
                                </h6>
                                <span className="material-category small text-muted">
                                  {projectTypes.find((t) => t.id === projectType)?.name[language] || ""}
                                </span>
                              </div>
                            </div>

                            <div className="material-details">
                              <div className="quantity-info mb-2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="quantity-label small text-muted">
                                    {language === "en" ? "Quantity:" : "الكمية:"}
                                  </span>
                                  <span className="quantity-value fw-bold">
                                    {material.quantity.toLocaleString()}{" "}
                                    {language === "en" ? material.unit.en : material.unit.ar}
                                  </span>
                                </div>
                              </div>

                              <div className="cost-info">
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="cost-label small text-muted">
                                    {language === "en" ? "Est. Cost:" : "التكلفة المقدرة:"}
                                  </span>
                                  <span className="cost-value fw-bold text-success">
                                    ${material.estimatedCost.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="material-actions mt-3">
                              <button className="btn btn-outline-primary btn-sm w-100">
                                <i className="fa-solid fa-cart-plus me-2"></i>
                                {language === "en" ? "Add to Cart" : "أضف للسلة"}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="results-actions mt-4 text-center">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <button className="btn btn-success btn-lg px-4">
                        <i className="fa-solid fa-shopping-cart me-2"></i>
                        {language === "en" ? "Add All to Cart" : "أضف الكل للسلة"}
                      </button>
                      <button className="btn btn-outline-primary btn-lg px-4">
                        <i className="fa-solid fa-download me-2"></i>
                        {language === "en" ? "Download PDF" : "تحميل PDF"}
                      </button>
                      <button className="btn btn-outline-secondary btn-lg px-4">
                        <i className="fa-solid fa-share me-2"></i>
                        {language === "en" ? "Share Results" : "شارك النتائج"}
                      </button>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="calculator-disclaimer mt-4 p-3 bg-warning bg-opacity-10 rounded-3">
                    <div className="d-flex align-items-start">
                      <i className="fa-solid fa-exclamation-triangle text-warning me-2 mt-1"></i>
                      <div className="disclaimer-content">
                        <h6 className="disclaimer-title mb-1">
                          {language === "en" ? "Important Note:" : "ملاحظة مهمة:"}
                        </h6>
                        <p className="disclaimer-text small mb-0">
                          {language === "en"
                            ? "These calculations are estimates based on standard construction practices. Actual material requirements may vary depending on specific project conditions, local building codes, and construction methods. We recommend consulting with a structural engineer or construction professional for precise calculations."
                            : "هذه الحسابات تقديرية بناءً على ممارسات البناء المعيارية. قد تختلف متطلبات المواد الفعلية حسب ظروف المشروع المحددة وقوانين البناء المحلية وطرق البناء. نوصي بالتشاور مع مهندس إنشائي أو محترف بناء للحصول على حسابات دقيقة."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Calculator Features */}
        <div className="calculator-features mt-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-calculator text-primary" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h6 className="feature-title mb-2">{language === "en" ? "Accurate Estimates" : "تقديرات دقيقة"}</h6>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Based on industry standards and best practices"
                    : "بناءً على معايير الصناعة وأفضل الممارسات"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-clock text-success" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h6 className="feature-title mb-2">{language === "en" ? "Save Time" : "وفر الوقت"}</h6>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Get instant material calculations in seconds"
                    : "احصل على حسابات المواد الفورية في ثوانٍ"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-dollar-sign text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h6 className="feature-title mb-2">{language === "en" ? "Cost Planning" : "تخطيط التكلفة"}</h6>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Budget your project with estimated material costs"
                    : "ضع ميزانية مشروعك مع تكاليف المواد المقدرة"}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="fa-solid fa-shopping-cart text-info" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h6 className="feature-title mb-2">{language === "en" ? "Direct Purchase" : "شراء مباشر"}</h6>
                <p className="feature-description small text-muted mb-0">
                  {language === "en"
                    ? "Add calculated materials directly to your cart"
                    : "أضف المواد المحسوبة مباشرة إلى سلتك"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCalculator
