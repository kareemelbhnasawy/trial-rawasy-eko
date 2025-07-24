"use client";
import React, { useState } from 'react';

interface RFQItem {
    id: number;
    material: string;
    quantity: number;
    unit: string;
    specifications?: string;
}

interface RFQForm {
    projectName: string;
    projectType: string;
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    projectDeadline: string;
    additionalRequirements: string;
    items: RFQItem[];
}

const RFQSystem = () => {
    const [rfqForm, setRFQForm] = useState<RFQForm>({
        projectName: '',
        projectType: '',
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        deliveryAddress: '',
        projectDeadline: '',
        additionalRequirements: '',
        items: []
    });

    const [currentItem, setCurrentItem] = useState<Partial<RFQItem>>({
        material: '',
        quantity: 0,
        unit: '',
        specifications: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const projectTypes = [
        'Residential Construction',
        'Commercial Building',
        'Infrastructure Project',
        'Renovation/Remodeling',
        'Industrial Construction',
        'Bridge/Highway',
        'Other'
    ];

    const commonMaterials = [
        { name: 'Portland Cement Type I', units: ['bags', 'tons'] },
        { name: 'Steel Rebar Grade 60', units: ['pieces', 'tons'] },
        { name: 'Concrete Blocks', units: ['blocks', 'pallets'] },
        { name: 'Ready-Mix Concrete', units: ['cubic yards'] },
        { name: 'Structural Steel Beams', units: ['pieces', 'tons'] },
        { name: 'Marine Grade Plywood', units: ['sheets'] },
        { name: 'PVC Pipes', units: ['linear feet', 'pieces'] },
        { name: 'Electrical Wire', units: ['feet', 'rolls'] },
        { name: 'Roofing Materials', units: ['squares', 'bundles'] },
        { name: 'Insulation', units: ['rolls', 'square feet'] }
    ];

    const addItem = () => {
        if (currentItem.material && currentItem.quantity && currentItem.unit) {
            const newItem: RFQItem = {
                id: Date.now(),
                material: currentItem.material!,
                quantity: currentItem.quantity!,
                unit: currentItem.unit!,
                specifications: currentItem.specifications || ''
            };

            setRFQForm(prev => ({
                ...prev,
                items: [...prev.items, newItem]
            }));

            setCurrentItem({
                material: '',
                quantity: 0,
                unit: '',
                specifications: ''
            });
        }
    };

    const removeItem = (id: number) => {
        setRFQForm(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== id)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate required fields
        if (!rfqForm.projectName || !rfqForm.contactName || !rfqForm.email || rfqForm.items.length === 0) {
            alert('Please fill in all required fields and add at least one item.');
            return;
        }

        // Here you would typically send the RFQ to your backend
        console.log('RFQ Submitted:', rfqForm);
        setIsSubmitted(true);
    };

    const handleInputChange = (field: keyof RFQForm, value: string) => {
        setRFQForm(prev => ({ ...prev, [field]: value }));
    };

    const handleItemChange = (field: keyof RFQItem, value: string | number) => {
        setCurrentItem(prev => ({ ...prev, [field]: value }));
    };

    if (isSubmitted) {
        return (
            <div className="rfq-success-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="success-message">
                                <div className="success-icon">
                                    <i className="fa-solid fa-check-circle"></i>
                                </div>
                                <h2>RFQ Submitted Successfully!</h2>
                                <p>Thank you for your request for quotation. We have received your requirements and our team will review them shortly.</p>
                                
                                <div className="next-steps">
                                    <h4>What happens next?</h4>
                                    <ul>
                                        <li>Our procurement team will review your requirements</li>
                                        <li>We'll contact you within 24 hours to clarify any details</li>
                                        <li>You'll receive a detailed quotation within 2-3 business days</li>
                                        <li>Our project manager will discuss delivery schedules and terms</li>
                                    </ul>
                                </div>

                                <div className="reference-info">
                                    <p><strong>Reference ID:</strong> RFQ-{Date.now()}</p>
                                    <p><strong>Project:</strong> {rfqForm.projectName}</p>
                                    <p><strong>Contact:</strong> {rfqForm.contactName} ({rfqForm.email})</p>
                                </div>

                                <div className="action-buttons">
                                    <button 
                                        className="rts-btn btn-primary radious-sm"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Submit Another RFQ
                                    </button>
                                    <button className="rts-btn btn-secondary radious-sm">
                                        Track This RFQ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rfq-system-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rfq-area">
                            <div className="section-header text-center">
                                <h2 className="title">Request for Quotation (RFQ)</h2>
                                <p className="subtitle">Get competitive quotes for your construction material needs</p>
                            </div>

                            <form onSubmit={handleSubmit} className="rfq-form">
                                <div className="row">
                                    {/* Project Information */}
                                    <div className="col-lg-6">
                                        <div className="form-section">
                                            <h4 className="section-title">Project Information</h4>
                                            
                                            <div className="form-group">
                                                <label htmlFor="projectName">Project Name *</label>
                                                <input
                                                    type="text"
                                                    id="projectName"
                                                    className="form-control"
                                                    value={rfqForm.projectName}
                                                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                                                    placeholder="Enter project name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="projectType">Project Type *</label>
                                                <select
                                                    id="projectType"
                                                    className="form-control"
                                                    value={rfqForm.projectType}
                                                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select project type...</option>
                                                    {projectTypes.map((type, index) => (
                                                        <option key={index} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="projectDeadline">Project Deadline</label>
                                                <input
                                                    type="date"
                                                    id="projectDeadline"
                                                    className="form-control"
                                                    value={rfqForm.projectDeadline}
                                                    onChange={(e) => handleInputChange('projectDeadline', e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="deliveryAddress">Delivery Address *</label>
                                                <textarea
                                                    id="deliveryAddress"
                                                    className="form-control"
                                                    rows={3}
                                                    value={rfqForm.deliveryAddress}
                                                    onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                                                    placeholder="Enter complete delivery address"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="col-lg-6">
                                        <div className="form-section">
                                            <h4 className="section-title">Contact Information</h4>
                                            
                                            <div className="form-group">
                                                <label htmlFor="companyName">Company/Organization</label>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    className="form-control"
                                                    value={rfqForm.companyName}
                                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                                    placeholder="Enter company name"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="contactName">Contact Person *</label>
                                                <input
                                                    type="text"
                                                    id="contactName"
                                                    className="form-control"
                                                    value={rfqForm.contactName}
                                                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                                                    placeholder="Enter contact person name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    value={rfqForm.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    placeholder="Enter email address"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="form-control"
                                                    value={rfqForm.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    placeholder="Enter phone number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Material Items */}
                                <div className="form-section">
                                    <h4 className="section-title">Material Requirements</h4>
                                    
                                    <div className="add-item-form">
                                        <div className="row g-3">
                                            <div className="col-lg-3">
                                                <select
                                                    className="form-control"
                                                    value={currentItem.material || ''}
                                                    onChange={(e) => handleItemChange('material', e.target.value)}
                                                >
                                                    <option value="">Select material...</option>
                                                    {commonMaterials.map((material, index) => (
                                                        <option key={index} value={material.name}>
                                                            {material.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-lg-2">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    value={currentItem.quantity || ''}
                                                    onChange={(e) => handleItemChange('quantity', parseFloat(e.target.value) || 0)}
                                                />
                                            </div>
                                            <div className="col-lg-2">
                                                <select
                                                    className="form-control"
                                                    value={currentItem.unit || ''}
                                                    onChange={(e) => handleItemChange('unit', e.target.value)}
                                                >
                                                    <option value="">Unit...</option>
                                                    {currentItem.material && 
                                                        commonMaterials.find(m => m.name === currentItem.material)?.units.map((unit, index) => (
                                                            <option key={index} value={unit}>{unit}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-lg-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Specifications (optional)"
                                                    value={currentItem.specifications || ''}
                                                    onChange={(e) => handleItemChange('specifications', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-lg-2">
                                                <button
                                                    type="button"
                                                    className="rts-btn btn-primary radious-sm w-100"
                                                    onClick={addItem}
                                                >
                                                    Add Item
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {rfqForm.items.length > 0 && (
                                        <div className="items-list">
                                            <h5>Added Items:</h5>
                                            <div className="items-table">
                                                <div className="table-header">
                                                    <div className="col-material">Material</div>
                                                    <div className="col-quantity">Quantity</div>
                                                    <div className="col-specifications">Specifications</div>
                                                    <div className="col-actions">Actions</div>
                                                </div>
                                                
                                                {rfqForm.items.map((item) => (
                                                    <div key={item.id} className="table-row">
                                                        <div className="col-material">{item.material}</div>
                                                        <div className="col-quantity">{item.quantity} {item.unit}</div>
                                                        <div className="col-specifications">{item.specifications || 'Standard'}</div>
                                                        <div className="col-actions">
                                                            <button
                                                                type="button"
                                                                className="btn-remove"
                                                                onClick={() => removeItem(item.id)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Additional Requirements */}
                                <div className="form-section">
                                    <h4 className="section-title">Additional Requirements</h4>
                                    <div className="form-group">
                                        <label htmlFor="additionalRequirements">Special Requirements, Delivery Instructions, etc.</label>
                                        <textarea
                                            id="additionalRequirements"
                                            className="form-control"
                                            rows={4}
                                            value={rfqForm.additionalRequirements}
                                            onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                                            placeholder="Enter any special requirements, quality standards, delivery preferences, certifications needed, etc."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="form-submit">
                                    <button
                                        type="submit"
                                        className="rts-btn btn-primary radious-sm"
                                        disabled={rfqForm.items.length === 0}
                                    >
                                        Submit RFQ
                                    </button>
                                    <p className="submit-note">
                                        * Required fields. You will receive a response within 24-48 hours.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .rfq-system-wrapper,
                .rfq-success-wrapper {
                    padding: 80px 0;
                    background-color: var(--color-white);
                }
                
                .rfq-area {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .section-header {
                    margin-bottom: 50px;
                }
                
                .section-header .title {
                    color: var(--color-heading-1);
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                
                .section-header .subtitle {
                    color: var(--color-body);
                    font-size: 16px;
                }
                
                .form-section {
                    background-color: #f8f9fa;
                    padding: 30px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                }
                
                .section-title {
                    color: var(--color-heading-1);
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 25px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid var(--color-primary);
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--color-heading-1);
                    font-weight: 600;
                }
                
                .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e5e5e5;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                }
                
                .form-control:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                
                .add-item-form {
                    background-color: var(--color-white);
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 25px;
                }
                
                .items-list h5 {
                    color: var(--color-heading-1);
                    margin-bottom: 15px;
                    font-weight: 600;
                }
                
                .items-table {
                    border: 1px solid #e5e5e5;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                .table-header {
                    background-color: var(--color-primary);
                    color: white;
                    display: grid;
                    grid-template-columns: 2fr 1fr 2fr 1fr;
                    padding: 15px;
                    font-weight: 600;
                }
                
                .table-row {
                    display: grid;
                    grid-template-columns: 2fr 1fr 2fr 1fr;
                    padding: 15px;
                    border-bottom: 1px solid #e5e5e5;
                    align-items: center;
                }
                
                .table-row:last-child {
                    border-bottom: none;
                }
                
                .btn-remove {
                    background-color: #dc3545;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .btn-remove:hover {
                    background-color: #c82333;
                }
                
                .form-submit {
                    text-align: center;
                    padding: 30px 0;
                }
                
                .form-submit .rts-btn {
                    padding: 15px 40px;
                    font-size: 18px;
                    font-weight: 600;
                    background-color: var(--color-primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .form-submit .rts-btn:hover:not(:disabled) {
                    background-color: var(--color-secondary);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                
                .form-submit .rts-btn:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
                
                .submit-note {
                    margin-top: 15px;
                    color: var(--color-body);
                    font-size: 14px;
                }
                
                /* Success Page Styles */
                .success-message {
                    text-align: center;
                    background-color: #f8f9fa;
                    padding: 60px 40px;
                    border-radius: 12px;
                    border: 1px solid #e5e5e5;
                }
                
                .success-icon {
                    font-size: 72px;
                    color: var(--color-secondary);
                    margin-bottom: 30px;
                }
                
                .success-message h2 {
                    color: var(--color-heading-1);
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                
                .next-steps {
                    background-color: var(--color-white);
                    padding: 30px;
                    border-radius: 8px;
                    margin: 30px 0;
                    text-align: left;
                }
                
                .next-steps h4 {
                    color: var(--color-heading-1);
                    margin-bottom: 15px;
                    font-weight: 600;
                }
                
                .next-steps ul {
                    color: var(--color-body);
                    margin: 0;
                    padding-left: 20px;
                }
                
                .next-steps li {
                    margin-bottom: 8px;
                }
                
                .reference-info {
                    background-color: #e3f2fd;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 30px 0;
                    text-align: left;
                }
                
                .reference-info p {
                    margin-bottom: 8px;
                    color: var(--color-body);
                }
                
                .action-buttons {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    margin-top: 30px;
                }
                
                .action-buttons .rts-btn {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .action-buttons .btn-primary {
                    background-color: var(--color-primary);
                    color: white;
                }
                
                .action-buttons .btn-secondary {
                    background-color: var(--color-secondary);
                    color: white;
                }
                
                @media (max-width: 768px) {
                    .table-header,
                    .table-row {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }
                    
                    .action-buttons {
                        flex-direction: column;
                    }
                    
                    .section-header .title {
                        font-size: 28px;
                    }
                    
                    .form-section {
                        padding: 20px;
                    }
                    
                    .success-message {
                        padding: 40px 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default RFQSystem;
