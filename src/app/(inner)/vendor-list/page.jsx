"use client"
import { useState } from 'react';
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Vendors from '@/data/Vendors.json';

export default function VendorListPage() {
    const [activeTab, setActiveTab] = useState('tab2');

    return (
        <div>
            <HeaderOne />

            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <a href="/">Home</a>
                                <i className="fa-regular fa-chevron-right" />
                                <a className="current" href="/vendor-list">
                                    Construction Suppliers
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-seperator bg_light-1">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>

            <div className="vendor-search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vendor-search-area-wrapper">
                                <h1 className="title">Construction Material Suppliers</h1>
                                <form action="#" className="search-vendor-form">
                                    <input
                                        type="text"
                                        placeholder="Search suppliers (by name, category, or location)..."
                                    />
                                    <a href="/vendor-list" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">Search</div>
                                        <div className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass" />
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass" />
                                        </div>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* vendor filter area start */}
            <div className="vendor-search-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="filter-search-area-top-between filter-select-area">
                                <div className="top-filter">
                                    <span>Showing 1–10 of {Vendors.length} construction suppliers</span>
                                    <div className="right-end">
                                        <span>Sort: By Rating</span>
                                        <div className="button-tab-area">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        onClick={() => setActiveTab('tab2')}
                                                        className={`nav-link single-button ${activeTab === 'tab2' ? 'active' : ''}`}
                                                    >
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                                                            <rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                                                            <rect x="9.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                                                            <rect x="9.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        onClick={() => setActiveTab('tab1')}
                                                        className={`single-button nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                                    >
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3C28" />
                                                            <rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3C28" />
                                                            <rect x={9} y={3} width={7} height={1} fill="#2C3C28" />
                                                            <rect x={9} y={12} width={7} height={1} fill="#2C3C28" />
                                                        </svg>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-content mt--20" id="myTabContent">
                                {activeTab === 'tab2' && (
                                    <div>
                                        <div className="row g-4">
                                            {Vendors.map((vendor, index) => (
                                                <div key={vendor.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                                    <div className="single-vendor-area">
                                                        <div className="logo-vendor">
                                                            <img src={`/assets/images/vendor/${vendor.logo}`} alt={vendor.name} />
                                                        </div>
                                                        <h3 className="title">
                                                            {vendor.name} <span className="open">Open</span>
                                                        </h3>
                                                        <div className="stars-area">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i key={i} className={`fa-solid fa-star ${i < Math.floor(vendor.rating) ? '' : 'text-muted'}`} />
                                                            ))}
                                                            <span>{vendor.rating} out of 5 ({vendor.reviewCount} reviews)</span>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-regular fa-location-dot" />
                                                            <p>{vendor.location}</p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-industry" />
                                                            <p>{vendor.category} • {vendor.yearsOfExperience} years experience</p>
                                                        </div>
                                                        <div className="location">
                                                            <i className="fa-solid fa-phone-volume" />
                                                            <p>{vendor.contactInfo.phone}</p>
                                                        </div>
                                                        <div className="specialties-list">
                                                            <small>Specialties: {vendor.specialties.slice(0, 2).join(', ')}</small>
                                                        </div>
                                                        <a href={`/vendor-details`} className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">Visit Store</div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'tab1' && (
                                    <div>
                                        <div className="row g-4">
                                            {Vendors.map((vendor, index) => (
                                                <div key={vendor.id} className="col-lg-12">
                                                    <div className="single-vendor-area-list">
                                                        <div className="vendor-info-wrapper">
                                                            <div className="logo-vendor">
                                                                <img src={`/assets/images/vendor/${vendor.logo}`} alt={vendor.name} />
                                                            </div>
                                                            <div className="vendor-content">
                                                                <h3 className="title">
                                                                    {vendor.name} <span className="open">Open</span>
                                                                </h3>
                                                                <div className="stars-area">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <i key={i} className={`fa-solid fa-star ${i < Math.floor(vendor.rating) ? '' : 'text-muted'}`} />
                                                                    ))}
                                                                    <span>{vendor.rating} out of 5 ({vendor.reviewCount} reviews)</span>
                                                                </div>
                                                                <p className="description">{vendor.description}</p>
                                                                <div className="vendor-details-grid">
                                                                    <div className="location">
                                                                        <i className="fa-regular fa-location-dot" />
                                                                        <p>{vendor.location}</p>
                                                                    </div>
                                                                    <div className="location">
                                                                        <i className="fa-solid fa-industry" />
                                                                        <p>{vendor.category}</p>
                                                                    </div>
                                                                    <div className="location">
                                                                        <i className="fa-solid fa-phone-volume" />
                                                                        <p>{vendor.contactInfo.phone}</p>
                                                                    </div>
                                                                    <div className="location">
                                                                        <i className="fa-solid fa-calendar" />
                                                                        <p>Established {vendor.establishedYear}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="specialties-tags">
                                                                    {vendor.specialties.map((specialty, idx) => (
                                                                        <span key={idx} className="specialty-tag">{specialty}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="vendor-actions">
                                                                <div className="product-count">
                                                                    <span>{vendor.totalProducts} Products</span>
                                                                </div>
                                                                <a href={`/vendor-details`} className="rts-btn btn-primary radious-sm with-icon">
                                                                    <div className="btn-text">Visit Store</div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-light fa-arrow-right" />
                                                                    </div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-light fa-arrow-right" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />

            <style jsx>{`
                .single-vendor-area-list {
                    background: white;
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    margin-bottom: 20px;
                }
                
                .vendor-info-wrapper {
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 24px;
                    align-items: start;
                }
                
                .vendor-content {
                    flex: 1;
                }
                
                .vendor-details-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin: 16px 0;
                }
                
                .specialties-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 12px;
                }
                
                .specialty-tag {
                    background: #f0f0f0;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    color: #666;
                }
                
                .vendor-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }
                
                .product-count {
                    background: #629D23;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 600;
                }
                
                .specialties-list {
                    margin: 8px 0;
                    color: #666;
                }
                
                @media (max-width: 768px) {
                    .vendor-info-wrapper {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .vendor-details-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
