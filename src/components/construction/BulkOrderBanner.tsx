"use client"
import type React from "react"
import Link from "next/link"

const BulkOrderBanner: React.FC = () => {
  return (
    <div className="rts-bulk-order-banner rts-section-gap bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bulk-order-wrapper bg-gradient-primary rounded-4 p-5 text-white position-relative overflow-hidden">
              {/* Background Pattern */}
              <div className="position-absolute top-0 end-0 opacity-10">
                <i className="fa-solid fa-industry" style={{ fontSize: "15rem" }}></i>
              </div>

              <div className="row align-items-center position-relative">
                <div className="col-lg-8">
                  <div className="bulk-content">
                    <div className="bulk-badge mb-3">
                      <span className="badge bg-warning text-dark px-3 py-2">
                        <i className="fa-solid fa-percentage me-2"></i>
                        Bulk Pricing Available
                      </span>
                    </div>

                    <h2 className="bulk-title mb-3">
                      Save Big on Large Orders
                      <span className="d-block text-warning">Up to 30% Off Bulk Purchases</span>
                    </h2>

                    <p className="bulk-description mb-4">
                      Perfect for contractors, construction companies, and large projects. Get competitive wholesale
                      prices on cement, steel, lumber, and more.
                    </p>

                    <div className="bulk-features">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="feature-item d-flex align-items-center mb-2">
                            <i className="fa-solid fa-truck text-warning me-3"></i>
                            <span>Free Delivery on Orders $5,000+</span>
                          </div>
                          <div className="feature-item d-flex align-items-center mb-2">
                            <i className="fa-solid fa-handshake text-warning me-3"></i>
                            <span>Dedicated Account Manager</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="feature-item d-flex align-items-center mb-2">
                            <i className="fa-solid fa-calendar-check text-warning me-3"></i>
                            <span>Flexible Payment Terms</span>
                          </div>
                          <div className="feature-item d-flex align-items-center mb-2">
                            <i className="fa-solid fa-clock text-warning me-3"></i>
                            <span>Priority Processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="bulk-actions text-lg-end">
                    <div className="bulk-quote-card bg-white text-dark rounded-3 p-4 mb-3">
                      <h5 className="text-primary mb-3">Get Instant Quote</h5>
                      <div className="quote-form">
                        <div className="mb-3">
                          <select className="form-select">
                            <option>Select Category</option>
                            <option>Cement & Concrete</option>
                            <option>Steel & Rebar</option>
                            <option>Lumber & Wood</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <input type="number" className="form-control" placeholder="Quantity needed" />
                        </div>
                        <Link href="/bulk-quote" className="btn btn-primary w-100">
                          <i className="fa-solid fa-calculator me-2"></i>
                          Get Quote
                        </Link>
                      </div>
                    </div>

                    <div className="bulk-contact">
                      <p className="mb-2">
                        <strong>Need Help?</strong>
                      </p>
                      <p className="mb-0">
                        <i className="fa-solid fa-phone me-2"></i>
                        Call: +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="pricing-tiers">
                    <h4 className="text-center mb-4">Bulk Pricing Tiers</h4>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="tier-card text-center">
                          <div className="tier-icon mb-2">
                            <i className="fa-solid fa-box text-warning"></i>
                          </div>
                          <h6>Starter</h6>
                          <p className="small mb-1">$1,000 - $4,999</p>
                          <strong className="text-warning">5% Off</strong>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="tier-card text-center">
                          <div className="tier-icon mb-2">
                            <i className="fa-solid fa-boxes text-warning"></i>
                          </div>
                          <h6>Professional</h6>
                          <p className="small mb-1">$5,000 - $14,999</p>
                          <strong className="text-warning">15% Off</strong>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="tier-card text-center">
                          <div className="tier-icon mb-2">
                            <i className="fa-solid fa-warehouse text-warning"></i>
                          </div>
                          <h6>Contractor</h6>
                          <p className="small mb-1">$15,000 - $49,999</p>
                          <strong className="text-warning">25% Off</strong>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="tier-card text-center">
                          <div className="tier-icon mb-2">
                            <i className="fa-solid fa-industry text-warning"></i>
                          </div>
                          <h6>Enterprise</h6>
                          <p className="small mb-1">$50,000+</p>
                          <strong className="text-warning">30% Off</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkOrderBanner
