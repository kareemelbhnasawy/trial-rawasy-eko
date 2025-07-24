"use client"
import type React from "react"
import { useState } from "react"

const ProjectCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState("")
  const [area, setArea] = useState("")
  const [unit, setUnit] = useState("sqft")
  const [results, setResults] = useState<any>(null)

  const projectTypes = [
    { value: "residential", label: "Residential Building", icon: "fa-home" },
    { value: "commercial", label: "Commercial Building", icon: "fa-building" },
    { value: "warehouse", label: "Warehouse", icon: "fa-warehouse" },
    { value: "renovation", label: "Renovation", icon: "fa-tools" },
  ]

  const calculateMaterials = () => {
    if (!projectType || !area) return

    const areaNum = Number.parseFloat(area)
    let materials: any = {}

    // Basic calculation logic (simplified)
    switch (projectType) {
      case "residential":
        materials = {
          cement: Math.ceil(areaNum * 0.4),
          steel: Math.ceil(areaNum * 8),
          bricks: Math.ceil(areaNum * 40),
          sand: Math.ceil(areaNum * 0.8),
          aggregate: Math.ceil(areaNum * 1.2),
        }
        break
      case "commercial":
        materials = {
          cement: Math.ceil(areaNum * 0.6),
          steel: Math.ceil(areaNum * 12),
          bricks: Math.ceil(areaNum * 50),
          sand: Math.ceil(areaNum * 1.0),
          aggregate: Math.ceil(areaNum * 1.5),
        }
        break
      default:
        materials = {
          cement: Math.ceil(areaNum * 0.5),
          steel: Math.ceil(areaNum * 10),
          bricks: Math.ceil(areaNum * 45),
          sand: Math.ceil(areaNum * 0.9),
          aggregate: Math.ceil(areaNum * 1.3),
        }
    }

    // Calculate estimated costs
    const costs = {
      cement: materials.cement * 12,
      steel: materials.steel * 0.85,
      bricks: materials.bricks * 0.25,
      sand: materials.sand * 25,
      aggregate: materials.aggregate * 30,
    }

    const totalCost = Object.values(costs).reduce((sum: number, cost: any) => sum + cost, 0)

    setResults({
      materials,
      costs,
      totalCost,
      area: areaNum,
      projectType,
    })
  }

  return (
    <div className="rts-project-calculator rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-center mb-5">
              <h2 className="title">Project Material Calculator</h2>
              <p className="subtitle text-muted">Get instant estimates for your construction project materials</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="calculator-wrapper bg-white rounded-4 shadow-lg p-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="calculator-form">
                    <h4 className="mb-4">
                      <i className="fa-solid fa-calculator text-primary me-2"></i>
                      Project Details
                    </h4>

                    {/* Project Type Selection */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">Project Type</label>
                      <div className="project-types">
                        {projectTypes.map((type) => (
                          <div key={type.value} className="form-check project-type-option">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="projectType"
                              id={type.value}
                              value={type.value}
                              checked={projectType === type.value}
                              onChange={(e) => setProjectType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor={type.value}>
                              <div className="d-flex align-items-center">
                                <i className={`fa-solid ${type.icon} text-primary me-2`}></i>
                                {type.label}
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Area Input */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">Construction Area</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter area"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                        />
                        <select
                          className="form-select"
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          style={{ maxWidth: "120px" }}
                        >
                          <option value="sqft">Sq Ft</option>
                          <option value="sqm">Sq M</option>
                        </select>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                      className="btn btn-primary btn-lg w-100"
                      onClick={calculateMaterials}
                      disabled={!projectType || !area}
                    >
                      <i className="fa-solid fa-calculator me-2"></i>
                      Calculate Materials
                    </button>

                    <div className="calculator-note mt-3">
                      <small className="text-muted">
                        <i className="fa-solid fa-info-circle me-1"></i>
                        Estimates are approximate. Contact our experts for detailed quotes.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  {results ? (
                    <div className="calculator-results">
                      <h4 className="mb-4">
                        <i className="fa-solid fa-chart-bar text-success me-2"></i>
                        Material Estimate
                      </h4>

                      <div className="results-summary mb-4">
                        <div className="summary-card bg-primary text-white rounded-3 p-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">Total Estimated Cost</h6>
                              <h3 className="mb-0">${results.totalCost.toLocaleString()}</h3>
                            </div>
                            <i className="fa-solid fa-dollar-sign fa-2x opacity-50"></i>
                          </div>
                        </div>
                      </div>

                      <div className="materials-breakdown">
                        <h6 className="mb-3">Material Breakdown:</h6>

                        <div className="material-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-cube text-muted me-2"></i>
                            <span>Cement</span>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">{results.materials.cement} bags</div>
                            <small className="text-muted">${results.costs.cement}</small>
                          </div>
                        </div>

                        <div className="material-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-industry text-muted me-2"></i>
                            <span>Steel</span>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">{results.materials.steel} kg</div>
                            <small className="text-muted">${results.costs.steel}</small>
                          </div>
                        </div>

                        <div className="material-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-th-large text-muted me-2"></i>
                            <span>Bricks</span>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">{results.materials.bricks} pieces</div>
                            <small className="text-muted">${results.costs.bricks}</small>
                          </div>
                        </div>

                        <div className="material-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-mountain text-muted me-2"></i>
                            <span>Sand</span>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">{results.materials.sand} tons</div>
                            <small className="text-muted">${results.costs.sand}</small>
                          </div>
                        </div>

                        <div className="material-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-shapes text-muted me-2"></i>
                            <span>Aggregate</span>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">{results.materials.aggregate} tons</div>
                            <small className="text-muted">${results.costs.aggregate}</small>
                          </div>
                        </div>
                      </div>

                      <div className="results-actions mt-4">
                        <button className="btn btn-success w-100 mb-2">
                          <i className="fa-solid fa-shopping-cart me-2"></i>
                          Add All to Cart
                        </button>
                        <button className="btn btn-outline-primary w-100">
                          <i className="fa-solid fa-download me-2"></i>
                          Download Estimate
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="calculator-placeholder text-center py-5">
                      <i className="fa-solid fa-calculator fa-4x text-muted mb-3"></i>
                      <h5 className="text-muted">Enter project details to see estimates</h5>
                      <p className="text-muted">
                        Fill in the project type and area to get instant material calculations
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCalculator
